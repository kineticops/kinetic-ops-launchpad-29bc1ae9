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
    <section className="relative min-h-screen overflow-hidden bg-background" id="form">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Floating chat bubbles — Blip style */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left — Hero content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
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
            <div className="flex flex-wrap gap-2 mt-1">
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
            <div className="relative mt-4 rounded-3xl overflow-hidden max-w-[600px]">
              <img src={heroImg} alt="Profesional usando WhatsApp" width={960} height={1080} className="w-full h-[300px] sm:h-[380px] object-cover rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Floating mini-metrics */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
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

          {/* Right — Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-card border border-border rounded-2xl shadow-2xl p-7 sm:p-10">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h2 className="text-navy text-xl font-bold">Consigue tu asistente virtual 24/7</h2>
              </div>
              <p className="text-gray-desc text-sm mb-6">Diagnóstico gratuito en 20 minutos. Sin compromiso.</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Nombre" required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background text-foreground placeholder:text-muted-foreground" />
                <input type="email" placeholder="Email empresarial" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background text-foreground placeholder:text-muted-foreground" />
                <input type="tel" placeholder="Teléfono" required value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background text-foreground placeholder:text-muted-foreground" />
                <select required value={form.sector} onChange={(e) => setForm({ ...form, sector: e.target.value })} className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background text-foreground appearance-none">
                  <option value="">Sector</option>
                  {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <select required value={form.empleados} onChange={(e) => setForm({ ...form, empleados: e.target.value })} className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background text-foreground appearance-none">
                  <option value="">Empleados</option>
                  {EMPLOYEES.map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
                <button type="submit" className="w-full bg-primary text-white py-3.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
                  Quiero mi asistente virtual →
                </button>
                <p className="text-muted-foreground text-xs text-center">🔒 Sin spam. Datos protegidos.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
