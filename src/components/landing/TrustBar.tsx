import { useFadeIn } from "@/hooks/useFadeIn";

const CLIENTS = ["Clínica Ruiz", "Asesoría López", "Academia Pro", "Taller García", "Inmobiliaria Sur", "Hotel Mar"];

export default function TrustBar() {
  const ref = useFadeIn();
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="section-gray py-12 overflow-hidden">
      <div ref={ref} className="fade-section max-w-7xl mx-auto px-4 text-center mb-8">
        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">
          +200 PYMES ya han automatizado su crecimiento con Kinetic Ops
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((c, i) => (
            <span key={i} className="mx-10 text-muted-foreground font-semibold text-lg shrink-0">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
