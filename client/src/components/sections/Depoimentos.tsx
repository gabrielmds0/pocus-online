/**
 * Seção 3 - Depoimentos
 */

import LeadCaptureButton from "@/components/LeadCaptureButton";

const depoimentos = [
  {
    id: 1,
    nome: "Dra. Bárbara",
    especialidade: "Médica Intensivista",
    texto:
      "Minha experiência foi excelente e, sem dúvida, superou todas as minhas expectativas, especialmente quando comparada a outros cursos que já fiz. Recomendo fortemente.",
  },
  {
    id: 2,
    nome: "Dra. Karina",
    especialidade: "Médica Geriatra, com vivência em UTI",
    texto:
      "Busquei o curso para melhorar no POCUS e encontrei exatamente isso. Professores muito preparados e aplicação clínica imediata no plantão.",
  },
  {
    id: 3,
    nome: "Dra. Danielle",
    especialidade: "Médica Emergencista",
    texto:
      "É um divisor de águas na formação de qualquer médico. Foi uma grata surpresa e proporciona mais clareza diagnóstica no contexto do point-of-care.",
  },
  {
    id: 4,
    nome: "Dr. Allan",
    especialidade: "Residente em Cirurgia Cardiovascular",
    texto:
      "Aprendi muito e aprimorei meu conhecimento em ultrassom à beira-leito. É aplicável do pronto-socorro à UTI e faz diferença real no atendimento. Recomendo.",
  },
  {
    id: 5,
    nome: "Dr. Orion",
    especialidade: "Médico Generalista",
    texto:
      "O curso superou minhas expectativas. A possibilidade de discussão clínica com profissionais qualificados elevou muito o nível, especialmente para um POCUS inicial. Muito completo.",
  },
];

export default function Depoimentos() {
  const primeiroGrid = depoimentos.slice(0, 3);
  const segundoGrid = depoimentos.slice(3);

  return (
    <section className="section-light section-padding">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="headline-section">
            Conheça a história de alguns dos nossos alunos
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8 mb-8 md:mb-10">
          {primeiroGrid.map((dep) => (
            <div key={dep.id} className="card-elevated p-6 sm:p-7 w-full">
              <div className="text-accent text-sm mb-3">★★★★★</div>
              <p className="body-sm text-muted-foreground mb-6 leading-relaxed">
                "{dep.texto}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center text-accent text-[10px] font-medium">
                  {dep.nome.split(' ').slice(0, 2).map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-sm">{dep.nome}</p>
                  <p className="text-xs text-muted-foreground">{dep.especialidade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-12 md:mb-16">
          <div className="w-full md:max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {segundoGrid.map((dep) => (
                <div key={dep.id} className="card-elevated p-6 sm:p-7 w-full">
                  <div className="text-accent text-sm mb-3">★★★★★</div>
                  <p className="body-sm text-muted-foreground mb-6 leading-relaxed">
                    "{dep.texto}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center text-accent text-[10px] font-medium">
                      {dep.nome.split(' ').slice(0, 2).map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{dep.nome}</p>
                      <p className="text-xs text-muted-foreground">{dep.especialidade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <LeadCaptureButton className="btn-cta text-base w-full sm:w-auto">
            Quero ser o próximo
          </LeadCaptureButton>
        </div>
      </div>
    </section>
  );
}
