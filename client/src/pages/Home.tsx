import { Suspense, lazy, useEffect, useState } from "react";
import Hero from "@/components/sections/Hero";

const Oportunidade = lazy(() => import("@/components/sections/Oportunidade"));
const Depoimentos = lazy(() => import("@/components/sections/Depoimentos"));
const Plausibilidade = lazy(() => import("@/components/sections/Plausibilidade"));
const Metodologia = lazy(() => import("@/components/sections/Metodologia"));
const NewWay = lazy(() => import("@/components/sections/NewWay"));
const OceanoAzul = lazy(() => import("@/components/sections/OceanoAzul"));
const Produto = lazy(() => import("@/components/sections/Produto"));
const QuebraObjecao = lazy(() => import("@/components/sections/QuebraObjecao"));
const Comparacao = lazy(() => import("@/components/sections/Comparacao"));
const Professores = lazy(() => import("@/components/sections/Professores"));
const Oferta = lazy(() => import("@/components/sections/Oferta"));
const FAQ = lazy(() => import("@/components/sections/FAQ"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const BELOW_FOLD_FALLBACK_DELAY_MS = 3000;

function BelowFoldSkeleton() {
  return (
    <div className="section-light section-padding" aria-hidden="true">
      <div className="container">
        <div className="h-28 rounded-2xl bg-muted/30 animate-pulse" />
      </div>
    </div>
  );
}

export default function Home() {
  const [renderBelowFold, setRenderBelowFold] = useState(false);

  useEffect(() => {
    if (renderBelowFold) return;

    const enableBelowFold = () => setRenderBelowFold(true);
    const timeoutId = window.setTimeout(enableBelowFold, BELOW_FOLD_FALLBACK_DELAY_MS);

    window.addEventListener("pointerdown", enableBelowFold, { once: true, passive: true });
    window.addEventListener("touchstart", enableBelowFold, { once: true, passive: true });
    window.addEventListener("scroll", enableBelowFold, { once: true, passive: true });
    window.addEventListener("keydown", enableBelowFold, { once: true });

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("pointerdown", enableBelowFold);
      window.removeEventListener("touchstart", enableBelowFold);
      window.removeEventListener("scroll", enableBelowFold);
      window.removeEventListener("keydown", enableBelowFold);
    };
  }, [renderBelowFold]);

  return (
    <div className="min-h-screen">
      <Hero />

      {renderBelowFold ? (
        <Suspense fallback={<BelowFoldSkeleton />}>
          <Oportunidade />
          <Depoimentos />
          <Plausibilidade />
          <Metodologia />
          <NewWay />
          <OceanoAzul />
          <Produto />
          <QuebraObjecao />
          <Comparacao />
          <Professores />
          <Oferta />
          <FAQ />
          <Footer />
        </Suspense>
      ) : null}
    </div>
  );
}
