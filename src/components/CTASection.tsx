import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-strong rounded-3xl p-12 md:p-16 text-center border-primary/30">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            ¿Listo para tener la web que tu negocio <span className="text-gradient">merece</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Cuéntanos tu proyecto y te mostraremos lo que podemos crear para ti. 
            Recuerda: solo pagas si te gusta el resultado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
              <MessageCircle className="w-5 h-5" />
              Solicitar Presupuesto Gratis
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Más Proyectos
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            ✨ Respuesta en menos de 24 horas · Sin compromisos
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
