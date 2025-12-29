import { CheckCircle, Eye, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Eye,
    step: "01",
    title: "Cuéntanos tu idea",
    description: "Analizamos tu negocio y creamos un diseño personalizado que refleje tu marca.",
  },
  {
    icon: CheckCircle,
    step: "02",
    title: "Te mostramos el resultado",
    description: "Desarrollamos tu web completa y te la presentamos funcionando al 100%.",
  },
  {
    icon: ThumbsUp,
    step: "03",
    title: "Solo pagas si te gusta",
    description: "Si el resultado te convence, pagas. Si no, no hay ningún compromiso.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="relative py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            ¿Cómo <span className="text-gradient">Funciona</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sin riesgos. Sin pagos adelantados. Así de simple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50" />
              )}
              
              <div className="relative glass-strong rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-500">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                  Paso {step.step}
                </div>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-display mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-strong rounded-2xl p-8 border-primary/30">
          <p className="text-2xl font-display font-semibold mb-2">
            💡 <span className="text-gradient">Sin riesgo para ti</span>
          </p>
          <p className="text-muted-foreground">
            No cobramos nada hasta que veas tu web terminada y decidas si te gusta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
