/**
 * Seção 3 - Depoimentos (DARK BLUE)
 */

import LeadCaptureButton from "@/components/LeadCaptureButton";
import { useReveal } from "@/hooks/useReveal";

const depoimentos = [
  {
    id: 1,
    nome: "Dra. Bárbara Martins",
    especialidade: "Médica Intensivista",
    texto:
      "Minha experiência foi excelente e, sem dúvida, superou todas as minhas expectativas, especialmente quando comparada a outros cursos que já fiz. Recomendo fortemente.",
  },
  {
    id: 2,
    nome: "Dra. Karina Fonseca",
    especialidade: "Médica Geriatra, Paliativista e com vivência em UTI",
    texto:
      "Busquei o curso para melhorar no POCUS e encontrei exatamente isso. Professores muito preparados e aplicação clínica imediata no plantão.",
  },
  {
    id: 3,
    nome: "Dra. Danielle Umbelina",
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
    nome: "Dr. Orion Telles",
    especialidade: "Médico Generalista",
    texto:
      "O curso superou minhas expectativas. A possibilidade de discussão clínica com profissionais qualificados elevou muito o nível, especialmente para um POCUS inicial. Muito completo.",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  const sectionRef = useReveal<HTMLElement>();
  const primeiroGrid = depoimentos.slice(0, 3);
  const segundoGrid = depoimentos.slice(3);

  return (
    <section ref={sectionRef} className="section-dark-blue noise-overlay section-padding reveal">
      <div className="container relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="headline-section max-w-2xl mx-auto">
            Conheça a história de alguns dos nossos alunos
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3 lg:gap-6 mb-6 md:mb-8 stagger-children revealed">
          {primeiroGrid.map((dep) => (
            <div key={dep.id} className="card-glass p-6 sm:p-7 w-full flex flex-col">
              <StarRow />
              <p className="body-sm text-white/70 mb-6 leading-relaxed flex-1">
                "{dep.texto}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-blue-light/30 to-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue-light text-xs font-bold">
                  {dep.nome.split(' ').slice(0, 2).map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{dep.nome}</p>
                  <p className="text-xs text-white/50">{dep.especialidade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-12 md:mb-16">
          <div className="w-full md:max-w-[680px]">
            <div className="grid gap-5 md:grid-cols-2 lg:gap-6 stagger-children revealed">
              {segundoGrid.map((dep) => (
                <div key={dep.id} className="card-glass p-6 sm:p-7 w-full flex flex-col">
                  <StarRow />
                  <p className="body-sm text-white/70 mb-6 leading-relaxed flex-1">
                    "{dep.texto}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-blue-light/30 to-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue-light text-xs font-bold">
                      {dep.nome.split(' ').slice(0, 2).map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">{dep.nome}</p>
                      <p className="text-xs text-white/50">{dep.especialidade}</p>
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
