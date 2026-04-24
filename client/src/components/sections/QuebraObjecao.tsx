/**
 * Seção 10 - Quebra da Principal Objeção (DARK BLUE)
 */

import { useEffect, useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

const playerId = "69e6872205c3ed4453d73f5b";
const playerScriptId = `converteai-player-${playerId}`;
const playerScriptSrc = `https://scripts.converteai.net/a7916126-1eb3-4f27-8f5d-42892188f754/players/${playerId}/v4/player.js`;

export default function QuebraObjecao() {
  const sectionRef = useReveal<HTMLElement>();
  const videoSlotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slot = videoSlotRef.current;
    if (!slot) return;

    if (!slot.querySelector(`#vid-${playerId}`)) {
      slot.innerHTML = `<vturb-smartplayer id="vid-${playerId}" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`;
    }

    if (!document.getElementById(playerScriptId)) {
      const s = document.createElement("script");
      s.id = playerScriptId;
      s.src = playerScriptSrc;
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section ref={sectionRef} className="section-dark-blue noise-overlay section-padding-sm reveal">
      <div className="container relative">
        <div className="md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-14 lg:gap-20 md:items-center">
          <div
            ref={videoSlotRef}
            className="order-2 md:order-1 mt-10 md:mt-0 w-full"
          />

          <div className="order-1 md:order-2 max-w-2xl md:max-w-none">
            <span className="tag tag-dark mb-5 inline-block">Impacto Real</span>

            <h2 className="headline-section mb-8">
              <span style={{ color: "#E22D36" }}>POCUS</span> agrega valor à condução do paciente, <span style={{ color: "#E22D36" }}>do ambulatório à UTI</span>
            </h2>

            <div className="body-md text-white/70 space-y-5">
              <p>
                Do paciente mais simples ao mais grave, a necessidade é a mesma:
                conduzi-lo da melhor forma possível.
              </p>
              <p>
                Decisões precisam ser tomadas, mas, quando dependem da espera pelo laudo, a
                agilidade da conduta pode ser comprometida.
              </p>
              <p>
                Por isso, o <strong className="text-white">ultrassom point-of-care</strong> entra antes.
              </p>
            </div>

            <div className="quote-block mt-8 py-1" style={{ borderLeftColor: "#E22D36" }}>
              <p className="text-lg sm:text-xl font-medium text-white/90">
                O POCUS traz informação em tempo real, à beira do leito, seja no ambulatório,
                na enfermaria, no pronto-socorro ou na UTI, orientando a decisão em cada etapa do cuidado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
