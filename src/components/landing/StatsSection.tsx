import { useFadeIn } from "@/hooks/useFadeIn";
import WhatsAppChat from "./WhatsAppChat";
import GoogleCalendarMockup from "./GoogleCalendarMockup";

const CHAT_MESSAGES = [
  { from: "bot" as const, text: "¡Hola! 👋 Soy el asistente de Clínica Dental Sonríe.\n\n¿En qué puedo ayudarte?", time: "10:30" },
  { from: "user" as const, text: "Quiero pedir cita para una limpieza dental", time: "10:31" },
  { from: "bot" as const, text: "¡Perfecto! 🦷 ¿Qué día te viene mejor?", time: "10:31" },
  { from: "user" as const, text: "El jueves por la tarde", time: "10:32" },
  { from: "bot" as const, text: "Disponibilidad jueves:\n\n🕐 16:00h\n🕐 17:30h\n🕐 18:45h\n\n¿Cuál prefieres?", time: "10:32" },
  { from: "user" as const, text: "17:30 por favor", time: "10:33" },
  { from: "bot" as const, text: "✅ ¡Cita confirmada!\n\n📅 Jueves 3 abril — 17:30h\n🦷 Limpieza dental\n📍 Clínica Dental Sonríe\n\n📅 Añadida a Google Calendar\n🔔 Recordatorio 24h antes", time: "10:33" },
];

const STATS = [
  { value: "90%", desc: "Tasa de lectura en WhatsApp vs 20% en email" },
  { value: "76%", desc: "De adultos prefieren contactar por mensajería" },
  { value: "#1", desc: "Canal preferido para gestiones rápidas en España" },
  { value: "84%", desc: "Del uso del móvil es en apps de mensajería" },
];

export default function StatsSection() {
  const ref = useFadeIn();

  return (
    <section className="section-padding section-gray">
      <div ref={ref} className="fade-section max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 inline-block">ASÍ FUNCIONA</span>
          <h2 className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Tu paciente agenda por WhatsApp.<br />Tú lo ves en Google Calendar.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todo automático. Sin llamadas, sin esperas, sin errores humanos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-xs font-bold" style={{ color: "hsl(var(--green-wa))" }}>
              📱 Lo que ve tu paciente
            </div>
            <WhatsAppChat messages={CHAT_MESSAGES} contactName="Clínica Dental Sonríe" contactSubtitle="Asistente Virtual · En línea" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-xs font-bold">
              📅 Lo que ves tú en la clínica
            </div>
            <GoogleCalendarMockup />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <span className="text-foreground text-3xl sm:text-4xl font-extrabold block mb-2">{s.value}</span>
              <span className="text-muted-foreground text-xs leading-relaxed">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
