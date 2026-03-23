/**
 * Seção 4 - Plausibilidade
 */

export default function Plausibilidade() {
  return (
    <section className="section-dark section-padding noise-overlay">
      <div className="container relative">
        <div className="lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:items-center">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <span className="tag tag-dark mb-6 inline-block">Decisão Clínica</span>

            <h2 className="headline-section mb-10 leading-snug">
              Antecipe a decisão clínica no paciente grave{" "}
              <span className="text-accent">com POCUS</span>
            </h2>

            <div className="body-md opacity-85 space-y-5">
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

            <div className="quote-block quote-block-dark mt-8 py-1">
              <p className="text-lg sm:text-xl font-medium opacity-95">
                Isso diminui a incerteza e acelera a decisão.
              </p>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3] bg-white/5 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-accent" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <p className="text-white/40 text-sm">Imagem será inserida em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
