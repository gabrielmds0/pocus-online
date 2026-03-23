/**
 * Seção 7 - Oceano Azul
 */

export default function OceanoAzul() {
  return (
    <section className="section-dark section-padding noise-overlay">
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="tag tag-dark mb-6 inline-block">Oportunidade de Mercado</span>

          <h2 className="headline-section mb-10">
            Enquanto poucos aplicam, o mercado já começou a exigir
          </h2>

          <div className="rounded-2xl overflow-hidden mb-10">
            <div className="relative aspect-[16/7] bg-white/5 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="text-center">
                    <p className="text-4xl sm:text-5xl font-extrabold text-accent">5%</p>
                    <p className="text-sm opacity-60 mt-1">dos médicos usam POCUS</p>
                  </div>
                  <div className="w-px h-16 bg-white/10" />
                  <div className="text-center">
                    <p className="text-4xl sm:text-5xl font-extrabold text-accent">95%</p>
                    <p className="text-sm opacity-60 mt-1">ainda não aplicam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="body-md opacity-85 mb-6">
            Hospitais e clínicas já consideram o POCUS um diferencial em seus editais.
            Enquanto isso, só 5% dos médicos o utilizam na prática.
            O mercado já entendeu e a maioria ainda não aplicou.
          </p>

          <div className="quote-block quote-block-dark py-1 text-left max-w-xl mx-auto mb-10">
            <p className="text-lg sm:text-xl font-medium opacity-95">
              Isso cria um espaço claro: quem domina ultrassom à beira-leito hoje se posiciona antes.
            </p>
          </div>

          <a
            href="#oferta"
            className="btn-cta text-base inline-flex items-center justify-center"
          >
            Quero me destacar no mercado
          </a>
        </div>
      </div>
    </section>
  );
}
