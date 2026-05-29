import * as React from "react";
import { Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { saveFormData, buildTrackedUrl, getStoredUtms } from "@/hooks/useTracking";
import { useFormTracking, getCaptureData } from "@/hooks/useFormTracking";

const REDIRECT_URL = "https://clkdmg.site/pay/link-pocusonline";
const WEBHOOK_URL =
  "https://projetolm-n8n.8x0hqh.easypanel.host/webhook/6f8b3cb4-f5e0-4e35-8d50-2e85eb0cc06b";

const tempoFormadoOptions = [
  { label: "CRM ativo há mais de 6 anos", value: "crm_mais_6_anos" },
  { label: "CRM ativo entre 3 e 6 anos", value: "crm_entre_3_e_6_anos" },
  { label: "CRM ativo há menos de 3 anos", value: "crm_menos_3_anos" },
  { label: "Revalidando", value: "revalidando" },
  { label: "(Primeiro Ano) Interno", value: "primeiro_ano_interno" },
  { label: "(Ultimo Ano) Interno", value: "ultimo_ano_interno" },
  { label: "Ciclo Clínico", value: "estudante_ciclo_clinico" },
  { label: "Ciclo Básico", value: "estudante_ciclo_basico" },
  { label: "Outras Profissões", value: "nao_medico" },
];

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LeadCaptureModal({ open, onOpenChange }: LeadCaptureModalProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = React.useState<{ email?: string; telefone?: string }>({});

  const pageLoadTime = React.useRef(
    typeof performance !== "undefined" && performance.timeOrigin
      ? Math.round(performance.timeOrigin)
      : Date.now()
  );
  const modalOpenTime = React.useRef<number | null>(null);

  const {
    trackFormStart,
    trackFormValidationError,
    trackFormDataCaptured,
    trackFormSubmit,
    trackFormSuccess,
    trackFormError,
    trackFormRedirect,
  } = useFormTracking({ formName: "lead_capture_pocus" });

  React.useEffect(() => {
    if (!open) return;
    modalOpenTime.current = Date.now();
    const captureData = getCaptureData(pageLoadTime.current, modalOpenTime.current);
    trackFormStart({
      page_path: captureData.page_path,
      utm_source: captureData.utm_source,
      utm_campaign: captureData.utm_campaign,
      time_on_site_seconds: captureData.time_on_site_seconds,
      device_type: captureData.device_type,
      is_returning_visitor: captureData.is_returning_visitor,
    });
  }, [open, trackFormStart]);

  const validateEmail = (value: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? "" : "Digite um e-mail válido.";
  };

  const validatePhone = (value: string): string => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 11
      ? ""
      : "Digite um telefone válido com DDD.";
  };

  const applyPhoneMask = (raw: string): string => {
    let v = raw.replace(/\D/g, "").slice(0, 11);
    if (v.length > 6) v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    else if (v.length > 0) v = `(${v}`;
    return v;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    const emailError = validateEmail(payload.email || "");
    const phoneError = validatePhone(payload.telefone || "");

    if (emailError || phoneError) {
      setFieldErrors({
        email: emailError || undefined,
        telefone: phoneError || undefined,
      });
      trackFormValidationError([
        ...(emailError ? ["email"] : []),
        ...(phoneError ? ["telefone"] : []),
      ]);
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      const invalidFields: string[] = [];
      form.querySelectorAll("input[required]").forEach((input) => {
        if (!(input as HTMLInputElement).validity.valid) {
          invalidFields.push((input as HTMLInputElement).name || (input as HTMLInputElement).id);
        }
      });
      trackFormValidationError(invalidFields);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const selectedTempoFormado = tempoFormadoOptions.find(
      (option) => option.label === payload.tempo_formado
    );

    const captureData = getCaptureData(pageLoadTime.current, modalOpenTime.current);

    trackFormDataCaptured({
      name: payload.nome,
      email: payload.email,
      phone: payload.telefone,
      tempo_formado: payload.tempo_formado,
      tempo_formado_codigo: selectedTempoFormado?.value || "",
    });

    trackFormSubmit({
      form_name: "lead_capture_pocus",
      utm_source: captureData.utm_source,
      utm_campaign: captureData.utm_campaign,
      device_type: captureData.device_type,
    });

    const utms = getStoredUtms();
    const payloadWithUtms = {
      ...captureData,
      ...payload,
      utm_source: utms.utm_source || captureData.utm_source || "direct",
      utm_medium: utms.utm_medium || captureData.utm_medium || "website",
      utm_campaign: utms.utm_campaign || captureData.utm_campaign || "pocus_online",
      utm_content: utms.utm_content || captureData.utm_content || "",
      utm_term: utms.utm_term || captureData.utm_term || "",
      tempo_formado_codigo: selectedTempoFormado?.value || "",
      gclid: utms.gclid || captureData.gclid || "",
      fbclid: utms.fbclid || captureData.fbclid || "",
      site_path: window.location.pathname,
      tag: "lead_cf_pocus",
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadWithUtms),
      });

      if (!response.ok) throw new Error("request-failed");

      trackFormSuccess({
        name: payload.nome,
        email: payload.email,
        phone: payload.telefone,
      });

      saveFormData({
        name: payload.nome,
        email: payload.email,
        phone: payload.telefone,
      });

      const trackedUrl = buildTrackedUrl(REDIRECT_URL);
      trackFormRedirect(trackedUrl || REDIRECT_URL);

      window.setTimeout(() => {
        window.location.href = trackedUrl || REDIRECT_URL;
      }, 300);
    } catch (error) {
      trackFormError(error);
      setSubmitError("Falha ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Complete seus dados</DialogTitle>
          <DialogDescription>Preencha o formulário para continuar sua inscrição.</DialogDescription>
        </DialogHeader>
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="space-y-2">
            <Label htmlFor="lead-name">
              Nome completo <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="lead-name"
                name="nome"
                placeholder="Dr. João Silva"
                autoComplete="name"
                required
                className="h-11 pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-email">
              Email profissional <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="lead-email"
                name="email"
                type="email"
                placeholder="joao@exemplo.com"
                autoComplete="email"
                required
                className={`h-11 pl-10 ${fieldErrors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                onChange={(e) =>
                  setFieldErrors((prev) => ({
                    ...prev,
                    email: e.target.value ? validateEmail(e.target.value) : undefined,
                  }))
                }
              />
            </div>
            {fieldErrors.email && (
              <p className="text-xs text-destructive">{fieldErrors.email}</p>
            )}
          </div>

          {/* CAMPO DE TELEFONE ALTERADO */}
          <div className="space-y-2">
            <Label htmlFor="lead-phone">
              Telefone celular <span className="text-destructive">*</span>
            </Label>
            <div
              className={`flex h-11 items-center overflow-hidden rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${
                fieldErrors.telefone ? "border-destructive focus-within:ring-destructive" : "border-input"
              }`}
            >
              <div className="flex h-full items-center gap-1.5 border-r border-input bg-muted px-3 text-sm font-medium text-muted-foreground select-none">
                <Phone className="size-4" />
                <span>+55</span>
              </div>
              <Input
                id="lead-phone"
                name="telefone"
                type="tel"
                inputMode="tel"
                placeholder="(11) 99999-9999"
                autoComplete="tel"
                required
                className="h-full flex-1 rounded-none border-0 pl-3 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                onChange={(e) => {
                  const masked = applyPhoneMask(e.target.value);
                  e.target.value = masked;
                  setFieldErrors((prev) => ({
                    ...prev,
                    telefone: masked ? validatePhone(masked) : undefined,
                  }));
                }}
              />
            </div>
            {fieldErrors.telefone && (
              <p className="text-xs text-destructive">{fieldErrors.telefone}</p>
            )}
          </div>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium">
              Qual é seu perfil hoje? <span className="text-destructive">*</span>
            </legend>
            <div className="space-y-3">
              {tempoFormadoOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 rounded-xl border border-input px-4 py-3 text-sm transition-colors hover:border-accent"
                >
                  <input
                    type="radio"
                    name="tempo_formado"
                    value={option.label}
                    required
                    className="size-4 accent-accent"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {submitError ? <p className="text-sm text-destructive">{submitError}</p> : null}

          <Button type="submit" className="btn-cta w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Quero garantir minha vaga"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}