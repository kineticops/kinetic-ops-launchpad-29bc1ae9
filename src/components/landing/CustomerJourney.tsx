import { useFadeIn } from "@/hooks/useFadeIn";

const STAGES = [
  { num: 1, title: "DESCUBRIMIENTO", items: ["Captación de leads", "Anuncios automatizados", "Landing pages conectadas", "Marketing conversacional"] },
  { num: 2, title: "CONSIDERACIÓN", items: ["Respuesta inmediata", "Cualificación automática", "Desvío llamadas a WhatsApp", "Presentación de servicios"] },
  { num: 3, title: "CONVERSIÓN", items: ["Agendado automático de citas", "Envío de propuestas", "Cierre asistido", "Asesor virtual inteligente"] },
  { num: 4, title: "FIDELIZACIÓN", items: ["Atención post-venta 24/7", "Seguimiento satisfacción", "Recordatorios periódicos", "Upselling y reactivación"] },
];

export default function CustomerJourney() {
  const ref = useFadeIn();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="fade-section max-w-7xl mx-auto text-center">
        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 inline-block">CUSTOMER JOURNEY</span>
        <h2 className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Optimiza cada punto de contacto
        </h2>
        <p className="text-muted-foreground mb-14 max-w-2xl mx-auto">
          Desde el primer contacto hasta la fidelización, automatiza todo el journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {STAGES.map((s, i) => (
            <div key={i} className="relative group">
              {i < 3 && (
                <div className="hidden lg:flex absolute -right-3 top-12 z-10 text-border">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              )}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 mx-auto shadow-lg">
                  {s.num}
                </div>
                <h4 className="text-foreground text-xs font-bold tracking-widest mb-4">{s.title}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
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

        <a href="#form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-base hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
          Pide una demo
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
}
