/**
 * Seção 13 - Retomada de Entregáveis / Oferta
 */

import { Award, Check, Lock, Monitor, Shield, Video } from "lucide-react";

const CHECKOUT_URL = "https://clkdmg.site/pay/pocus-online";

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
  "Mais de 17 horas de aulas gravadas e organizadas",
  "Casos clínicos guiados passo a passo",
  "Protocolos e artigos para consulta rápida",
];

const suporte = [
  "78 horas de aulas ao vivo para revisão e tira-dúvidas",
  "App mobile para estudar offline",
  "Comunidade ativa e suporte da equipe",
  "1 ano de acesso à plataforma",
];

export default function Oferta() {
  return (
    <section id="oferta" className="section-dark section-padding noise-overlay">
      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-background text-foreground rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="accent-line mx-auto mb-5" />
              <h2 className="headline-card mb-2">POCUS Online</h2>
              <p className="body-sm text-muted-foreground">
                Tudo o que você recebe para usar POCUS com segurança no plantão
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              {destaques.map((item) => (
                <div
                  key={item.titulo}
                  className="rounded-2xl border border-border/60 bg-muted/50 p-4 text-center"
                >
                  <item.icon className="w-5 h-5 mx-auto mb-2 text-accent" />
                  <p className="text-sm font-semibold">{item.titulo}</p>
                  <p className="text-xs text-muted-foreground">{item.descricao}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] mb-8">
              <div>
                <p className="font-medium text-sm mb-4">Conteúdo e prática</p>
                <ul className="space-y-2.5">
                  {conteudo.map((b, i) => (
                    <li key={i} className="check-item">
                      <div className="check-icon check-icon-positive">
                        <Check />
                      </div>
                      <span className="body-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm mb-4">Suporte e acesso</p>
                <ul className="space-y-2.5">
                  {suporte.map((b, i) => (
                    <li key={i} className="check-item">
                      <div className="check-icon check-icon-positive">
                        <Check />
                      </div>
                      <span className="body-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={CHECKOUT_URL}
              className="btn-cta text-base w-full inline-flex items-center justify-center"
            >
              Quero garantir minha vaga
            </a>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Depois do cadastro, enviamos os próximos passos
            </p>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 mt-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm">Garantia de 7 dias</p>
                <p className="text-xs text-muted-foreground">
                  Se não fizer sentido, devolvemos 100% do seu dinheiro
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs mt-4">
              <Lock className="w-3.5 h-3.5" />
              <span>Pagamento 100% seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
