import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import WhatsAppChat from "./WhatsAppChat";

const TABS = [
  {
    name: "Clínica DentPlus",
    desc: "Contactación de leads a través de WhatsApp para agendar una llamada de calificación con leads que piden info en la web.",
    metrics: [
      { value: "30%", label: "de incremento en la contratación de leads perdidos." },
      { value: "10%", label: "aumento de conversión atribuible a WhatsApp." },
      { value: "1 mensaje", label: "de WhatsApp vs 8 llamadas para lograr 1er contacto." },
    ],
    messages: [
      { from: "bot" as const, text: "¡Hola! 👋 Hemos recibido tu solicitud de información sobre nuestros servicios.\n\n¿Podrías confirmarnos qué tratamiento te interesa?", time: "11:06" },
      { from: "user" as const, text: "Hola, quiero información sobre ortodoncia invisible", time: "11:07" },
      { from: "bot" as const, text: "¡Genial elección! 😁 La ortodoncia invisible es nuestro tratamiento más solicitado.\n\n¿Podrías proporcionarnos tu código postal para mostrarte la clínica más cercana?", time: "11:07" },
      { from: "user" as const, text: "28001", time: "11:08" },
      { from: "bot" as const, text: "📍 Tu clínica más cercana:\n\nClínica DentPlus Centro\nC/ Gran Vía 42, Madrid\n\n📅 ¿Te agendo una consulta gratuita de valoración?", time: "11:08" },
      { from: "user" as const, text: "Sí, por favor", time: "11:09" },
      { from: "bot" as const, text: "✅ ¡Consulta agendada!\n\n📅 Lunes 7 abril\n🕐 10:30h\n📍 DentPlus Centro\n🦷 Valoración ortodoncia\n\n¡Te esperamos! 😊", time: "11:09" },
    ],
  },
  {
    name: "Asesoría López",
    desc: "Gestión automatizada de propuestas y seguimiento de clientes potenciales por WhatsApp.",
    metrics: [
      { value: "82%", label: "menos seguimiento manual necesario." },
      { value: "150%", label: "más propuestas enviadas mensualmente." },
      { value: "36%", label: "reducción de tiempo administrativo." },
    ],
    messages: [
      { from: "bot" as const, text: "Buenos días 👋 Soy el asistente de Asesoría López.\n\n¿En qué podemos ayudarte?\n\n1️⃣ Declaración de la renta\n2️⃣ Asesoría fiscal\n3️⃣ Constitución de empresa\n4️⃣ Otros", time: "09:00" },
      { from: "user" as const, text: "1", time: "09:01" },
      { from: "bot" as const, text: "📋 Declaración de la renta 2025\n\nNecesitamos estos documentos:\n✅ DNI\n✅ Certificado de retenciones\n✅ Datos bancarios\n\n¿Quieres que te agendemos una cita con nuestro asesor?", time: "09:01" },
      { from: "user" as const, text: "Sí, esta semana si es posible", time: "09:02" },
      { from: "bot" as const, text: "✅ Cita confirmada\n📅 Jueves 10 abril - 11:00h\n📍 Videollamada\n\nTe enviaremos el enlace 30 min antes. 📧", time: "09:02" },
    ],
  },
  {
    name: "Academia Pro",
    desc: "Captación de alumnos y fidelización automatizada con asistente WhatsApp.",
    metrics: [
      { value: "58%", label: "tasa de conversión de leads a matrícula." },
      { value: "64%", label: "más matrículas en el primer trimestre." },
      { value: "73%", label: "alumnos fidelizados al siguiente curso." },
    ],
    messages: [
      { from: "bot" as const, text: "🎓 ¡Hola! Bienvenido/a a Academia Pro.\n\n¿Qué curso te interesa?\n\n📚 Inglés B2\n💻 Programación Web\n📊 Marketing Digital\n🎨 Diseño UX/UI", time: "15:00" },
      { from: "user" as const, text: "Marketing Digital", time: "15:01" },
      { from: "bot" as const, text: "¡Gran elección! 🚀\n\n📊 Marketing Digital Pro\n⏰ 3 meses (120h)\n📅 Inicio: 14 abril\n💰 697€ (pago fraccionado disponible)\n\n🎁 ¡Plazas limitadas! Solo quedan 4.\n\n¿Te reservo plaza?", time: "15:01" },
    ],
  },
  {
    name: "Taller García",
    desc: "Presupuestos automáticos y respuesta inmediata a leads vía WhatsApp.",
    metrics: [
      { value: "47%", label: "reducción de tiempo administrativo." },
      { value: "3×", label: "más presupuestos enviados automáticamente." },
      { value: "90%", label: "de leads respondidos en menos de 1 minuto." },
    ],
    messages: [
      { from: "bot" as const, text: "🔧 ¡Hola! Soy el asistente de Taller García.\n\n¿Qué servicio necesitas?\n\n🚗 Revisión/ITV\n🔧 Reparación\n🛞 Neumáticos\n📋 Presupuesto", time: "08:30" },
      { from: "user" as const, text: "Necesito cambiar neumáticos", time: "08:31" },
      { from: "bot" as const, text: "🛞 ¡Perfecto! ¿Qué vehículo tienes?\n\nEscribe marca y modelo (ej: Seat León 2020)", time: "08:31" },
      { from: "user" as const, text: "Volkswagen Golf 2021", time: "08:32" },
      { from: "bot" as const, text: "📋 Presupuesto VW Golf 2021:\n\n🛞 4x Michelin Primacy 4\n💰 desde 320€ (montaje incluido)\n⏰ Listo en 45 min\n\n¿Quieres reservar cita?", time: "08:32" },
    ],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const ref = useFadeIn();
  const tab = TABS[active];

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="fade-section max-w-7xl mx-auto">
        <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">Casos de éxito reales</h2>
        <p className="text-gray-desc text-center mb-12">Resultados concretos en negocios como el tuyo</p>

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
            <h3 className="text-navy text-xl sm:text-2xl font-bold mb-6 leading-snug">{tab.desc}</h3>
            <ul className="space-y-5 mb-8">
              {tab.metrics.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-extrabold text-lg min-w-[80px]">• {m.value}</span>
                  <span className="text-gray-desc">{m.label}</span>
                </li>
              ))}
            </ul>
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm rounded-full px-8 py-3.5 hover:shadow-lg hover:shadow-accent/30 transition-all hover:-translate-y-0.5"
            >
              Conviértete en el próximo caso de éxito
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* WhatsApp mockup for each case study */}
          <div className="flex justify-center">
            <WhatsAppChat
              key={active}
              messages={tab.messages}
              contactName={tab.name}
              contactSubtitle="Asistente Virtual · En línea"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
