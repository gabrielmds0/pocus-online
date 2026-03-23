/**
 * Seções 8 e 9 - Entregáveis / Produto
 */

import LeadCaptureButton from "@/components/LeadCaptureButton";
import { Button } from "@/components/ui/button";
import { Clock, FileText, Smartphone, Award } from "lucide-react";
import { useState } from "react";

const modulos = [
  { id: 1, titulo: "POCUS Cardíaco", area: "Cardiologia" },
  { id: 2, titulo: "POCUS Pulmonar", area: "Pneumologia" },
  { id: 3, titulo: "POCUS Vascular", area: "Vascular" },
  { id: 4, titulo: "POCUS Abdome", area: "Abdominal" },
  { id: 5, titulo: "Neuro POCUS", area: "Neurologia" },
  { id: 6, titulo: "Protocolo RUSH", area: "Emergência" },
  { id: 7, titulo: "Protocolo VExUS", area: "Hemodinâmica" },
  { id: 8, titulo: "Protocolo BLUE", area: "Pneumologia" },
  { id: 9, titulo: "Protocolo SAFE", area: "Trauma" },
  { id: 10, titulo: "Protocolo FOCUS", area: "Cardiologia" },
];

const stats = [
  { icone: Clock, valor: "+40h", label: "de conteúdo" },
  { icone: Award, valor: "1 ano", label: "de acesso" },
  { icone: FileText, valor: "Artigos", label: "de apoio" },
  { icone: Smartphone, valor: "App", label: "mobile" },
];

export default function Produto() {
  const [showAll, setShowAll] = useState(false);
  const visibleModulos = showAll ? modulos : modulos.slice(0, 6);
  const canToggle = modulos.length > 6;

  return (
    <section className="section-light section-padding">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="headline-section max-w-2xl mx-auto">
            A certificação que vai mudar a sua carreira médica
          </h2>
        </div>

        {/* Módulos */}
        <div
          id="modulos-grid"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-10 md:mb-12"
        >
          {visibleModulos.map((mod) => (
            <div key={mod.id} className="card-elevated p-5 sm:p-6 w-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                  {mod.id}
                </span>
                <h3 className="font-semibold">{mod.titulo}</h3>
              </div>
              <p className="body-sm text-muted-foreground">{mod.area}</p>
            </div>
          ))}
        </div>

        {showAll && (
          <div className="text-center mb-12">
            <p className="text-accent font-bold text-lg">
              +10 módulos especializados adicionais disponíveis no curso completo
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Incluindo: Princípios da Ultrassonografia, POCUS em Aparelho Urinário, Procedimentos, Aulas Bônus e muito mais
            </p>
          </div>
        )}

        {canToggle && (
          <div className="text-center mb-8 md:mb-10">
            <Button
              type="button"
              className="btn-secondary"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              aria-controls="modulos-grid"
            >
              {showAll ? "Ver menos módulos" : "Ver mais módulos"}
            </Button>
          </div>
        )}

        {/* Stats Bar */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-6 sm:p-8 mb-12 md:mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icone className="w-5 h-5 mx-auto mb-2 text-accent" />
                <p className="text-lg sm:text-xl font-bold">{stat.valor}</p>
                <p className="text-xs sm:text-sm opacity-70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <LeadCaptureButton className="btn-cta text-base w-full sm:w-auto">
            Quero fazer minha inscrição
          </LeadCaptureButton>
        </div>
      </div>
    </section>
  );
}
