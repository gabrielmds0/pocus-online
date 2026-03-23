/**
 * Seção 6 - New Way
 */

export default function NewWay() {
  return (
    <section className="section-warm section-padding-sm">
      <div className="container">
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div className="max-w-2xl md:max-w-none">
            <span className="tag mb-5 inline-block">Nova Lógica</span>

            <h2 className="headline-section mb-8">
              O exame clínico tradicional <strong className="text-accent">não</strong> foi feito para o paciente grave
            </h2>
          </div>

          <div>
            <h3 className="headline-card mb-5">
              Com o ultrassom à beira-leito, o raciocínio clínico é completamente diferente
            </h3>

            <div className="body-md text-muted-foreground space-y-5">
              <p>
                Não é mais sobre seguir o fluxo tradicional de suspeita, exame e decisão. Esse modelo
                cria atraso crítico no paciente de sala vermelha e UTI.
              </p>
              <p>
                O POCUS surge como uma mudança de lógica, integrando imagem e raciocínio à beira-leito.
                Isso reduz incerteza e permite decisões mais precoces e direcionadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
