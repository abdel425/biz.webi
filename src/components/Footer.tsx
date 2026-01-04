import { Code2, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-xl">BIZWEB</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo Funciona</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:contacto@bizweb.es" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              contacto@bizweb.es
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© 2024 WebCraft. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
