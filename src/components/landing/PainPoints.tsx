import { useFadeIn } from "@/hooks/useFadeIn";

const PAINS = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Excesivas consultas repetidas",
    desc: "Tus pacientes preguntan lo mismo una y otra vez. Tu equipo pierde tiempo valioso.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    title: "Canales tradicionales ineficientes",
    desc: "SMS, email y llamadas tienen tasas de apertura menores al 20%.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Largos tiempos de respuesta",
    desc: "Cada minuto que tardas en responder, pierdes un 10% de probabilidad de conversión.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    ),
    title: "Procesos fácilmente automatizables",
    desc: "Agendar citas, enviar recordatorios, confirmar asistencia... todo se puede automatizar.",
  },
];

export default function PainPoints() {
  const ref = useFadeIn();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="fade-section max-w-7xl mx-auto text-center">
        <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          ¿Tienes cuellos de botella en la comunicación con tus clientes?
        </h2>
        <p className="text-gray-desc text-lg mb-16 max-w-2xl mx-auto">
          Estos problemas cuestan miles de euros al año a las PYMEs españolas
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAINS.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center gap-4 p-6 rounded-2xl hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300">
                {p.icon}
              </div>
              <h3 className="text-navy font-bold text-base">{p.title}</h3>
              <p className="text-gray-desc text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
