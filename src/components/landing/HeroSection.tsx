import { useState, useEffect } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import heroImg from "@/assets/hero-person.jpg";
import WhatsAppChat from "./WhatsAppChat";

const HERO_MESSAGES = [
  { from: "bot" as const, text: "¡Hola! 👋 Soy el asistente virtual de Clínica Dental Sonríe. ¿En qué puedo ayudarte?", time: "10:30" },
  { from: "user" as const, text: "Hola, quiero pedir cita para una limpieza dental", time: "10:31" },
  { from: "bot" as const, text: "¡Perfecto! 🦷 Te ayudo a agendar tu limpieza dental.\n\n¿Qué día te vendría mejor?", time: "10:31" },
  { from: "user" as const, text: "El jueves por la tarde si es posible", time: "10:32" },
  { from: "bot" as const, text: "Tenemos disponibilidad el jueves:\n\n🕐 16:00h\n🕐 17:30h\n🕐 18:45h\n\n¿Cuál prefieres?", time: "10:32" },
  { from: "user" as const, text: "A las 17:30 por favor", time: "10:33" },
  { from: "bot" as const, text: "✅ ¡Cita confirmada!\n\n📅 Jueves 3 de abril\n🕐 17:30h\n🦷 Limpieza dental\n📍 Clínica Dental Sonríe\n\nTe enviaré un recordatorio 24h antes. ¡Hasta entonces! 😊", time: "10:33" },
];

const SECTORS = ["Clínica", "Legal", "Inmobiliaria", "Taller", "Retail", "Hostelería", "Educación", "Otro"];
const EMPLOYEES = ["1-5", "6-20", "21-50", "+50"];

export default function HeroSection() {
  const ref = useFadeIn();
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", sector: "", empleados: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <section className="relative min-h-screen overflow-hidden" id="form">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f1a3d] to-[#0a1628]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Floating chat bubbles - decorative */}
      <div className="absolute top-32 right-[8%] hidden xl:block animate-float-slow">
        <div className="bg-[#005c4b] text-white text-sm rounded-xl rounded-tr-sm px-4 py-2.5 shadow-lg max-w-[220px]">
          Quiero agendar una cita para limpieza dental 🦷
          <span className="text-[10px] text-white/50 ml-2 float-right mt-1">10:31</span>
        </div>
      </div>
      <div className="absolute top-52 right-[2%] hidden xl:block animate-float-delayed">
        <div className="bg-[#1f2c34] text-white/90 text-sm rounded-xl rounded-tl-sm px-4 py-2.5 shadow-lg max-w-[250px]">
          ✅ ¡Cita confirmada! Jueves 17:30h
          <span className="text-[10px] text-white/40 ml-2 float-right mt-1">10:33</span>
        </div>
      </div>

      <div ref={ref} className="fade-section relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left — Hero content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* WhatsApp icon */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/30">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span className="text-accent font-semibold text-sm tracking-wide uppercase">Asistente WhatsApp 24/7</span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight">
              Resuelve tus pains de comunicación con{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00aaff]">
                WhatsApp
              </span>
            </h1>

            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Mejora la comunicación con envíos en WhatsApp más rápidos y automatizados. Tu asistente virtual atiende, agenda y responde 24/7.
            </p>

            <a
              href="#form"
              className="group inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-base font-bold hover:shadow-lg hover:shadow-accent/30 transition-all hover:-translate-y-0.5 w-fit"
            >
              Solicita una demo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>

            {/* Hero visual — person with overlaid chat */}
            <div className="relative mt-6 rounded-3xl overflow-hidden max-w-[700px]">
              <img src={heroImg} alt="Profesional usando WhatsApp" width={960} height={1080} className="w-full h-[300px] sm:h-[400px] object-cover rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-transparent to-transparent" />
              
              {/* Floating metrics */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-white">
                  <span className="text-accent font-bold text-lg">90%</span>
                  <span className="text-white/70 text-xs block">Tasa de apertura</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-white">
                  <span className="text-primary font-bold text-lg">&lt;1min</span>
                  <span className="text-white/70 text-xs block">Tiempo respuesta</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-white">
                  <span className="text-accent font-bold text-lg">24/7</span>
                  <span className="text-white/70 text-xs block">Disponibilidad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-card border border-border/50 rounded-2xl shadow-2xl p-7 sm:p-10 backdrop-blur-sm">
              <h2 className="text-navy text-xl font-bold mb-1">Habla con un especialista</h2>
              <p className="text-gray-desc text-sm mb-6">Sin compromiso. Diagnóstico de tu negocio en 20 minutos.</p>
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
                <button type="submit" className="w-full bg-accent text-white py-3.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-accent/30 transition-all hover:-translate-y-0.5">
                  Quiero mi diagnóstico gratuito →
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
