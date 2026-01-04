import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+34632814512"; // Replace with actual number
  const message = "¡Hola! Me interesa saber más sobre sus servicios de desarrollo web.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-200 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-card text-foreground text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Hablamos?
      </span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
