import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import WhatsAppChat from "./WhatsAppChat";

const TABS = [
  {
    name: "Clínica DentPlus",
    desc: "Contactación de leads a través de WhatsApp para agendar citas de valoración.",
    metrics: [
      { value: "30%", label: "incremento en conversión de leads." },
      { value: "10%", label: "más citas cerradas por WhatsApp." },
      { value: "1 mensaje", label: "vs 8 llamadas para primer contacto." },
    ],
    messages: [
      { from: "bot" as const, text: "¡Hola! 👋 Hemos recibido tu solicitud.\n\n¿Qué tratamiento te interesa?", time: "11:06" },
      { from: "user" as const, text: "Ortodoncia invisible", time: "11:07" },
      { from: "bot" as const, text: "¡Gran elección! 😁\n\n¿Tu código postal para encontrar la clínica más cercana?", time: "11:07" },
      { from: "user" as const, text: "28001", time: "11:08" },
      { from: "bot" as const, text: "📍 Clínica DentPlus Centro\nC/ Gran Vía 42, Madrid\n\n📅 ¿Te agendo consulta gratuita?", time: "11:08" },
      { from: "user" as const, text: "Sí, por favor", time: "11:09" },
      { from: "bot" as const, text: "✅ ¡Agendada!\n\n📅 Lunes 7 abril — 10:30h\n📍 DentPlus Centro\n🦷 Valoración ortodoncia\n\n¡Te esperamos! 😊", time: "11:09" },
    ],
  },
  {
    name: "Asesoría López",
    desc: "Gestión automatizada de consultas y seguimiento de clientes potenciales.",
    metrics: [
      { value: "82%", label: "menos seguimiento manual." },
      { value: "150%", label: "más propuestas mensuales." },
      { value: "36%", label: "menos tiempo administrativo." },
    ],
    messages: [
      { from: "bot" as const, text: "Buenos días 👋 Soy el asistente de Asesoría López.\n\n1️⃣ Declaración renta\n2️⃣ Asesoría fiscal\n3️⃣ Constitución empresa", time: "09:00" },
      { from: "user" as const, text: "1", time: "09:01" },
      { from: "bot" as const, text: "📋 Renta 2025\n\nDocumentos necesarios:\n✅ DNI\n✅ Certificado retenciones\n✅ Datos bancarios\n\n¿Agendamos cita?", time: "09:01" },
      { from: "user" as const, text: "Sí, esta semana", time: "09:02" },
      { from: "bot" as const, text: "✅ Cita confirmada\n📅 Jueves 10 abril - 11:00h\n📍 Videollamada\n\nTe enviamos enlace 30 min antes 📧", time: "09:02" },
    ],
  },
  {
    name: "Taller García",
    desc: "Presupuestos automáticos y respuesta inmediata a leads.",
    metrics: [
      { value: "47%", label: "menos tiempo administrativo." },
      { value: "3×", label: "más presupuestos enviados." },
      { value: "90%", label: "leads respondidos en <1 min." },
    ],
    messages: [
      { from: "bot" as const, text: "🔧 ¡Hola! Soy el asistente de Taller García.\n\n🚗 Revisión/ITV\n🔧 Reparación\n🛞 Neumáticos\n📋 Presupuesto", time: "08:30" },
      { from: "user" as const, text: "Necesito cambiar neumáticos", time: "08:31" },
      { from: "bot" as const, text: "🛞 ¿Marca y modelo? (ej: Seat León 2020)", time: "08:31" },
      { from: "user" as const, text: "Volkswagen Golf 2021", time: "08:32" },
      { from: "bot" as const, text: "📋 Presupuesto VW Golf 2021:\n\n🛞 4x Michelin Primacy 4\n💰 desde 320€ (montaje incluido)\n⏰ Listo en 45 min\n\n¿Reservo cita?", time: "08:32" },
    ],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const ref = useFadeIn();
  const tab = TABS[active];

  return (
    <section className="section-padding section-gray">
      <div ref={ref} className="fade-section max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 inline-block">RESULTADOS REALES</span>
          <h2 className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Casos de éxito</h2>
          <p className="text-muted-foreground">Resultados concretos en negocios como el tuyo</p>
        </div>

        <div className="flex gap-1 justify-center border-b border-border mb-12 overflow-x-auto">
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3.5 text-sm font-bold whitespace-nowrap transition-all border-b-[3px] ${
                i === active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-foreground text-xl sm:text-2xl font-bold mb-6">{tab.desc}</h3>
            <ul className="space-y-5 mb-8">
              {tab.metrics.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-extrabold text-lg min-w-[80px]">• {m.value}</span>
                  <span className="text-muted-foreground">{m.label}</span>
                </li>
              ))}
            </ul>
            <a href="#form" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm rounded-full px-8 py-3.5 hover:shadow-lg hover:shadow-accent/30 transition-all hover:-translate-y-0.5">
              Conviértete en caso de éxito
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="flex justify-center">
            <WhatsAppChat key={active} messages={tab.messages} contactName={tab.name} contactSubtitle="Asistente Virtual · En línea" />
          </div>
        </div>
      </div>
    </section>
  );
}
