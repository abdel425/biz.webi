import { useState } from "react";
import { X } from "lucide-react";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioFitness from "@/assets/restaurante web.jpg";
import portfolioLegal from "@/assets/menu restaura34.jpg";
import portfolioTech from "@/assets/portfolio-tech.jpg";
import portfolioBeauty from "@/assets/Diseño web la paella.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

const projects = [
  {
    image: portfolioRestaurant,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    image: portfolioFitness,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    image: portfolioLegal,
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    image: portfolioTech,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    image: portfolioBeauty,
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    image: portfolioEcommerce,
    color: "from-teal-500/20 to-cyan-500/20",
  },
];

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="relative py-24 px-6">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-muted/50 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Trabajos <span className="text-gradient">Anteriores</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ejemplos de proyectos que hemos desarrollado para diferentes tipos de negocios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Proyecto ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-40`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary-foreground font-medium">Ver proyecto</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-2 backdrop-blur-sm hover:bg-background transition-colors">
            <X className="h-5 w-5" />
            <span className="sr-only">Cerrar</span>
          </DialogClose>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Proyecto ampliado"
              className="w-full h-auto rounded-lg max-h-[85vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
