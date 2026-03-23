import { Calendar, CreditCard, Monitor } from "lucide-react";
import LeadCaptureButton from "@/components/LeadCaptureButton";

export default function Hero() {
  return (
    <section className="section-hero noise-overlay overflow-hidden pt-6 md:pt-8 lg:pt-10 pb-20 md:pb-28 lg:pb-36">
      <div className="container relative">
        <div className="absolute -right-20 top-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none hidden lg:block" />
        <div className="absolute -left-32 bottom-20 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none hidden lg:block" />

        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-accent" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round" />
                <path d="M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4" strokeLinecap="round" />
                <path d="M12 8v0" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight">POCUS Online</span>
              <p className="text-[10px] sm:text-xs opacity-60 tracking-wider uppercase">Liberdade Médica &bull; Descomplica POCUS</p>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-20 xl:gap-28 lg:items-center">
          <div className="mb-10 lg:mb-0">
            <div className="accent-line mb-6 lg:mb-8 lg:w-20" />

            <h1 className="headline-hero mb-6 lg:text-5xl xl:text-6xl lg:leading-[1.1] lg:mb-8">
              Domine POCUS no paciente grave para decisões que não podem esperar
            </h1>

            <p className="body-lg text-primary-foreground/75 mb-8 max-w-xl lg:text-xl lg:leading-relaxed lg:mb-10 lg:max-w-2xl">
              Aprenda a usar o ultrassom à beira-leito e transforme dúvida clínica em ação segura no paciente grave
            </p>

            <div className="lg:hidden mb-10">
              <LeadCaptureButton className="btn-cta text-base w-full sm:w-auto">
                Quero decidir com mais segurança no plantão
              </LeadCaptureButton>
            </div>

            <div className="space-y-4 lg:space-y-5">
              <div className="flex items-center gap-4 lg:gap-5">
                <div className="icon-wrap icon-wrap-dark lg:w-12 lg:h-12">
                  <Monitor className="lg:w-5 lg:h-5" />
                </div>
                <div className="lg:flex lg:flex-col">
                  <span className="font-medium text-sm sm:text-base lg:text-lg">100% Online</span>
                  <span className="text-primary-foreground/70 text-xs sm:text-sm lg:text-base ml-2 lg:ml-0">
                    Acesse de qualquer lugar
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 lg:gap-5">
                <div className="icon-wrap icon-wrap-dark lg:w-12 lg:h-12">
                  <Calendar className="lg:w-5 lg:h-5" />
                </div>
                <div className="lg:flex lg:flex-col">
                  <span className="font-medium text-sm sm:text-base lg:text-lg">1 ano de Acesso</span>
                  <span className="text-primary-foreground/70 text-xs sm:text-sm lg:text-base ml-2 lg:ml-0">
                    Revise quando quiser
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 lg:gap-5">
                <div className="icon-wrap icon-wrap-dark lg:w-12 lg:h-12">
                  <CreditCard className="lg:w-5 lg:h-5" />
                </div>
                <div className="lg:flex lg:flex-col">
                  <span className="font-medium text-sm sm:text-base lg:text-lg">Pagamento Flexível</span>
                  <span className="text-primary-foreground/70 text-xs sm:text-sm lg:text-base ml-2 lg:ml-0">
                    Pix ou Cartão
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block mt-12">
              <LeadCaptureButton className="btn-cta text-lg px-10 py-6 lg:text-xl lg:px-12 lg:py-7 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
                Quero decidir com mais segurança no plantão
              </LeadCaptureButton>
            </div>
          </div>

          <div className="lg:relative">
            <div className="hidden lg:block absolute -inset-4 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-3xl blur-2xl" />

            <div className="video-container lg:relative lg:shadow-2xl lg:shadow-black/10">
              <div className="relative w-full max-w-none pt-[56.25%] overflow-hidden rounded-xl bg-black/40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-accent" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                        <path d="M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className="text-white/60 text-sm">Vídeo será inserido em breve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
