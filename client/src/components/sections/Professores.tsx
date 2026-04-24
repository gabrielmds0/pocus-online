/**
 * Seção 12 - Bio / Professores
 */

import { useReveal } from "@/hooks/useReveal";

const baseUrl = import.meta.env.BASE_URL;

const professores = [
  {
    id: 1,
    nome: "Dr. Rafael Hoshino",
    especialidade: "Cardiologia",
    descricao:
      "Médico Clínico e Cardiologista. CEO da Imersão POCUS / Descomplica POCUS. Subdiretor Técnico da Equipe Clínica do Hospital Geral de Goiás (HGG). Equipe Heart Team Einstein.",
    foto: `${baseUrl}images/hoshino.png`,
  },
  {
    id: 2,
    nome: "Dr. Cristiano Simões",
    especialidade: "Cardiologia",
    descricao:
      "Médico Clínico e Cardiologista. Coordenador das Imersões da Liberdade Médica. Preceptor de Clínica Médica no HUGO. Policial Médico da Polícia Militar de Goiás. Professor Universitário da UNIFAN. Coordenador das Imersões da Liberdade Médica.",
    foto: `${baseUrl}images/cristiano_simoes.png`,
  },
];

const instrutores = [
  {
    nome: "Dr. Ezer Melo Neto",
    descricao:
      "Médico. Pós graduado em Cuidados Paliativos. Líder do Time de Alta Performance do HUGO/Gestão Einstein.",
    foto: `${baseUrl}images/Ezer Melo Neto.JPG`,
  },
  {
    nome: "Dr. Fernando Junqueira",
    descricao:
      "Médico Clínico e Intensivista. Preceptor Intensiva do HUGO. Professor das imersões práticas no Hospital Jacob Facuri pela Liberdade Médica.",
    foto: `${baseUrl}images/Fernando Junqueira.png`,
    imgScale: 1.5,
  },
  {
    nome: "Dr. Joan Castro",
    descricao:
      "Médico Intensivista. Subdiretor da Intensiva e Cuidados Paliativos do Hospital Geral de Goiás (HGG). Professor do CITIM.",
    foto: `${baseUrl}images/Joan Castro.png`,
  },
  {
    nome: "Dr. Lucas Guimarães",
    descricao:
      "Médico Especialista em Clínica Médica. Preceptor de Clínica Médica do HUGO. Membro do Time de Alta Performance do HUGO.",
    foto: `${baseUrl}images/Lucas Guimaraes.jpg`,
  },
  {
    nome: "Dr. Gabriel Limongi",
    descricao:
      "Médico Intensivista. Instrutor ACLS, ATLS pelo Einstein. RT intensiva HUGO. Preceptor intensiva HUGO.",
    foto: `${baseUrl}images/Gabriel Limongi.png`,
    imgScale: 1.5,
  },
  {
    nome: "Dra. Mariana Marini",
    descricao: "Médica Clínica e Nefrologista. RT UTI acidentados.",
    foto: `${baseUrl}images/Mariana Marini.png`,
  },
  {
    nome: "Dra. Thatyana Siqueira",
    descricao: "Médica Clínica e Nefrologista. Preceptora Clínica Médica HUGO.",
    foto: `${baseUrl}images/Thatyana Siqueira.jpg`,
    centered: true,
  },
];

export default function Professores() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} id="professores" className="section-warm section-padding reveal">
      <div className="container">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <span className="tag mb-5 inline-block">Corpo Docente</span>

          <h2 className="headline-section mb-5">
            Você terá aulas com médicos referência em POCUS no Brasil
          </h2>

          <p className="body-md text-muted-foreground">
            Nossa equipe é formada por médicos especialistas, com ampla experiência prática e
            acadêmica no uso do ultrassom à beira-leito.
          </p>
        </div>

        {/* Professores Principais — cards quadrados, imagem sem borda */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 mb-14">
          {professores.map((prof) => (
            <div key={prof.id} className="group overflow-hidden w-full">
              <div
                className="relative overflow-hidden bg-gradient-to-br from-muted to-muted/50"
                style={{ height: "420px" }}
              >
                <img
                  src={prof.foto}
                  alt={prof.nome}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ objectPosition: "50% 15%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-white/65 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-1.5">
                    {prof.especialidade}
                  </p>
                  <h3 className="text-white font-bold text-2xl sm:text-3xl leading-tight tracking-tight">
                    {prof.nome}
                  </h3>
                </div>
              </div>

              <div className="pt-5 pb-2">
                <p className="body-sm text-muted-foreground leading-relaxed">{prof.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Time de Instrutores — avatar circular */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children revealed">
          {instrutores.map((inst) => (
            <div
              key={inst.nome}
              className={`card-elevated p-5 sm:p-6 flex items-start gap-4${inst.centered ? " sm:col-start-2 lg:col-start-2" : ""}`}
            >
              {inst.foto && (
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                  <img
                    src={inst.foto}
                    alt={inst.nome}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: "50% 20%",
                      transform: inst.imgScale ? `scale(${inst.imgScale})` : undefined,
                    }}
                  />
                </div>
              )}
              <div className="min-w-0">
                <p className="font-semibold text-foreground mb-1.5 tracking-tight">{inst.nome}</p>
                <p className="body-sm text-muted-foreground leading-relaxed">
                  {inst.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
