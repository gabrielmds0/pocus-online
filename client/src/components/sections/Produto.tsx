/**
 * Seções 8 e 9 - Entregáveis / Produto
 */

import { useState } from "react";
import LeadCaptureButton from "@/components/LeadCaptureButton";
import { Check, ChevronDown } from "lucide-react";

type Categoria = {
  titulo: string;
  subtitulo: string;
  topicos: string[];
};

const categorias: Categoria[] = [
  {
    titulo: "KNOBOLOGIA",
    subtitulo: "Fundamentos do aparelho e leitura da interface",
    topicos: [
      "Ligar os aparelhos e entender a lógica de operação",
      "Ajustes de presets para cenários de beira-leito",
      "Higienização correta e cuidado com transdutores",
      "Compreensão prática dos botões e comandos essenciais",
    ],
  },
  {
    titulo: "CARDÍACO",
    subtitulo: "Ecocardiografia focal aplicada ao paciente grave",
    topicos: [
      "Janelas ecocardiográficas aplicadas ao paciente grave",
      "Interpretação de imagens com eyeballing voltado à prática",
      "Avaliação subjetiva de contratilidade cardíaca",
      "Protocolos FOCUS e CASA integrados ao plantão",
      "Discussão prática de casos clínicos reais",
    ],
  },
  {
    titulo: "PULMONAR",
    subtitulo: "Achados torácicos que aceleram a decisão clínica",
    topicos: [
      "Interpretação avançada de linhas A/B e consolidações",
      "Análise funcional do diafragma",
      "Avaliação de derrame pleural no contexto clínico",
      "Aplicação prática do protocolo BLUE",
      "Discussão de casos clínicos pulmonares",
    ],
  },
  {
    titulo: "ABDOME",
    subtitulo: "Protocolos rápidos para abdome e trauma",
    topicos: [
      "Avaliação de bexiga, rins e vias urinárias",
      "Análise de líquidos cavitários",
      "Aplicação prática do protocolo E-FAST",
      "Raciocínio guiado com o protocolo RUSH",
      "Discussão de casos clínicos do abdome agudo",
    ],
  },
  {
    titulo: "VASOS",
    subtitulo: "Punção, hemodinâmica e avaliação vascular objetiva",
    topicos: [
      "Estudos de cava, aorta e vasos de membros inferiores",
      "Rastreio de sítios de punção mais viáveis",
      "Análise prática de TVP",
      "Aplicação clínica do protocolo VEXUS",
      "Discussão de casos clínicos vasculares",
    ],
  },
  {
    titulo: "NEURO",
    subtitulo: "Neuro POCUS para achados rápidos à beira-leito",
    topicos: [
      "Avaliação da bainha de nervo óptico",
      "Integração dos achados ao raciocínio clínico",
      "Discussão de casos clínicos com aplicação do neuro POCUS",
    ],
  },
];

// Alternate gradient colors per card
const cardColors = categorias.map((_, i) =>
  i % 2 === 0 ? "#2975FE" : "#E22D36"
);

