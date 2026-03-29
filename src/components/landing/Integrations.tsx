import { useFadeIn } from "@/hooks/useFadeIn";

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

export default function Integrations() {
  const ref = useFadeIn();

  return (
    <section className="section-gray section-padding">
      <div ref={ref} className="fade-section max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-blue-bright text-xs font-bold uppercase tracking-wider mb-3 inline-block">
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
                className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span>{t.icon}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-blue-bright text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Solicita una demo
          </a>
        </div>
        <div className="bg-card border border-border rounded-2xl shadow-md min-h-[420px] flex items-center justify-center">
          <div className="bg-placeholder rounded-xl w-[90%] h-[380px] flex items-center justify-center">
            <span className="text-navy font-semibold opacity-60">Integraciones Kinetic Ops</span>
          </div>
        </div>
      </div>
    </section>
  );
}
