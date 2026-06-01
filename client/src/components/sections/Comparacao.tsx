/**
 * Seção 11 - Pra Quem É
 */

import { Check } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const items = [
  "Quer atender melhor o paciente",
  "Busca mais segurança na conduta e nos procedimentos",
  "Quer direcionar o diagnóstico e ganhar tempo no atendimento",
  "Quer reduzir exames desnecessários e decidir com mais clareza",
  "Quer manter excelência no cuidado",
];

export default function Comparacao() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-warm section-padding reveal">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="headline-section max-w-2xl mx-auto">
            Para quem é o curso Formação POCUS Online?
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/6 to-accent/2 rounded-3xl blur-lg pointer-events-none" />
            <div className="relative bg-card border border-accent/15 rounded-2xl p-7 sm:p-9" style={{ boxShadow: "0 1px 3px oklch(0 0 0 / 0.03), 0 8px 30px oklch(0 0 0 / 0.06)" }}>
              <p className="text-sm font-bold text-accent uppercase tracking-widest mb-7">
                PARA O MÉDICO QUE:
              </p>
              <ul className="space-y-5">
                {items.map((item, i) => (
                  <li key={i} className="check-item">
                    <div className="check-icon check-icon-positive">
                      <Check />
                    </div>
                    <span className="body-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
