import { useFadeIn } from "@/hooks/useFadeIn";

export default function FinalCTA() {
  const ref = useFadeIn();

  return (
    <section className="relative overflow-hidden py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0044cc] to-[#002299]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-[150px]" />
      
      <div ref={ref} className="fade-section relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 text-white/80 text-sm font-medium">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Asistente disponible 24/7
        </div>
        <h2 className="text-white text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
          ¿Listo para dejar de
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">perder pacientes</span>?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
          Diagnóstico gratuito de 20 minutos. Sin compromiso. Resultados reales.
        </p>
        <a
          href="#form"
          className="group inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1"
        >
          Consigue tu asistente virtual
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
      </div>
    </section>
  );
}
