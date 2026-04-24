/**
 * Seção 2 - A Grande Oportunidade
 */

import { useReveal } from "@/hooks/useReveal";

const baseUrl = import.meta.env.BASE_URL;

export default function Oportunidade() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-warm section-padding-sm reveal">
      <div className="container">
        <div className="md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-14 lg:gap-20 md:items-center">
          <div className="max-w-2xl md:max-w-none">
            <span className="tag mb-5 inline-block">CADA MINUTO IMPORTA</span>

            <h2 className="headline-section mb-8">
              Ganhe tempo entre o diagnóstico e a conduta através do ultrassom à beira-leito
            </h2>

            <div className="body-md text-muted-foreground space-y-5">
              <p>
                No paciente grave, o problema não é a falta de hipóteses, é tempo até agir.
                O POCUS encurta esse intervalo e amplia a avaliação sendo reconhecido
                como o 5º pilar do exame físico.
              </p>
            </div>

            {/* Stat card */}
            <div className="mt-8 relative rounded-2xl overflow-hidden border border-accent/15 bg-gradient-to-br from-accent/[0.07] via-accent/[0.03] to-transparent p-6 sm:p-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
                <div className="flex items-center gap-4 sm:gap-6 flex-1">
                  <div className="text-center shrink-0">
                    <span className="stat-number text-accent text-5xl sm:text-6xl">47%</span>
                    <p className="text-muted-foreground text-[11px] sm:text-xs mt-1.5 uppercase tracking-wider font-medium">exame isolado</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <div className="text-center shrink-0">
                    <span className="stat-number text-accent text-5xl sm:text-6xl">82%</span>
                    <p className="text-muted-foreground text-[11px] sm:text-xs mt-1.5 uppercase tracking-wider font-medium">com POCUS</p>
                  </div>
                </div>
                <div className="sm:border-l sm:border-accent/10 sm:pl-6 flex-1">
                  <p className="body-md text-foreground font-medium leading-relaxed">
                    O POCUS aumenta a precisão diagnóstica à beira-leito.
                  </p>
                  <p className="text-muted-foreground text-xs mt-3 italic">
                    Fonte: <em>Journal of the American Medical Association Cardiology</em>, 2018
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-10 md:mt-0">
            <div className="img-frame">
              <img
                src={`${baseUrl}images/POCUS.png`}
                alt="POCUS"
                className="w-full h-auto"
                style={{ maxHeight: "500px", objectFit: "contain" }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
