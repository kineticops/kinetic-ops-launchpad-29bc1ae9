import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const FEATURES = [
  {
    tab: "MARKETING",
    heading: "Impacta a través del canal favorito de tu cliente. +90% de tasa de apertura.",
    bullets: [
      "Envía promociones personalizadas",
      "Comparte nuevos servicios",
      "Crea flujos click-to-WhatsApp",
      "Responde preguntas frecuentes automáticamente",
    ],
  },
  {
    tab: "VENTAS",
    heading: "Multiplica tus conversiones con seguimiento automático. 3× más cierres.",
    bullets: [
      "Seguimiento automático de leads",
      "Cualificación inteligente",
      "Pipeline siempre actualizado",
      "Alertas de leads calientes",
    ],
  },
  {
    tab: "ATENCIÓN AL CLIENTE",
    heading: "Automatiza tu atención y reduce costes un 70%. Disponible 24/7.",
    bullets: [
      "Resolución 24/7 sin personal extra",
      "Envío automático de facturas",
      "Estado de pedidos en tiempo real",
      "Upselling y cross-selling automatizado",
    ],
  },
];

export default function FeaturesTabs() {
  const [active, setActive] = useState(0);
  const ref = useFadeIn();
  const f = FEATURES[active];

  return (
    <section className="section-gray section-padding">
      <div ref={ref} className="fade-section max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {FEATURES.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                i === active
                  ? "bg-blue-bright text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary"
              }`}
            >
              {feat.tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-bright text-xs font-bold uppercase tracking-wider mb-3 inline-block">{f.tab}</span>
            <h3 className="text-navy text-xl sm:text-2xl font-bold mb-6 leading-snug">{f.heading}</h3>
            <ul className="space-y-3 mb-8">
              {f.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-navy mt-2 shrink-0" />
                  <span className="text-gray-desc">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#form"
              className="inline-flex items-center gap-2 text-blue-bright font-semibold text-sm border border-primary rounded-full px-6 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Hablar con un especialista →
            </a>
          </div>
          <div className="flex justify-center">
            <div className="bg-placeholder rounded-3xl w-full max-w-[320px] min-h-[500px] flex items-center justify-center">
              <span className="text-navy font-semibold opacity-60">{f.tab}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
