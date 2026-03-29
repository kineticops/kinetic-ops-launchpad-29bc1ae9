import { useFadeIn } from "@/hooks/useFadeIn";

export default function FinalCTA() {
  const ref = useFadeIn();

  return (
    <section className="bg-navy py-20 px-4">
      <div ref={ref} className="fade-section max-w-3xl mx-auto text-center">
        <h2 className="text-primary-foreground text-2xl sm:text-4xl font-extrabold mb-4">
          ¿Listo para dejar de perder clientes?
        </h2>
        <p className="text-primary-foreground/70 text-base mb-8">
          Diagnóstico gratuito de 20 minutos. Sin compromiso. Resultados reales.
        </p>
        <a
          href="#form"
          className="inline-flex items-center gap-2 bg-card text-navy px-8 py-4 rounded-full font-bold text-base hover:opacity-90 transition-opacity"
        >
          Solicita tu demo gratuita →
        </a>
      </div>
    </section>
  );
}
