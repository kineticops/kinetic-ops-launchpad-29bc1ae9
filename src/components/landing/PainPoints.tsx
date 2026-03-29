import { useFadeIn } from "@/hooks/useFadeIn";

const PAINS = [
  { icon: "💬", text: "Leads sin respuesta rápida" },
  { icon: "📞", text: "Canales manuales e ineficientes" },
  { icon: "⏰", text: "Largos tiempos de respuesta" },
  { icon: "⚙️", text: "Procesos repetitivos sin automatizar" },
];

export default function PainPoints() {
  const ref = useFadeIn();
  const repeated = [...PAINS, ...PAINS, ...PAINS];

  return (
    <section className="section-gray section-padding overflow-hidden">
      <div ref={ref} className="fade-section max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-navy text-2xl sm:text-3xl font-bold">
          ¿Tienes cuellos de botella en la comunicación con tus clientes?
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {repeated.map((p, i) => (
            <div key={i} className="inline-flex items-center gap-2 bg-card rounded-full shadow-sm px-6 py-3 mx-3 shrink-0">
              <span className="text-lg">{p.icon}</span>
              <span className="text-sm font-medium text-foreground">{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
