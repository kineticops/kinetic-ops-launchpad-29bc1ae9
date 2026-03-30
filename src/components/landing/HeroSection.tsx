import { useState, useEffect } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import WhatsAppChat from "./WhatsAppChat";

const HERO_MESSAGES = [
  { from: "bot" as const, text: "¡Hola! 👋 Soy el asistente de Clínica Dental Sonríe.\n\n¿En qué puedo ayudarte?\n\n🦷 Agendar cita\n❓ Consultar precios\n📅 Cambiar mi cita", time: "10:30" },
  { from: "user" as const, text: "Quiero agendar una cita para limpieza dental", time: "10:31" },
  { from: "bot" as const, text: "¡Perfecto! 🦷 Horarios disponibles:\n\n📅 Lunes 16:00h\n📅 Miércoles 10:30h\n📅 Jueves 17:30h\n\n¿Cuál prefieres?", time: "10:31" },
  { from: "user" as const, text: "Jueves 17:30 por favor", time: "10:32" },
  { from: "bot" as const, text: "✅ ¡Cita confirmada!\n\n📅 Jueves 3 abril — 17:30h\n🦷 Limpieza dental\n📍 Clínica Dental Sonríe\n\n🔔 Te avisaré 24h antes\n📅 Añadida a Google Calendar\n\n¡Te esperamos! 😊", time: "10:32" },
];

const PAIN_PILLS = [
  "📞 No más llamadas perdidas",
  "⏰ Respuesta inmediata 24/7",
  "📅 Citas sin intervención humana",
  "🔔 Recordatorios automáticos",
  "💬 0 leads sin responder",
];

export default function HeroSection() {
  const ref = useFadeIn();

  return (
    <section className="bg-background pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div ref={ref} className="fade-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm font-bold mb-6" style={{ color: "hsl(var(--green-wa))" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(var(--green-wa))" }} />
              Asistente WhatsApp con IA · 24/7
            </div>

            <h1 className="text-foreground text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight mb-6">
              Consigue tu asistente{" "}
              <br className="hidden sm:block" />
              virtual{" "}
              <span className="text-primary">24/7</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Tu recepcionista nunca descansa. Agenda citas, envía recordatorios, responde dudas y no pierdas ni un solo lead — todo por WhatsApp.
            </p>

            {/* Pain pills */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
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
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Quiero mi asistente virtual
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>

            {/* Mini stats */}
            <div className="flex gap-6 mt-10 justify-center lg:justify-start">
              <div>
                <span className="text-primary text-2xl font-extrabold block">90%</span>
                <span className="text-muted-foreground text-xs">Tasa de apertura</span>
              </div>
              <div className="w-px bg-border" />
              <div>
                <span className="text-primary text-2xl font-extrabold block">&lt;1min</span>
                <span className="text-muted-foreground text-xs">Tiempo respuesta</span>
              </div>
              <div className="w-px bg-border" />
              <div>
                <span className="text-primary text-2xl font-extrabold block">24/7</span>
                <span className="text-muted-foreground text-xs">Disponibilidad</span>
              </div>
            </div>
          </div>

          {/* Right — WhatsApp mockup */}
          <div className="flex justify-center">
            <WhatsAppChat
              messages={HERO_MESSAGES}
              contactName="Clínica Dental Sonríe"
              contactSubtitle="Asistente Virtual · En línea"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
