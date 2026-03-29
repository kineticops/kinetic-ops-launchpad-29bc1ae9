import { useFadeIn } from "@/hooks/useFadeIn";

const STAGES = [
  {
    num: 1,
    title: "DESCUBRIMIENTO",
    color: "from-primary to-[#0088ff]",
    items: ["Captación de nuevos leads", "Anuncios automatizados", "Landing pages conectadas", "Marketing conversacional"],
  },
  {
    num: 2,
    title: "CONSIDERACIÓN",
    color: "from-[#0088ff] to-[#00aaff]",
    items: ["Respuesta inmediata a consultas", "Cualificación automática", "Desvío de llamadas a WhatsApp", "Presentación de servicios"],
  },
  {
    num: 3,
    title: "CONVERSIÓN",
    color: "from-[#00aaff] to-accent",
    items: ["Asesor virtual inteligente", "Agendado automático de citas", "Envío de propuestas", "Cierre de venta asistido"],
  },
  {
    num: 4,
    title: "FIDELIZACIÓN",
    color: "from-accent to-[#00c853]",
    items: ["Atención post-venta 24/7", "Envío de facturas", "Seguimiento de satisfacción", "Upselling y reactivación"],
  },
];

export default function CustomerJourney() {
  const ref = useFadeIn();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="fade-section max-w-7xl mx-auto text-center">
        <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Optimiza cada punto de contacto con tus clientes
        </h2>
        <p className="text-gray-desc mb-14 max-w-2xl mx-auto">
          Desde el primer contacto hasta la fidelización, automatiza todo el journey
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {STAGES.map((s, i) => (
            <div key={i} className="relative group">
              {i < 3 && (
                <div className="hidden lg:flex absolute -right-3 top-12 z-10 text-muted-foreground/40">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              )}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto shadow-lg`}>
                  {s.num}
                </div>
                <h4 className="text-navy text-xs font-bold tracking-widest mb-4">{s.title}</h4>
                <ul className="space-y-2 text-sm text-gray-desc text-left">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#form"
          className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold text-base hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
        >
          Pide una demo
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
}
