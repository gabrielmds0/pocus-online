/**
 * Seção 4 - Plausibilidade (LIGHT)
 */

import { useReveal } from "@/hooks/useReveal";

const baseUrl = import.meta.env.BASE_URL;

export default function Plausibilidade() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-light section-padding reveal">
      <div className="container">
        <div className="lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:items-center">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <span className="tag mb-6 inline-block">A REALIDADE</span>

            <h2 className="headline-section mb-10 leading-snug text-left">
              Antecipar a decisão clínica{" "}
              <strong className="text-accent">com POCUS</strong>{" "}
              muda o desfecho no{" "}
              <strong className="text-accent">paciente grave</strong>
            </h2>

            <div className="body-md text-muted-foreground space-y-5">
              <p>
                Decisão depende de informação no momento certo. No modelo tradicional,
                essa informação vem depois. Com POCUS, aparece durante o atendimento.
              </p>
              <p>
                Na prática, você não muda o que sabe, muda quando sabe. Ao integrar imagem
                ao raciocínio clínico, a avaliação deixa de ser sequencial e passa a ser
                simultânea.
              </p>
            </div>

            <div className="quote-block mt-10 py-1">
              <p className="text-lg sm:text-xl font-medium text-foreground">
                Isso diminui a incerteza e acelera a decisão.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="img-frame">
              <img
                src={`${baseUrl}images/IMAGEM-1-.png`}
                alt="POCUS na prática clínica"
                className="w-full h-auto"
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
