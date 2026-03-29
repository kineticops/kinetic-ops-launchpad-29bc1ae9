import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import WhatsAppChat from "./WhatsAppChat";

const FEATURES = [
  {
    tab: "MARKETING",
    heading: "Impacta a través del canal favorito de tu cliente.",
    subheading: "+90% de tasa de lectura.",
    bullets: [
      { bold: "Envía promociones personalizadas", rest: " o estacionales." },
      { bold: "Comparte nuevos", rest: " productos y servicios." },
      { bold: "Crea anuncios click-to-WA", rest: " y conviértelos en conversaciones." },
      { bold: "Resuelve preguntas frecuentes", rest: " acerca de tus productos." },
    ],
    messages: [
      { from: "bot" as const, text: "🎉 ¡Oferta especial para ti!\n\nBlanqueamiento dental profesional con un 35% de descuento esta semana.\n\n¿Te interesa reservar?", time: "14:00" },
      { from: "user" as const, text: "¡Sí! ¿Qué incluye?", time: "14:01" },
      { from: "bot" as const, text: "Incluye:\n✨ Diagnóstico completo\n✨ Limpieza previa\n✨ Blanqueamiento LED\n✨ Kit de mantenimiento\n\n💰 Solo 249€ (antes 389€)\n\n¿Quieres reservar tu plaza?", time: "14:01" },
      { from: "user" as const, text: "Sí, me apunto", time: "14:02" },
      { from: "bot" as const, text: "✅ ¡Reserva confirmada!\nTe enviaremos los detalles por WhatsApp 📲", time: "14:02" },
    ],
  },
  {
    tab: "VENTAS",
    heading: "Multiplica tus conversiones con seguimiento automático.",
    subheading: "3× más cierres.",
    bullets: [
      { bold: "Seguimiento automático", rest: " de leads desde el primer contacto." },
      { bold: "Cualificación inteligente", rest: " para priorizar oportunidades." },
      { bold: "Pipeline siempre actualizado", rest: " con cada interacción." },
      { bold: "Alertas de leads calientes", rest: " para no perder ninguna venta." },
    ],
    messages: [
      { from: "bot" as const, text: "¡Hola Carlos! 👋\n\nHemos visto que pediste información sobre implantes dentales. ¿Puedo ayudarte con alguna duda?", time: "11:00" },
      { from: "user" as const, text: "Sí, ¿cuánto cuesta un implante?", time: "11:02" },
      { from: "bot" as const, text: "El precio depende del caso, pero nuestros implantes desde 890€ incluyen:\n\n🦷 Implante titanio\n👨‍⚕️ Cirugía + corona\n📋 Garantía 10 años\n\n¿Te agendo una valoración gratuita?", time: "11:02" },
      { from: "user" as const, text: "Sí, por favor", time: "11:03" },
      { from: "bot" as const, text: "📅 Valoración agendada\n🗓 Viernes 11 abril - 10:00h\n📍 Clínica Dental Sonríe\n\n¡Te esperamos! 😊", time: "11:03" },
    ],
  },
  {
    tab: "ATENCIÓN AL CLIENTE",
    heading: "Automatiza tu atención y reduce costes un 70%.",
    subheading: "Disponible 24/7.",
    bullets: [
      { bold: "Resolución 24/7", rest: " sin personal extra." },
      { bold: "Envío automático de facturas", rest: " y presupuestos." },
      { bold: "Estado de citas en tiempo real", rest: " para tus pacientes." },
      { bold: "Recordatorios automáticos", rest: " para reducir no-shows un 60%." },
    ],
    messages: [
      { from: "bot" as const, text: "📋 Recordatorio de cita\n\nHola Ana, te recordamos tu cita mañana:\n\n📅 Jueves 3 abril\n🕐 17:30h\n🦷 Limpieza dental\n\n¿Confirmas asistencia?", time: "18:00" },
      { from: "user" as const, text: "¿Puedo cambiarla al viernes?", time: "18:05" },
      { from: "bot" as const, text: "¡Claro! 😊 Disponibilidad viernes:\n\n🕐 09:00h\n🕐 12:30h\n🕐 16:00h\n\n¿Cuál prefieres?", time: "18:05" },
      { from: "user" as const, text: "A las 12:30", time: "18:06" },
      { from: "bot" as const, text: "✅ Cita reprogramada:\n📅 Viernes 4 abril - 12:30h\n\nTe enviaremos otro recordatorio mañana. ¡Hasta entonces! 👋", time: "18:06" },
    ],
  },
];

export default function FeaturesTabs() {
  const [active, setActive] = useState(0);
  const ref = useFadeIn();
  const f = FEATURES[active];

  return (
    <section className="relative overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0088ff] to-[#00aaff]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

      <div ref={ref} className="fade-section relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {FEATURES.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                i === active
                  ? "bg-white text-primary shadow-lg"
                  : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/20"
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
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 leading-snug">{f.heading}</h3>
            <p className="text-white/80 text-xl font-semibold mb-8">{f.subheading}</p>
            <ul className="space-y-4 mb-10">
              {f.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <span className="text-white/90 text-base">
                    <strong>{b.bold}</strong>{b.rest}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-full font-bold text-base hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Hablar con un especialista
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
