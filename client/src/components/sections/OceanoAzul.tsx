/**
 * Seção 7 - Oceano Azul (DARK MIXED)
 */

import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const baseUrl = import.meta.env.BASE_URL;

export default function OceanoAzul() {
  const sectionRef = useReveal<HTMLElement>();
  const [zoomed, setZoomed] = useState<{ src: string; titulo: string } | null>(null);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [zoomed]);

  return (
    <section
      ref={sectionRef}
      className="section-dark-mixed noise-overlay section-padding reveal"
    >
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="tag tag-dark mb-6 inline-block">Oportunidade de Mercado</span>

          <h2 className="headline-section mb-12">
            Enquanto poucos aplicam, o mercado já começou a exigir
          </h2>

          {/* Editais — grid de 3 */}
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-3 mb-14 max-w-6xl mx-auto -mx-4 sm:-mx-8 lg:-mx-16">
            {[
              { src: "Edital-de-Hospital.jpg", titulo: "Edital Hospital Geral" },
              { src: "Edital FMRP-USP.jpg", titulo: "Edital Hospital das Clínicas USP" },
              { src: "EDITAL Einstein.jpg", titulo: "Edital Hospital Einstein" },
            ].map((edital) => (
              <div key={edital.src}>
                <button
                  type="button"
                  onClick={() => setZoomed(edital)}
                  className="img-frame img-frame-dark block w-full cursor-zoom-in group relative p-0 border-0 bg-transparent"
                  aria-label={`Ampliar ${edital.titulo}`}
                >
                  <img
                    src={`${baseUrl}images/${edital.src}`}
                    alt={edital.titulo}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ maxHeight: "520px", objectFit: "contain", objectPosition: "top" }}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Clique para ampliar
                  </span>
                </button>
                <p className="text-center text-sm font-medium text-white/80 mt-3">
                  {edital.titulo}
                </p>
              </div>
            ))}
          </div>

          {/* Copy simplificada */}
          <div className="max-w-lg mx-auto mb-8">
            <p className="body-md opacity-80 mb-4">
              Hospitais e clínicas já consideram o POCUS um diferencial em seus editais.
            </p>
          </div>

          {/* Copy centralizada antes do CTA */}
          <div className="border-t border-white/10 pt-10 mb-10">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-brand-red/10 to-transparent rounded-2xl blur-xl pointer-events-none" />
              <p className="relative text-2xl sm:text-3xl lg:text-[2rem] font-bold text-center leading-snug tracking-tight">
                Quem domina ultrassom à beira-leito hoje,{" "}
                <span className="text-brand-red-light">se posiciona antes.</span>
              </p>
            </div>
          </div>

          <a
            href="#oferta"
            className="btn-cta btn-cta-red text-base inline-flex items-center justify-center"
          >
            Quero me destacar no mercado
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setZoomed(null)}
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.titulo}
        >
          <button
            type="button"
            onClick={() => setZoomed(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xl flex items-center justify-center transition-colors"
            aria-label="Fechar"
          >
            ×
          </button>
          <div
            className="relative max-w-[95vw] max-h-[90vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${baseUrl}images/${zoomed.src}`}
              alt={zoomed.titulo}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white/90 text-sm font-medium">{zoomed.titulo}</p>
          </div>
        </div>
      )}
    </section>
  );
}
