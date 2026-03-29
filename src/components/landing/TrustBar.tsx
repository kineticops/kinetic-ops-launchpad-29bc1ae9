import { useFadeIn } from "@/hooks/useFadeIn";

const CLIENTS = ["Clínica Ruiz", "Asesoría López", "Academia Pro", "Taller García", "Inmobiliaria Sur", "Hotel Mar", "Dental Sonríe", "Centro Wellness"];

export default function TrustBar() {
  const ref = useFadeIn();
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="bg-background py-14 overflow-hidden border-t border-border/50">
      <div ref={ref} className="fade-section max-w-7xl mx-auto px-4 text-center mb-8">
        <p className="text-navy text-sm font-bold">
          +200 PYMES ya han automatizado su crecimiento con Kinetic Ops
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((c, i) => (
            <span key={i} className="mx-10 text-muted-foreground font-bold text-xl tracking-tight shrink-0 opacity-40 hover:opacity-70 transition-opacity">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
