import { Calendar, CreditCard, Monitor } from "lucide-react";
import { useEffect, useRef } from "react";

const baseUrl = import.meta.env.BASE_URL;
const playerId = "69e6871488365845bdfd0f9a";
const playerScriptId = `converteai-player-${playerId}`;
const playerScriptSrc = `https://scripts.converteai.net/a7916126-1eb3-4f27-8f5d-42892188f754/players/${playerId}/v4/player.js`;

export default function Hero() {
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
    <section
      className="noise-overlay overflow-hidden pt-6 md:pt-8 lg:pt-10 pb-20 md:pb-28 lg:pb-32 text-primary-foreground"
      style={{
        backgroundImage: `url(${baseUrl}images/FUNDO-V2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "oklch(0.12 0.02 260)",
      }}
    >
      <div className="container relative">
        {/* Ambient glow */}
        <div className="absolute -right-20 top-0 w-80 h-80 bg-accent/5 rounded-full blur-[80px] pointer-events-none hidden lg:block" style={{ animation: "float-glow 8s ease-in-out infinite" }} />
        <div className="absolute -left-32 bottom-20 w-96 h-96 bg-accent/3 rounded-full blur-[100px] pointer-events-none hidden lg:block" style={{ animation: "float-glow 10s ease-in-out infinite 2s" }} />

        {/* Logo */}
        <div className="mb-10 lg:mb-14">
          <img
            src={`${baseUrl}images/POCUS ONLINE BRANCA.png`}
            alt="POCUS Online"
            className="h-10 sm:h-12 lg:h-14 w-auto"
            loading="eager"
          />
        </div>

        {/* Content - 2-column grid on desktop */}
        <div className="lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14 lg:items-center">
          {/* Left column - text */}
          <div className="order-2 lg:order-1 max-w-3xl lg:max-w-none">
            <div className="accent-line-lg mb-6 lg:mb-8" />

            <h1 className="headline-hero mb-6 lg:mb-8">
              Domine o POCUS e entregue o melhor para o seu paciente
            </h1>

            <p className="body-lg text-primary-foreground/70 mb-8 max-w-2xl lg:mb-10">
              Aprenda a usar o ultrassom à beira-leito e transforme dúvida clínica em decisões que não podem esperar
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8 lg:mb-10">
              {[
                { icon: Monitor, title: "100% Online", sub: "Acesse de qualquer lugar" },
                { icon: Calendar, title: "1 ano de Acesso", sub: "Revise quando quiser" },
                { icon: CreditCard, title: "Pagamento Flexível", sub: "Pix ou Cartão" },
              ].map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-3.5 py-3 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-white/90" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-semibold text-sm lg:text-base tracking-tight block leading-tight">{title}</span>
                    <span className="text-primary-foreground/55 text-xs lg:text-sm leading-tight">
                      {sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                type="button"
                className="btn-cta btn-cta-pulse text-base lg:text-lg w-full sm:w-auto lg:px-10 lg:py-5"
                onClick={() => {
                  const el = document.getElementById("oferta");
                  if (!el) return;
                  const top = el.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top, behavior: "smooth" });
                }}
              >
                Quero decidir com mais segurança no plantão
              </button>
              <p className="text-primary-foreground/50 text-xs mt-3">
                Garantia de 7 dias · Cadastro rápido
              </p>
            </div>
          </div>

          {/* Right column - video */}
          <div className="order-1 lg:order-2 mb-10 lg:mb-0 w-full">
            <div className="relative">
              {/* Ambient glow behind video */}
              <div className="absolute -inset-3 lg:-inset-5 rounded-[32px] bg-gradient-to-br from-brand-red/25 via-brand-blue/15 to-brand-red/20 blur-2xl pointer-events-none opacity-80" />

              {/* Gradient border frame */}
              <div className="relative rounded-[24px] p-[1.5px] bg-gradient-to-br from-white/30 via-white/5 to-white/25 shadow-[0_20px_60px_-15px_oklch(0_0_0_/0.6)]">
                <div className="relative rounded-[22px] overflow-hidden bg-[oklch(0.08_0.015_260)]">
                  <div ref={videoSlotRef} className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}