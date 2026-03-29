import { useFadeIn } from "@/hooks/useFadeIn";

const STAGES = [
  {
    num: 1,
    title: "DESCUBRIMIENTO",
    items: ["Captación de nuevos leads", "Anuncios automatizados", "Landing pages conectadas", "Marketing conversacional"],
  },
  {
    num: 2,
    title: "CONSIDERACIÓN",
    items: ["Respuesta inmediata a consultas", "Cualificación automática", "Desvío de llamadas a WhatsApp", "Presentación de servicios"],
  },
  {
    num: 3,
    title: "CONVERSIÓN",
    items: ["Asesor virtual inteligente", "Agendado automático de citas", "Envío de propuestas", "Cierre de venta asistido"],
  },
  {
    num: 4,
    title: "FIDELIZACIÓN",
    items: ["Atención post-venta 24/7", "Envío de facturas", "Seguimiento de satisfacción", "Upselling y reactivación"],
  },
];

export default function CustomerJourney() {
  const ref = useFadeIn();

  return (
    <section className="section-padding">
      <div ref={ref} className="fade-section max-w-7xl mx-auto text-center">
        <h2 className="text-navy text-2xl sm:text-3xl font-bold mb-12">
          Optimiza cada punto de contacto con tus clientes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STAGES.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {i < 3 && (
                <span className="hidden lg:block absolute top-8 -right-3 text-muted-foreground text-2xl">→</span>
              )}
              <div className="w-12 h-12 rounded-full bg-blue-bright text-primary-foreground flex items-center justify-center text-lg font-bold mb-4">
                {s.num}
              </div>
              <h4 className="text-navy text-xs font-bold tracking-wider mb-3">{s.title}</h4>
              <ul className="space-y-1.5 text-sm text-gray-desc">
                {s.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a
          href="#form"
          className="inline-flex items-center gap-2 bg-blue-bright text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Pide una demo
        </a>
      </div>
    </section>
  );
}
