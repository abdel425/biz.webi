import { Code, Palette, Rocket, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Páginas web modernas, rápidas y optimizadas para SEO que convierten visitantes en clientes.",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces atractivas y experiencias de usuario intuitivas que destacan tu marca.",
  },
  {
    icon: Rocket,
    title: "Optimización",
    description: "Rendimiento ultra rápido y mejores prácticas para posicionamiento en buscadores.",
  },
  {
    icon: Zap,
    title: "Mantenimiento",
    description: "Soporte continuo y actualizaciones para mantener tu sitio siempre al día.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones completas de desarrollo web para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
