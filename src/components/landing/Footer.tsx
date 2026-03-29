export default function Footer() {
  return (
    <footer className="bg-[#0a0e1a] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
          </div>
          <span className="text-white font-extrabold text-lg">KineticOps</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Política de privacidad</a>
          <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Aviso legal</a>
          <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Contacto</a>
        </div>
        <p className="text-white/30 text-xs">© 2025 Kinetic Ops. Todos los derechos reservados.</p>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        {[
          { name: "LinkedIn", icon: "in" },
          { name: "Instagram", icon: "ig" },
          { name: "WhatsApp", icon: "wa" },
        ].map((s) => (
          <a
            key={s.name}
            href="#"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-xs font-bold hover:bg-white/10 hover:text-white transition-all"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
