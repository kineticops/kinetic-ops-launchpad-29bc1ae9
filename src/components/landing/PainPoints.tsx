import { useFadeIn } from "@/hooks/useFadeIn";

const PAINS = [
  {
    emoji: "📞",
    title: "Pierdes leads por no contestar a tiempo",
    desc: "El 78% de los pacientes eligen la primera clínica que responde. Si tardas más de 5 minutos, se van a la competencia.",
    stat: "78%",
    statLabel: "eligen quien responde primero",
  },
  {
    emoji: "😩",
    title: "Tu recepcionista está saturada",
    desc: "Responder WhatsApps, atender llamadas, gestionar citas… una sola persona no puede con todo.",
    stat: "4h/día",
    statLabel: "perdidas en tareas repetitivas",
  },
  {
    emoji: "🔕",
    title: "Los pacientes no se presentan a las citas",
    desc: "Sin recordatorios automáticos, hasta el 30% de los pacientes no acuden. Huecos vacíos = dinero perdido.",
    stat: "30%",
    statLabel: "de no-shows sin recordatorios",
  },
  {
    emoji: "🌙",
    title: "Fuera de horario = 0 ventas",
    desc: "El 60% de las consultas llegan por la noche o fines de semana. Sin respuesta, pierdes esos pacientes.",
    stat: "60%",
    statLabel: "consultas fuera de horario",
  },
  {
    emoji: "📋",
    title: "Gestionas citas a mano en papel o Excel",
    desc: "Errores, dobles reservas, citas perdidas. Sin un sistema automático, el caos es inevitable.",
    stat: "3×",
    statLabel: "más errores que un sistema automático",
  },
  {
    emoji: "💸",
    title: "Gastas en marketing pero no conviertes",
    desc: "Atraes leads con anuncios pero nadie les responde rápido. El embudo se rompe justo al final.",
    stat: "40%",
    statLabel: "de leads pagados se pierden",
  },
];

export default function PainPoints() {
  const ref = useFadeIn();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="fade-section max-w-7xl mx-auto text-center">
        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 inline-block">
          ¿TE SUENA ALGUNO?
        </span>
        <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Dolores que tu asistente virtual elimina
        </h2>
        <p className="text-gray-desc text-lg mb-14 max-w-2xl mx-auto">
          Cada uno de estos problemas te cuesta pacientes y dinero. Todos tienen la misma solución.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAINS.map((p, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-2xl p-6 text-left hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{p.emoji}</span>
                <div className="text-right">
                  <span className="text-primary text-2xl font-extrabold block leading-none">{p.stat}</span>
                  <span className="text-muted-foreground text-[10px]">{p.statLabel}</span>
                </div>
              </div>
              <h3 className="text-navy font-bold text-base mb-2">{p.title}</h3>
              <p className="text-gray-desc text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="#form"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-base mt-12 hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
        >
          Elimina estos problemas hoy
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
      </div>
    </section>
  );
}
