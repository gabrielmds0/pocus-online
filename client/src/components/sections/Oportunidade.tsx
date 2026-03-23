/**
 * Seção 2 - A Grande Oportunidade
 */

export default function Oportunidade() {
  return (
    <section className="section-warm section-padding-sm">
      <div className="container">
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div className="max-w-2xl md:max-w-none">
            <span className="tag mb-5 inline-block">A Grande Oportunidade</span>

            <h2 className="headline-section mb-8">
              Ganhe tempo entre o diagnóstico e a conduta através do ultrassom à beira-leito
            </h2>

            <div className="body-md text-muted-foreground space-y-5">
              <p>
                No paciente grave, o problema não é a falta de hipóteses, é tempo até agir.
                O POCUS encurta esse intervalo e amplia o exame físico, sendo reconhecido
                como o 5º pilar clínico.
              </p>
              <p>
                O exame isolado acerta cerca de <strong className="text-foreground">47% dos diagnósticos</strong>;
                com POCUS, esse índice chega a <strong className="text-foreground">82%</strong>.
                Na prática, você reduz incertezas e toma decisões mais rápidas no plantão.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-0">
            <div className="rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3] bg-accent/5 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-accent" stroke="currentColor" strokeWidth="1.2">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8" strokeLinecap="round" />
                      <path d="M12 17v4" strokeLinecap="round" />
                      <path d="M7 9c0 2.76 2.24 5 5 5s5-2.24 5-5" strokeLinecap="round" opacity="0.5" />
                      <circle cx="12" cy="9" r="2" opacity="0.5" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">Imagem será inserida em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
