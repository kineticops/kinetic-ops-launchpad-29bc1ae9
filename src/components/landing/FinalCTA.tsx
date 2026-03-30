import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const SECTORS = ["Clínica", "Legal", "Inmobiliaria", "Taller", "Retail", "Hostelería", "Educación", "Otro"];
const EMPLOYEES = ["1-5", "6-20", "21-50", "+50"];

export default function FinalCTA() {
  const ref = useFadeIn();
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", sector: "", empleados: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <section id="form" className="relative overflow-hidden py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0044cc] to-[#002299]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-[150px]" />

      <div ref={ref} className="fade-section relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 text-white/80 text-sm font-medium">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Asistente disponible 24/7
          </div>
          <h2 className="text-white text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            ¿Listo para dejar de
            <br />
            <span className="text-white/70">perder pacientes</span>?
          </h2>
          <p className="text-white/60 text-lg mb-6 max-w-lg">
            Diagnóstico gratuito de 20 minutos. Sin compromiso. Resultados reales.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-white/70 text-sm">
            <span className="flex items-center gap-1.5"><span className="text-accent">✓</span> Sin tarjeta de crédito</span>
            <span className="flex items-center gap-1.5"><span className="text-accent">✓</span> Setup en 48h</span>
            <span className="flex items-center gap-1.5"><span className="text-accent">✓</span> Soporte dedicado</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-2xl p-7 sm:p-10">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "hsl(var(--green-wa))" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h2 className="text-foreground text-xl font-bold">Consigue tu asistente virtual 24/7</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6">Diagnóstico gratuito en 20 minutos. Sin compromiso.</p>
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
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
              Quiero mi asistente virtual →
            </button>
            <p className="text-muted-foreground text-xs text-center">🔒 Sin spam. Datos protegidos.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
