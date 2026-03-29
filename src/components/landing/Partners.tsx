import { useFadeIn } from "@/hooks/useFadeIn";

const PARTNERS = ["Meta Business Partner", "N8N Certified", "WhatsApp Business API"];

export default function Partners() {
  const ref = useFadeIn();

  return (
    <section className="section-padding">
      <div ref={ref} className="fade-section max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-8">
          AVALADOS POR NUESTROS PARTNERS
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="bg-secondary text-muted-foreground text-sm font-semibold px-6 py-2.5 rounded-full"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
