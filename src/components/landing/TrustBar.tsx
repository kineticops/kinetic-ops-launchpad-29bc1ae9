import { useFadeIn } from "@/hooks/useFadeIn";

const CLIENTS = ["Clínica Ruiz", "Asesoría López", "Academia Pro", "Taller García", "Inmobiliaria Sur", "Hotel Mar", "Dental Sonríe", "Centro Wellness"];

export default function TrustBar() {
  const ref = useFadeIn();
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="bg-secondary/50 py-10 overflow-hidden border-y border-border/30">
      <div ref={ref} className="fade-section max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">
          +200 PYMES ya automatizan su crecimiento con Kinetic Ops
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/50 to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((c, i) => (
            <span key={i} className="mx-10 text-foreground/30 font-bold text-xl tracking-tight shrink-0 hover:text-foreground/60 transition-colors">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
