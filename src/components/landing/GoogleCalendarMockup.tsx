import { useState, useEffect } from "react";

const APPOINTMENTS = [
  { time: "09:00", title: "María López — Limpieza dental", color: "bg-primary", added: false },
  { time: "10:30", title: "Carlos Ruiz — Ortodoncia revisión", color: "bg-accent", added: false },
  { time: "12:00", title: "Ana García — Blanqueamiento", color: "bg-primary", added: false },
  { time: "16:00", title: "Pedro Martín — Empaste", color: "bg-accent", added: false },
  { time: "17:30", title: "Laura Fernández — Limpieza dental", color: "bg-primary", added: false },
];

export default function GoogleCalendarMockup({ className = "" }: { className?: string }) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= APPOINTMENTS.length) return;
    const timer = setTimeout(() => setVisible((c) => c + 1), 1000);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div className={`w-full max-w-[380px] bg-white rounded-2xl border border-border shadow-2xl overflow-hidden ${className}`}>
      {/* Calendar header */}
      <div className="bg-white border-b border-border px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4285f4] via-[#34a853] to-[#fbbc04] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">G</span>
          </div>
          <span className="font-bold text-sm text-foreground">Google Calendar</span>
        </div>
        <span className="text-xs text-muted-foreground">Jueves, 3 Abril</span>
      </div>

      {/* Day view */}
      <div className="px-4 py-3 space-y-2">
        {APPOINTMENTS.map((apt, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 border transition-all duration-500 ${
              i < visible
                ? "opacity-100 translate-x-0 border-border bg-secondary/50"
                : "opacity-0 -translate-x-4 border-transparent"
            }`}
          >
            <span className="text-xs font-mono text-muted-foreground w-10 shrink-0">{apt.time}</span>
            <div className={`w-1 h-8 rounded-full ${apt.color}`} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">{apt.title}</p>
              <p className="text-[10px] text-muted-foreground">Agendada por WhatsApp ✓</p>
            </div>
            {i < visible && (
              <div className="shrink-0 animate-[slideUp_0.3s_ease-out]">
                <span className="text-accent text-xs font-bold">✓ Auto</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-secondary/30 border-t border-border px-4 py-2.5 flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground">Sincronizado con Kinetic Ops</span>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-[10px] text-accent font-semibold">En tiempo real</span>
        </div>
      </div>
    </div>
  );
}
