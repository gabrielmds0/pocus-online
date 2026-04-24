/**
 * Seção 13 - Retomada de Entregáveis / Oferta (DARK RED)
 */

import { Award, Check, Lock, Monitor, Shield, Video } from "lucide-react";
import LeadCaptureButton from "@/components/LeadCaptureButton";
import { useReveal } from "@/hooks/useReveal";

const destaques = [
  {
    icon: Monitor,
    titulo: "100% online",
    descricao: "Aulas gravadas + app mobile",
  },
  {
    icon: Video,
    titulo: "Casos reais",
    descricao: "Imagens reais de casos clínicos à beira-leito",
  },
  {
    icon: Award,
    titulo: "Certificado",
    descricao: "Ao concluir o curso",
  },
];

const conteudo = [
  "Acesso completo a todos os módulos e atualizações",
  "20 horas de aulas gravadas e organizadas",
  "Casos clínicos guiados passo a passo",
  "Protocolos e artigos para consulta rápida",
];

const suporte = [
  "52 horas de aulas ao vivo para revisão e tira-dúvidas",
  "App mobile para estudar offline",
  "Comunidade ativa e suporte da equipe",
  "1 ano de acesso à plataforma",
];

export default function Oferta() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="oferta"
      className="noise-overlay section-padding reveal text-primary-foreground"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/FUNDO-V2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "oklch(0.12 0.02 260)",
      }}
    >
      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          {/* Outer glow */}
          <div className="absolute -inset-4 bg-gradient-to-b from-brand-red/5 via-white/3 to-brand-blue/5 rounded-[2rem] blur-2xl pointer-events-none hidden lg:block" />

          <div className="relative bg-background text-foreground rounded-3xl p-7 sm:p-10 lg:p-12" style={{ boxShadow: "0 0 0 1px oklch(0 0 0 / 0.05), 0 25px 60px oklch(0 0 0 / 0.3)" }}>
            <div className="text-center mb-10">
              <div className="accent-line-red mx-auto mb-5" />
              <h2 className="headline-card mb-2">Descomplica POCUS Online</h2>
              <p className="body-sm text-muted-foreground">
                Tudo o que você recebe para usar POCUS com segurança no plantão
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4 sm:grid-cols-3 mb-10">
              {destaques.map((item) => (
                <div
                  key={item.titulo}
                  className="rounded-2xl border border-border/60 bg-muted/40 p-5 text-center transition-all duration-300 hover:bg-muted/70 hover:border-brand-red/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <p className="text-sm font-semibold tracking-tight">{item.titulo}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.descricao}</p>
                </div>
              ))}
            </div>

            {/* Content lists */}
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] mb-10">
              <div>
                <p className="font-semibold text-sm mb-5 uppercase tracking-wide text-brand-red">Conteúdo e prática</p>
                <ul className="space-y-3.5">
                  {conteudo.map((b, i) => (
                    <li key={i} className="check-item">
                      <div className="check-icon check-icon-red">
                        <Check />
                      </div>
                      <span className="body-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sm mb-5 uppercase tracking-wide text-brand-red">Suporte e acesso</p>
                <ul className="space-y-3.5">
                  {suporte.map((b, i) => (
                    <li key={i} className="check-item">
                      <div className="check-icon check-icon-red">
                        <Check />
                      </div>
                      <span className="body-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <LeadCaptureButton className="btn-cta btn-cta-red btn-cta-pulse text-base w-full inline-flex items-center justify-center text-lg py-5">
              Quero garantir minha vaga
            </LeadCaptureButton>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Depois do cadastro, enviamos os próximos passos
            </p>

            {/* Guarantee */}
            <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-brand-red/5 to-transparent border border-brand-red/10 mt-8">
              <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <p className="font-semibold text-sm">Garantia de 7 dias</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Se não fizer sentido, devolvemos 100% do seu dinheiro
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs mt-5">
              <Lock className="w-3.5 h-3.5" />
              <span>Pagamento 100% seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
