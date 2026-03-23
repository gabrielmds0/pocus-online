/**
 * Seção 10 - Quebra da Principal Objeção
 */

export default function QuebraObjecao() {
  return (
    <section className="section-warm section-padding-sm">
      <div className="container">
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div className="order-2 md:order-1 mt-10 md:mt-0">
            <div className="rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3] bg-accent/5 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-accent" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">Imagem será inserida em breve</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 max-w-2xl md:max-w-none">
            <span className="tag mb-5 inline-block">Impacto Real</span>

            <h2 className="headline-section mb-8">
              POCUS também salva o paciente grave
            </h2>

            <div className="body-md text-muted-foreground space-y-5">
              <p>
                Outras intervenções podem salvar o paciente. O problema é tratá-las como
                suficientes no manejo do paciente grave.
              </p>
              <p>
                Sem clareza, a conduta pode ser realizada no momento inadequado ou com
                indicação incorreta.
              </p>
            </div>

            <div className="quote-block mt-8 py-1">
              <p className="text-lg sm:text-xl font-medium text-foreground">
                O POCUS entra antes, fornecendo informação em tempo real e orientando a tomada de decisão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
