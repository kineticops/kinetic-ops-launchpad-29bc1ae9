import { useFadeIn } from "@/hooks/useFadeIn";
import WhatsAppChat from "./WhatsAppChat";

const STATS_MESSAGES = [
  { from: "bot" as const, text: "¡Hola María! 👋 ¿Qué tratamiento dental te interesa?", time: "09:15" },
  { from: "user" as const, text: "Hola, quiero información sobre blanqueamiento dental", time: "09:16" },
  { from: "bot" as const, text: "¡Genial! 😁 Nuestro blanqueamiento dental profesional incluye:\n\n✨ Diagnóstico previo\n✨ Limpieza profesional\n✨ Blanqueamiento LED\n✨ Kit de mantenimiento\n\n💰 Precio especial: 249€ (antes 399€)\n\n¿Te gustaría agendar una consulta gratuita?", time: "09:16" },
  { from: "user" as const, text: "Sí, me gustaría agendar una consulta", time: "09:17" },
  { from: "bot" as const, text: "📅 Tenemos disponibilidad:\n\n🗓 Lunes 7 abril - 10:00h\n🗓 Martes 8 abril - 16:30h\n🗓 Miércoles 9 abril - 11:00h\n\n¿Cuál te viene mejor?", time: "09:17" },
];

const STATS = [
  { value: "90%", desc: "De tasa de lectura en mensajes enviados por empresas a través de WhatsApp.", icon: "✅" },
  { value: "76%", desc: "De los adultos prefieren comunicarse con las empresas igual que con amigos: vía messaging.", icon: "✅" },
  { value: "#1", desc: "Canal nº 1 para reprogramar entregas en países como España, Brasil y Portugal.", icon: "✅" },
  { value: "84%", desc: "Del tiempo que se utiliza un smartphone se dedica a apps de messaging como WhatsApp.", icon: "✅" },
];

export default function StatsSection() {
  const ref = useFadeIn();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="fade-section max-w-7xl mx-auto">
        <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
          Comienza a utilizar la aplicación más cómoda para tus clientes
        </h2>
        <p className="text-gray-desc text-center mb-16 max-w-2xl mx-auto">
          WhatsApp es donde están tus clientes. Nosotros te ayudamos a estar ahí 24/7.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Stats */}
          <div className="space-y-8">
            {STATS.map((s, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="hsl(var(--accent))"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <div>
                  <span className="text-navy text-3xl sm:text-4xl font-extrabold block mb-1 group-hover:text-primary transition-colors">{s.value}</span>
                  <span className="text-gray-desc text-sm leading-relaxed">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right — WhatsApp mockup */}
          <div className="flex justify-center">
            <WhatsAppChat
              messages={STATS_MESSAGES}
              contactName="Clínica Dental Sonríe"
              contactSubtitle="Asistente Virtual · En línea"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
