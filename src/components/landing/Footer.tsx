export default function Footer() {
  return (
    <footer className="bg-navy-dark py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-primary-foreground font-extrabold text-lg">KineticOps</span>
        <div className="flex gap-6">
          <a href="#" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">Política de privacidad</a>
          <a href="#" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">Aviso legal</a>
          <a href="#" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">Contacto</a>
        </div>
        <p className="text-primary-foreground/50 text-xs">© 2025 Kinetic Ops. Todos los derechos reservados.</p>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        {["LinkedIn", "Instagram", "WhatsApp"].map((s) => (
          <a
            key={s}
            href="#"
            className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 text-xs hover:bg-primary-foreground/10 transition-colors"
          >
            {s[0]}
          </a>
        ))}
      </div>
    </footer>
  );
}
