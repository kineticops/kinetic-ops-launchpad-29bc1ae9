import { useFadeIn } from "@/hooks/useFadeIn";
import WhatsAppChat from "./WhatsAppChat";

const TOOLS = [
  { icon: "📧", name: "Gmail" },
  { icon: "📅", name: "Google Calendar" },
  { icon: "🔵", name: "HubSpot" },
  { icon: "🟠", name: "Zapier" },
  { icon: "🔴", name: "Make" },
  { icon: "💬", name: "WhatsApp Business" },
  { icon: "📋", name: "Notion" },
  { icon: "🟣", name: "Stripe" },
  { icon: "🔗", name: "API personalizada" },
];

const INTEGRATION_MESSAGES = [
  { from: "bot" as const, text: "✅ Cita confirmada\n\n📅 Se ha añadido a Google Calendar\n📧 Confirmación enviada por email\n📋 Lead actualizado en HubSpot\n\n¡Todo sincronizado automáticamente! 🔄", time: "14:30" },
  { from: "user" as const, text: "¿Puedo recibir un recordatorio mañana?", time: "14:31" },
  { from: "bot" as const, text: "¡Por supuesto! ⏰\n\nTe enviaré un recordatorio:\n📱 24h antes por WhatsApp\n📧 2h antes por email\n\n¿Necesitas algo más?", time: "14:31" },
];

export default function Integrations() {
  const ref = useFadeIn();

  return (
    <section className="section-gray section-padding">
      <div ref={ref} className="fade-section max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 inline-block">
            ECOSISTEMA DE INTEGRACIONES
          </span>
          <h2 className="text-navy text-2xl sm:text-3xl font-bold mb-4">
            Nos conectamos con tus herramientas actuales
          </h2>
          <p className="text-gray-desc mb-8">
            No cambiamos tu stack. Conectamos todo para que funcione junto: CRM, email, WhatsApp, calendario y más.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {TOOLS.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-lg">{t.icon}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
          >
            Solicita una demo
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div className="flex justify-center">
          <WhatsAppChat
            messages={INTEGRATION_MESSAGES}
            contactName="Kinetic Ops"
            contactSubtitle="Sistema Integrado · Activo"
          />
        </div>
      </div>
    </section>
  );
}
