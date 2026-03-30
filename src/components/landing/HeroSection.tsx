import { useState, useEffect } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import heroImg from "@/assets/hero-person.jpg";

const SECTORS = ["Clínica", "Legal", "Inmobiliaria", "Taller", "Retail", "Hostelería", "Educación", "Otro"];
const EMPLOYEES = ["1-5", "6-20", "21-50", "+50"];

const FLOATING_BUBBLES = [
  { text: "Quiero una cita para limpieza 🦷", side: "right", delay: "0s", top: "12%", x: "55%" },
  { text: "¡Cita confirmada! Jueves 17:30h ✅", side: "left", delay: "1.5s", top: "28%", x: "2%" },
  { text: "¿Tienen hueco mañana?", side: "right", delay: "3s", top: "48%", x: "60%" },
  { text: "Recordatorio: cita mañana a las 10:00h 📅", side: "left", delay: "2s", top: "65%", x: "5%" },
  { text: "¿Cuánto cuesta el blanqueamiento?", side: "right", delay: "4s", top: "78%", x: "50%" },
];

const PAIN_PILLS = [
  "📞 No más llamadas perdidas",
  "⏰ Respuesta inmediata 24/7",
  "📅 Citas agendadas automáticamente",
  "🔔 Recordatorios sin esfuerzo",
  "💬 0 leads sin responder",
];

export default function HeroSection() {
  const ref = useFadeIn();
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", sector: "", empleados: "" });
  const [visibleBubbles, setVisibleBubbles] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleBubbles((c) => {
        if (c >= FLOATING_BUBBLES.length) return c;
        return c + 1;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Floating chat bubbles — behind content, subtle */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block opacity-30">
        {FLOATING_BUBBLES.map((b, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-700 ${i < visibleBubbles ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              top: b.top,
              left: b.x,
              animationDelay: b.delay,
              animation: i < visibleBubbles ? `float-slow 6s ease-in-out infinite ${b.delay}` : "none",
            }}
          >
            <div
              className={`px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg max-w-[260px] ${
                b.side === "right"
                  ? "bg-primary text-white rounded-tr-sm"
                  : "bg-accent text-white rounded-tl-sm"
              }`}
            >
              {b.text}
            </div>
          </div>
        ))}
      </div>

      <div ref={ref} className="fade-section relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-accent text-sm font-bold w-fit">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Asistente WhatsApp con IA · 24/7
          </div>

          <h1 className="text-navy text-3xl sm:text-4xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight">
            Consigue tu asistente
            <br />
            virtual{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00aaff]">
              24/7
            </span>
          </h1>

          <p className="text-gray-desc text-lg max-w-xl leading-relaxed">
            Tu recepcionista nunca descansa. Agenda citas, envía recordatorios, responde dudas y no pierdas ni un solo lead — todo por WhatsApp, automáticamente.
          </p>

          {/* Pain pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-1">
            {PAIN_PILLS.map((pill, i) => (
              <span
                key={i}
                className="bg-secondary border border-border text-foreground text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                {pill}
              </span>
            ))}
          </div>

          <a
            href="#form"
            className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-0.5 w-fit"
          >
            Quiero mi asistente virtual
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>

          {/* Hero image with person */}
          <div className="relative mt-4 rounded-3xl overflow-hidden w-full max-w-[700px]">
            <img src={heroImg} alt="Profesional usando WhatsApp" width={960} height={1080} className="w-full h-[300px] sm:h-[420px] object-cover rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            
            {/* Floating mini-metrics */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-3">
              <div className="bg-white/90 backdrop-blur-md border border-border rounded-xl px-4 py-2.5 shadow-lg">
                <span className="text-accent font-bold text-lg">90%</span>
                <span className="text-muted-foreground text-xs block">Tasa de apertura</span>
              </div>
              <div className="bg-white/90 backdrop-blur-md border border-border rounded-xl px-4 py-2.5 shadow-lg">
                <span className="text-primary font-bold text-lg">&lt;1min</span>
                <span className="text-muted-foreground text-xs block">Tiempo respuesta</span>
              </div>
              <div className="bg-white/90 backdrop-blur-md border border-border rounded-xl px-4 py-2.5 shadow-lg">
                <span className="text-accent font-bold text-lg">24/7</span>
                <span className="text-muted-foreground text-xs block">Disponibilidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
