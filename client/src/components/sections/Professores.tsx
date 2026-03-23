/**
 * Seção 12 - Bio / Professores
 */

const baseUrl = import.meta.env.BASE_URL;

const professores = [
  {
    id: 1,
    nome: "Dr. Rafael Hoshino",
    especialidade: "Cardiologia",
    descricao:
      "Médico clínico e cardiologista, membro do corpo clínico do Einstein Goiânia, preceptor de Clínica Médica e Cardiologia no HUGO (Hospital de Urgência de Goiás) e subdiretor clínico do HGG. Atua na formação de médicos na linha de frente e é coordenador técnico da imersão em POCUS, sendo também fundador do Descomplica POCUS.",
    foto: `${baseUrl}images/hoshino.png`,
  },
  {
    id: 2,
    nome: "Dr. Cristiano Simões",
    especialidade: "Cardiologia",
    descricao:
      "Médico clínico e cardiologista, preceptor de Clínica Médica e Cardiologia no HUGO (Hospital de Urgência de Goiás), cardiologista da Polícia Militar de Goiás (PM-GO) e do HMAP (Hospital Municipal de Aparecida). Atua na formação de médicos na linha de frente e é diretor das Imersões da Liberdade Médica.",
    foto: `${baseUrl}images/cristiano_simoes.png`,
  },
];

const instrutores = [
  "Dr. Ezer Melo Neto",
  "Dr. Fernando Junqueira",
  "Dr. Joan Castro",
  "Dr. Lucas Vianna",
  "Dr. Marcos Felipe Marra",
  "Dra. Mariana Marini",
  "Dr. Matheus Rabahi",
  "Dr. Valdinei Seabra",
];

export default function Professores() {
  return (
    <section id="professores" className="section-warm section-padding">
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

        {/* Professores Principais */}
        <div className="grid gap-5 md:grid-cols-2 mb-10">
          {professores.map((prof) => (
            <div key={prof.id} className="card-elevated p-5 sm:p-6 w-full">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 overflow-hidden">
                <img
                  src={prof.foto}
                  alt={prof.nome}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-[50%_20%]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3 className="font-semibold text-base mb-1">{prof.nome}</h3>
              <p className="text-accent text-xs font-medium mb-3">{prof.especialidade}</p>
              <p className="body-sm text-muted-foreground">{prof.descricao}</p>
            </div>
          ))}
        </div>

        {/* Time de Instrutores */}
        <div className="card-elevated p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <p className="text-accent text-xs font-medium uppercase tracking-wide mb-4">Time de Instrutores</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {instrutores.map((nome) => (
              <div key={nome} className="text-sm font-medium text-foreground/80">
                {nome}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