export default function Produto() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="section-padding overflow-hidden bg-white text-foreground"
    >
      <div className="container relative">
        <div className="mx-auto max-w-[1480px]">
          <div className="mx-auto mb-12 max-w-5xl text-center md:mb-14">
            <span
              className="tag mb-6 inline-flex"
              style={{ background: "rgba(41,117,254,0.1)", color: "#2975FE" }}
            >
              GRADE CURRICULAR
            </span>
            <h2 className="headline-section max-w-3xl mx-auto">
              A certificação que organiza o aprendizado em{" "}
              <span style={{ color: "#2975FE" }}>
                módulos práticos, objetivos e aplicáveis no plantão.
              </span>
            </h2>
            <p className="body-md text-muted-foreground mt-6 max-w-3xl mx-auto">
              Uma matriz de formação pensada para levar você do domínio do aparelho à integração
              dos principais protocolos e contextos clínicos do POCUS.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-[34px] border border-border/60"
            style={{
              background: "white",
              boxShadow: "0 30px 80px -42px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-2.5"
              style={{
                background:
                  "linear-gradient(90deg, #2975FE 0%, #E22D36 50%, #2975FE 100%)",
              }}
            />

            <div className="relative border-b border-border/40 px-5 pb-5 pt-7 sm:px-7 sm:pb-6 sm:pt-8">
              <div className="max-w-2xl">
                <div
                  className="inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ borderColor: "rgba(41,117,254,0.2)", background: "rgba(41,117,254,0.06)", color: "#2975FE" }}
                >
                  Estrutura principal da formação
                </div>
                <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-foreground sm:text-[2rem]">
                  6 módulos-base organizados como um painel único de aprendizagem.
                </h3>
              </div>
            </div>

            <div className="relative px-4 pb-4 pt-4 sm:px-5 sm:pb-5 xl:px-6 xl:pb-6">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {categorias.map((categoria, index) => {
                  const color = cardColors[index];
                  const isOpen = openIndex === index;

                  return (
                    <article
                      key={categoria.titulo}
                      className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-border/50 bg-white p-4 sm:p-5 transition-all duration-300 hover:shadow-lg cursor-pointer"
                      style={{
                        boxShadow: isOpen
                          ? `0 8px 32px ${color}20, 0 0 0 1px ${color}30`
                          : undefined,
                      }}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      onMouseEnter={() => setOpenIndex(index)}
                    >
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-px"
                        style={{ background: `${color}40` }}
                      />

                      <div className="relative">
                        <div className="flex items-center gap-3">
                          <span
                            className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border px-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
                            style={{
                              borderColor: `${color}30`,
                              background: `${color}10`,
                              color: color,
                            }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div
                            className="h-px flex-1"
                            style={{
                              background: `linear-gradient(90deg, ${color} 0%, rgba(0,0,0,0.06) 100%)`,
                            }}
                          />
                          <ChevronDown
                            className="w-4 h-4 transition-transform duration-300"
                            style={{
                              color: color,
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                          />
                        </div>

                        <div
                          className="mt-4 rounded-[20px] border px-4 py-4"
                          style={{
                            borderColor: `${color}20`,
                            background: `linear-gradient(180deg, ${color}0D 0%, rgba(0,0,0,0.01) 100%)`,
                            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.8)`,
                          }}
                        >
                          <div
                            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                            style={{ color: color }}
                          >
                            Módulo temático
                          </div>
                          <h3 className="mt-3 text-[17px] font-semibold leading-tight tracking-[0.05em] text-foreground">
                            {categoria.titulo}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {categoria.subtitulo}
                          </p>
                        </div>
                      </div>

                      <div
                        className="overflow-hidden transition-all duration-400 ease-in-out"
                        style={{
                          maxHeight: isOpen ? "400px" : "0px",
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <ul className="relative mt-5 space-y-3.5 border-t border-border/40 pt-5">
                          {categoria.topicos.map((topico) => (
                            <li key={topico} className="flex items-start gap-2.5">
                              <span
                                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                style={{
                                  background: `${color}18`,
                                  boxShadow: `0 0 0 1px ${color}30`,
                                }}
                              >
                                <Check className="h-3 w-3" style={{ color: color }} />
                              </span>
                              <span className="text-[13px] leading-[1.6] text-muted-foreground">
                                {topico}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-border/40 px-5 py-5 sm:px-6 sm:py-6">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div
                  className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{ borderColor: "rgba(41,117,254,0.2)", background: "rgba(41,117,254,0.06)", color: "#2975FE" }}
                >
                  6 módulos-base
                </div>
                <div
                  className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{ borderColor: "rgba(41,117,254,0.2)", background: "rgba(41,117,254,0.06)", color: "#2975FE" }}
                >
                  Formação progressiva
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 md:mt-14">
            <LeadCaptureButton className="btn-cta btn-cta-pulse text-lg sm:text-xl px-10 py-5 sm:px-14 sm:py-6 w-full sm:w-auto">
              Quero fazer minha inscrição
            </LeadCaptureButton>
          </div>
        </div>
      </div>
    </section>
  );
}
