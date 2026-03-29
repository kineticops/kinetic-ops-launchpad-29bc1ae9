import { useFadeIn } from "@/hooks/useFadeIn";

const STATS = [
  { value: "90%", desc: "Tasa de apertura de mensajes automatizados por WhatsApp" },
  { value: "76%", desc: "De adultos prefieren contactar empresas por mensajería" },
  { value: "#1", desc: "Canal preferido para gestiones en España" },
  { value: "84%", desc: "Del tiempo en smartphone se dedica a apps de mensajería" },
];

export default function StatsSection() {
  const ref = useFadeIn();

  return (
    <section className="section-padding">
      <div ref={ref} className="fade-section max-w-7xl mx-auto text-center">
        <h2 className="text-navy text-2xl sm:text-3xl font-bold mb-12">
          Automatiza con el canal preferido de tus clientes
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <span className="text-blue-bright text-2xl">✓</span>
              <span className="text-navy text-3xl sm:text-4xl font-extrabold">{s.value}</span>
              <span className="text-gray-desc text-sm max-w-[200px]">{s.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-placeholder rounded-2xl w-full max-w-[960px] mx-auto h-[300px] sm:h-[500px] flex items-center justify-center">
          <span className="text-navy font-semibold opacity-60">Automatización WhatsApp — Kinetic Ops</span>
        </div>
      </div>
    </section>
  );
}
