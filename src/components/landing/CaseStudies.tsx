import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const TABS = [
  {
    name: "Clínica DentPlus",
    desc: "Automatización de citas y seguimiento de pacientes",
    metrics: [
      { value: "30%", label: "más citas agendadas" },
      { value: "10%", label: "aumento conversión" },
      { value: "1 mensaje", label: "vs 8 llamadas para primer contacto" },
    ],
  },
  {
    name: "Asesoría López",
    desc: "Gestión automatizada de propuestas y seguimiento de clientes",
    metrics: [
      { value: "82%", label: "menos seguimiento manual" },
      { value: "150%", label: "más propuestas enviadas" },
      { value: "36%", label: "reducción tiempo administrativo" },
    ],
  },
  {
    name: "Academia Pro",
    desc: "Captación de alumnos y fidelización automatizada",
    metrics: [
      { value: "58%", label: "tasa de conversión leads" },
      { value: "64%", label: "más matrículas" },
      { value: "73%", label: "alumnos fidelizados" },
    ],
  },
  {
    name: "Taller García",
    desc: "Presupuestos automáticos y respuesta inmediata a leads",
    metrics: [
      { value: "47%", label: "reducción tiempo administrativo" },
      { value: "3×", label: "más presupuestos enviados" },
      { value: "90%", label: "leads respondidos en <1min" },
    ],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const ref = useFadeIn();
  const tab = TABS[active];

  return (
    <section className="section-padding">
      <div ref={ref} className="fade-section max-w-7xl mx-auto">
        <h2 className="text-navy text-2xl sm:text-3xl font-bold text-center mb-2">Casos de éxito reales</h2>
        <p className="text-gray-desc text-center mb-10">Resultados concretos en negocios como el tuyo</p>

        <div className="flex gap-1 border-b border-border mb-10 overflow-x-auto">
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                i === active ? "border-primary text-blue-bright" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-secondary text-muted-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              {tab.name}
            </span>
            <h3 className="text-navy text-xl sm:text-2xl font-bold mb-6">{tab.desc}</h3>
            <ul className="space-y-4 mb-8">
              {tab.metrics.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-bright font-extrabold text-xl min-w-[80px]">{m.value}</span>
                  <span className="text-gray-desc">{m.label}</span>
                </li>
              ))}
            </ul>
            <a
              href="#form"
              className="inline-flex items-center gap-2 text-blue-bright font-semibold text-sm border border-primary rounded-full px-6 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Conviértete en el próximo caso de éxito →
            </a>
          </div>
          <div className="bg-placeholder rounded-2xl min-h-[380px] flex items-center justify-center">
            <span className="text-navy font-semibold opacity-60">{tab.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
