import { useFadeIn } from "@/hooks/useFadeIn";

const PARTNERS = [
  { name: "Meta Business Partner", icon: "🔵" },
  { name: "N8N Certified", icon: "⚡" },
  { name: "WhatsApp Business API", icon: "💬" },
];

export default function Partners() {
  const ref = useFadeIn();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="fade-section max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-8">
          AVALADOS POR NUESTROS PARTNERS
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 bg-card border border-border text-muted-foreground text-sm font-semibold px-6 py-3 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span className="text-lg">{p.icon}</span>
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
