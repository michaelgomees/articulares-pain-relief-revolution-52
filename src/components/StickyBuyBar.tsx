import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

export const StickyBuyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible || isMinimized) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-2xl border-t border-white/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="font-bold text-sm md:text-base">
              🔥 ARTICULARES - Acabar com dores em 14 dias!
            </p>
            <p className="text-xs md:text-sm opacity-90">
              Oferta limitada - Desconto de até 50%
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              onClick={scrollToOffer}
              className="bg-white text-primary hover:bg-white/90 font-bold px-4 py-2 md:px-6 md:py-3 text-sm md:text-base"
            >
              COMPRAR AGORA
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            
            <button
              onClick={() => setIsMinimized(true)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Fechar barra"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};