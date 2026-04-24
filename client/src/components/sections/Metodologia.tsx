/**
 * Seção 5 - Metodologia (DARK RED)
 */

import { Check } from "lucide-react";
import { useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";

const baseUrl = import.meta.env.BASE_URL;
const playerId = "69d51ef6ea7d2fe7053075e0";
const playerScriptId = `converteai-player-${playerId}`;
const playerScriptSrc =
  `https://scripts.converteai.net/a7916126-1eb3-4f27-8f5d-42892188f754/players/${playerId}/v4/player.js`;

export default function Metodologia() {
  const sectionRef = useReveal<HTMLElement>();

  useEffect(() => {
    const existingScript = document.getElementById(playerScriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const s = document.createElement("script");
    s.id = playerScriptId;
    s.src = playerScriptSrc;
    s.async = true;
    document.head.appendChild(s);

    return () => {
      s.remove();
    };
  }, []);

  const items = [
    { bold: "72h focadas em decisão clínica", text: "Conteúdo direto ao ponto, do básico à aplicação no paciente grave" },
    { bold: "Médicos que vivem, aplicam e pesquisam POCUS", text: "Profissionais da linha de frente que aplicam e pesquisam POCUS" },
    { bold: "Fundamentos que dão segurança na prática", text: "Knobologia, presets e formação de imagem aplicados à leitura clínica" },
    { bold: "Protocolos que orientam a conduta", text: "RUSH, BLUE, eFAST, VExUS e CASA integrados ao raciocínio no plantão" },
    { bold: "Base científica em cada decisão", text: "Casos reais com medicina baseada em evidência e artigos para aprofundamento" },
  ];

  return (
    <section
      ref={sectionRef}
      className="noise-overlay section-padding reveal text-primary-foreground"
      style={{
        backgroundImage: `url(${baseUrl}images/FUNDO-V2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "oklch(0.12 0.02 260)",
      }}
    >
      <div className="container relative">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="accent-line-red mx-auto mb-6" />
          <h2 className="headline-section mb-8">
            Aprenda POCUS com quem usa o ultrassom todos os dias.
            <br />
            E ensina há anos em grandes hospitais do Brasil
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-9 xl:gap-12 lg:items-start">
          <div className="card-glass p-7 sm:p-9 lg:sticky lg:top-24">
            <span className="tag tag-red mb-5 inline-flex">FORMAÇÃO APLICADA</span>
            <h3 className="headline-card text-white mb-4">
              Um caminho guiado para transformar imagem em decisão clínica.
            </h3>
            <p className="body-sm text-white/70 mb-8">
              Você aprende a dominar o aparelho, interpretar achados relevantes e integrar
              protocolos ao raciocínio do plantão, sem depender de explicações genéricas ou
              teoria desconectada da rotina.
            </p>

            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={i} className="check-item">
                  <div className="check-icon check-icon-red">
                    <Check />
                  </div>
                  <div>
                    <span className="font-semibold text-white">{item.bold}</span>
                    <br />
                    <span className="body-sm text-white/60">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-3 sm:p-4 shadow-[0_18px_48px_oklch(0_0_0_/0.28)]">
              <div className="video-container mx-auto w-full max-w-[24rem]">
                <div
                  className="w-full"
                  dangerouslySetInnerHTML={{
                    __html: `<vturb-smartplayer id="vid-${playerId}"></vturb-smartplayer>`,
                  }}
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="img-frame img-frame-dark">
                <img
                  src={`${baseUrl}images/Member Kit POCUS.png`}
                  alt="Tela do Member Kit POCUS"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="img-frame img-frame-dark">
                <img
                  src={`${baseUrl}images/Memeber Kit POCUS 2.png`}
                  alt="Tela complementar do Member Kit POCUS"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href="#professores"
            className="btn-cta text-base inline-flex items-center justify-center"
            style={{ background: "linear-gradient(170deg, #2975FE 0%, #1a5ed4 100%)" }}
          >
            Quero aprender com os melhores especialistas do Brasil
          </a>
        </div>
      </div>
    </section>
  );
}
