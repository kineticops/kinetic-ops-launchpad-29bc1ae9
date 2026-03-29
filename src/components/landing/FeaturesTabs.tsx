import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import WhatsAppChat from "./WhatsAppChat";

const FEATURES = [
  {
    tab: "AGENDA CITAS",
    heading: "Tus pacientes agendan solos por WhatsApp. Sin llamar.",
    subheading: "Reducción del 80% en llamadas telefónicas.",
    bullets: [
      { bold: "Agenda automática", rest: " conectada a Google Calendar." },
      { bold: "El paciente elige día y hora", rest: " sin intervención humana." },
      { bold: "Confirmación instantánea", rest: " con todos los detalles." },
      { bold: "Gestión de reprogramaciones", rest: " y cancelaciones." },
    ],
    messages: [
      { from: "bot" as const, text: "¡Hola! 👋 ¿Quieres agendar una cita?\n\n¿Qué servicio necesitas?\n\n🦷 Limpieza\n✨ Blanqueamiento\n🔧 Empaste\n📋 Revisión general", time: "10:00" },
      { from: "user" as const, text: "Limpieza dental", time: "10:01" },
      { from: "bot" as const, text: "¡Perfecto! 🦷\n\nHorarios disponibles esta semana:\n\n📅 Lunes 10:00h\n📅 Miércoles 16:30h\n📅 Jueves 17:30h\n\n¿Cuál te viene mejor?", time: "10:01" },
      { from: "user" as const, text: "Jueves 17:30", time: "10:02" },
      { from: "bot" as const, text: "✅ ¡Cita confirmada!\n\n📅 Jueves 3 abril — 17:30h\n🦷 Limpieza dental\n📍 Clínica Dental Sonríe\n\n📅 Añadida a tu calendario\n🔔 Te avisaré 24h antes\n\n¡Hasta entonces! 😊", time: "10:02" },
    ],
  },
  {
    tab: "RECORDATORIOS",
    heading: "Reduce un 60% los no-shows con recordatorios automáticos.",
    subheading: "Sin que tu equipo tenga que acordarse.",
    bullets: [
      { bold: "Recordatorio 24h antes", rest: " por WhatsApp automáticamente." },
      { bold: "Confirmación con un click", rest: " — el paciente responde 'Sí' o reprograma." },
      { bold: "Alerta al equipo", rest: " si el paciente cancela." },
      { bold: "Relleno automático", rest: " de huecos por cancelaciones." },
    ],
    messages: [
      { from: "bot" as const, text: "📋 Recordatorio de cita\n\nHola Ana 👋\n\nTe recordamos tu cita mañana:\n\n📅 Jueves 3 abril\n🕐 17:30h\n🦷 Limpieza dental\n📍 Clínica Dental Sonríe\n\n¿Confirmas asistencia?\n\n1️⃣ Sí, confirmo\n2️⃣ Necesito cambiar la hora", time: "18:00" },
      { from: "user" as const, text: "1", time: "18:02" },
      { from: "bot" as const, text: "✅ ¡Asistencia confirmada!\n\nRecuerda:\n🚗 Parking gratuito en C/ Mayor 12\n⏰ Llega 5 min antes\n\n¡Te esperamos mañana! 😊", time: "18:02" },
    ],
  },
  {
    tab: "CONSULTAS 24/7",
    heading: "Responde consultas a las 3 AM sin contratar a nadie.",
    subheading: "El 60% de las preguntas llegan fuera de horario.",
    bullets: [
      { bold: "Preguntas frecuentes", rest: " respondidas al instante." },
      { bold: "Información de precios", rest: " y servicios disponible 24/7." },
      { bold: "Derivación inteligente", rest: " a un humano cuando hace falta." },
      { bold: "Tono profesional", rest: " y personalizado de tu clínica." },
    ],
    messages: [
      { from: "user" as const, text: "Hola, ¿cuánto cuesta un blanqueamiento?", time: "23:45" },
      { from: "bot" as const, text: "¡Hola! 😊 Gracias por tu interés.\n\nNuestro blanqueamiento dental:\n\n✨ Blanqueamiento LED profesional\n💰 Desde 249€\n⏱ Duración: 1h aprox.\n\nIncluye diagnóstico previo + kit de mantenimiento.\n\n¿Te gustaría agendar una consulta gratuita de valoración?", time: "23:45" },
      { from: "user" as const, text: "Sí, el lunes si puede ser", time: "23:46" },
      { from: "bot" as const, text: "📅 Disponibilidad lunes:\n\n🕐 09:30h\n🕐 11:00h\n🕐 16:00h\n\n¿Cuál prefieres?", time: "23:46" },
      { from: "user" as const, text: "11:00", time: "23:47" },
      { from: "bot" as const, text: "✅ ¡Cita agendada!\n\n📅 Lunes 7 abril — 11:00h\n✨ Valoración blanqueamiento\n📍 Clínica Dental Sonríe\n\n¡Descansa, nos vemos el lunes! 🌙", time: "23:47" },
    ],
  },
];

export default function FeaturesTabs() {
  const [active, setActive] = useState(0);
  const ref = useFadeIn();
  const f = FEATURES[active];

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="fade-section max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 inline-block">FUNCIONALIDADES</span>
          <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            3 funciones que transforman tu clínica
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {FEATURES.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                i === active
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 border border-border"
              }`}
            >
              {feat.tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Phone mockup */}
          <div className="flex justify-center order-2 lg:order-1">
            <WhatsAppChat
              key={active}
              messages={f.messages}
              contactName="Clínica Dental Sonríe"
              contactSubtitle="Asistente Virtual · En línea"
            />
          </div>

          {/* Right — Text */}
          <div className="order-1 lg:order-2">
            <h3 className="text-navy text-2xl sm:text-3xl font-bold mb-2 leading-snug">{f.heading}</h3>
            <p className="text-primary text-lg font-semibold mb-8">{f.subheading}</p>
            <ul className="space-y-4 mb-10">
              {f.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" fill="hsl(var(--primary))" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                  </div>
                  <span className="text-gray-desc text-base">
                    <strong className="text-navy">{b.bold}</strong>{b.rest}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold text-base hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Quiero esto para mi clínica
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
