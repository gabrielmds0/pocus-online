/**
 * Seção 5 - Metodologia
 */

import { Check } from "lucide-react";

export default function Metodologia() {
  const items = [
    { bold: "95h focadas em decisão clínica", text: "Conteúdo direto ao ponto, do básico à aplicação no paciente grave" },
    { bold: "Médicos que vivem, aplicam e pesquisam POCUS", text: "Profissionais da linha de frente que aplicam e pesquisam POCUS" },
    { bold: "Fundamentos que dão segurança na prática", text: "Knobologia, presets e formação de imagem aplicados à leitura clínica" },
    { bold: "Protocolos que orientam a conduta", text: "RUSH, BLUE, eFAST, VExUS e CASA integrados ao raciocínio no plantão" },
    { bold: "Base científica em cada decisão", text: "Casos reais com medicina baseada em evidência e artigos para aprofundamento" },
  ];

  return (
    <section className="section-light section-padding">
      <div className="container">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="headline-section mb-8">
            Aprenda POCUS com quem decide sob pressão e valida na ciência
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-5 mb-12">
          {items.map((item, i) => (
            <div key={i} className="check-item">
              <div className="check-icon check-icon-positive">
                <Check />
              </div>
              <div>
                <span className="font-semibold text-foreground">{item.bold}</span>
                <br />
                <span className="body-sm text-muted-foreground">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#professores"
            className="btn-cta text-base inline-flex items-center justify-center"
          >
            Quero aprender com os melhores especialistas do Brasil
          </a>
        </div>
      </div>
    </section>
  );
}
