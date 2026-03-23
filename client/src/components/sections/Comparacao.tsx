/**
 * Seção 11 - Pra Quem É (Comparação)
 */

import { X, Check } from "lucide-react";

const dependente = [
  "Conduz baseado em exame e protocolo",
  "Prefere esperar confirmação antes de agir",
  "Confia que o procedimento resolve o caso",
  "Se sente seguro sem ver o que está acontecendo",
  "Enxerga o POCUS como algo \"a mais\"",
];

const evoluiu = [
  "Quer reduzir a dependência de exame para decidir",
  "Busca clareza no paciente grave em tempo real",
  "Entende que decisão vem antes do procedimento",
  "Quer enxergar melhor para errar menos",
  "Reconhece que o POCUS muda a forma de conduzir o caso",
];

export default function Comparacao() {
  return (
    <section className="section-light section-padding">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="headline-section">
            No plantão, você se posiciona de qual lado?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Dependente */}
          <div className="bg-card/40 border border-border/50 rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              O médico que ainda depende para decidir
            </p>
            <ul className="space-y-4">
              {dependente.map((item, i) => (
                <li key={i} className="check-item">
                  <div className="check-icon check-icon-negative">
                    <X />
                  </div>
                  <span className="body-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Evoluiu */}
          <div className="bg-card border border-accent/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            <p className="text-sm font-medium text-accent uppercase tracking-wide mb-6">
              O médico que decidiu evoluir no plantão
            </p>
            <ul className="space-y-4">
              {evoluiu.map((item, i) => (
                <li key={i} className="check-item">
                  <div className="check-icon check-icon-positive">
                    <Check />
                  </div>
                  <span className="body-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
