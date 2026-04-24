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

const REDIRECT_URL = "https://clkdmg.site/pay/link-pocus-online";
const WEBHOOK_URL =
  "https://projetolm-n8n.8x0hqh.easypanel.host/webhook/6f8b3cb4-f5e0-4e35-8d50-2e85eb0cc06b";

const tempoFormadoOptions = [
  { label: "CRM ativo há mais de 3 anos", value: "crm_mais_3_anos" },
  { label: "CRM ativo há menos de 3 anos", value: "crm_menos_3_anos" },
  { label: "Revalidando", value: "revalidando" },
  { label: "Interno", value: "interno" },
  { label: "Estudante de Medicina - Ciclo Clínico", value: "estudante_ciclo_clinico" },
  { label: "Estudante de Medicina - Ciclo Básico", value: "estudante_ciclo_basico" },
  { label: "Não sou médico", value: "nao_medico" },
];

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LeadCaptureModal({ open, onOpenChange }: LeadCaptureModalProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      const invalidFields: string[] = [];
      const inputs = form.querySelectorAll("input[required]");
      inputs.forEach((input) => {
        if (!(input as HTMLInputElement).validity.valid) {
          invalidFields.push((input as HTMLInputElement).name || (input as HTMLInputElement).id);
        }
      });
      trackFormValidationError(invalidFields);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(form);
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

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
        <form className="space-y-5" onSubmit={handleSubmit}>
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
                className="h-11 pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-phone">
              Telefone celular <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="lead-phone"
                name="telefone"
                type="tel"
                inputMode="tel"
                placeholder="(11) 99999-9999"
                autoComplete="tel"
                required
                className="h-11 pl-10"
              />
            </div>
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
