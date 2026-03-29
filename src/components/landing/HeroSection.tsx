import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

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
    <section className="min-h-[90vh] pt-24 pb-16 flex items-center" id="form">
      <div ref={ref} className="fade-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="w-10 h-10 bg-blue-bright rounded-lg flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <h1 className="text-navy text-3xl sm:text-4xl lg:text-[3.2rem] font-extrabold leading-[1.15]">
            Resuelve los problemas de comunicación de tu PYME con IA
          </h1>
          <p className="text-gray-desc text-lg max-w-xl">
            Mejora la captación y seguimiento de clientes con automatizaciones inteligentes, más rápidas y sin esfuerzo manual.
          </p>
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-blue-bright text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-opacity w-fit"
          >
            Solicita una demo <span>→</span>
          </a>
          <div className="bg-placeholder rounded-2xl w-full max-w-[960px] h-[220px] sm:h-[300px] lg:h-[400px] flex items-center justify-center mt-4">
            <span className="text-navy font-semibold text-lg opacity-60">Dashboard Kinetic Ops</span>
          </div>
        </div>

        {/* Right Column — Form */}
        <div className="lg:col-span-5">
          <div className="bg-card border border-border rounded-2xl shadow-lg p-7 sm:p-10">
            <h2 className="text-navy text-xl font-bold mb-1">Habla con un especialista</h2>
            <p className="text-gray-desc text-sm mb-6">Sin compromiso. Diagnóstico de tu negocio en 20 minutos.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nombre"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-background text-foreground placeholder:text-muted-foreground"
              />
              <input
                type="email"
                placeholder="Email empresarial"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-background text-foreground placeholder:text-muted-foreground"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                required
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-background text-foreground placeholder:text-muted-foreground"
              />
              <select
                required
                value={form.sector}
                onChange={(e) => setForm({ ...form, sector: e.target.value })}
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-background text-foreground appearance-none"
              >
                <option value="">Sector</option>
                {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <select
                required
                value={form.empleados}
                onChange={(e) => setForm({ ...form, empleados: e.target.value })}
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-background text-foreground appearance-none"
              >
                <option value="">Empleados</option>
                {EMPLOYEES.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
              <button
                type="submit"
                className="w-full bg-blue-bright text-primary-foreground py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Quiero mi diagnóstico gratuito →
              </button>
              <p className="text-muted-foreground text-xs text-center">🔒 Sin spam. Datos protegidos.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
