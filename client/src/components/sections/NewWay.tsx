/**
 * Seção 6 - New Way
 */

import { useReveal } from "@/hooks/useReveal";

export default function NewWay() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-warm section-padding-sm reveal">
      <div className="container">
        <div className="md:grid md:grid-cols-[1fr_1.15fr] md:gap-14 lg:gap-20 md:items-center">
          <div className="max-w-2xl md:max-w-none">
            <span className="tag mb-5 inline-block">DECISÃO INTEGRADA</span>

            <h2 className="headline-section mb-8">
              O exame clínico é a base.
              <br />
              <strong className="text-accent">POCUS é o que potencializa a conduta.</strong>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/8 to-accent/3 rounded-3xl blur-xl pointer-events-none" />
            <div className="relative bg-white rounded-2xl border border-border/40 p-7 sm:p-9 overflow-hidden" style={{ boxShadow: "0 1px 3px oklch(0 0 0 / 0.03), 0 8px 30px oklch(0 0 0 / 0.06)" }}>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
              <h3 className="headline-card mb-6">
                Com o ultrassom à beira-leito, o exame clínico se torna mais completo e seu paciente ganha com decisões mais rápidas e seguras
              </h3>

              <div className="body-md text-muted-foreground space-y-5">
                <p>
                  O exame clínico bem feito continua sendo a base.
                  Mas acreditar que apenas seus quatro pilares são suficientes pode limitar a qualidade do
                  atendimento ao seu paciente.
                </p>
                <p>
                  O POCUS não substitui esse processo. Ele se integra a ele.
                </p>
                <p>
                  Ao trazer a imagem para o leito, você encurta o caminho da decisão: examina, confirma
                  e decide sem perder tempo. Isso reduz a incerteza e permite uma condução mais rápida,
                  precisa e segura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
