import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Star, Quote } from "lucide-react";
import ReactPlayer from 'react-player';

const testimonialVideos = [
  {
    id: 1,
    name: "Carlos Eduardo",
    age: 45,
    city: "Rio de Janeiro/RJ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    quote: "Depois de 20 anos com dores na coluna, finalmente encontrei a solução!",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Paula Santos",
    age: 52,
    city: "Belo Horizonte/MG",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    quote: "Voltei a brincar com meus netos sem sentir dor nos joelhos!",
    rating: 5
  },
  {
    id: 3,
    name: "Roberto Silva",
    age: 58,
    city: "São Paulo/SP",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    quote: "Parei de tomar 6 medicamentos diferentes e agora vivo sem dor!",
    rating: 5
  }
];

export const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialVideos.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length);
  };

  const current = testimonialVideos[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
            VEJA OS <span className="text-gradient">DEPOIMENTOS REAIS</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Pessoas que transformaram suas vidas com o ARTICULARES
          </p>

          {/* Featured Video */}
          <div className="mb-12">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  {selectedVideo ? (
                    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                      <iframe
                        src={`https://www.youtube.com/embed/${selectedVideo.split('v=')[1]?.split('&')[0]}?autoplay=1&controls=1`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div 
                      className="relative aspect-video rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
                      onClick={() => setSelectedVideo(current.videoUrl)}
                    >
                      <img 
                        src={current.thumbnail} 
                        alt={`Depoimento de ${current.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-6 w-6 text-accent fill-current" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/30" />
                    <blockquote className="text-xl italic pl-6">
                      "{current.quote}"
                    </blockquote>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">
                      {current.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {current.age} anos, {current.city}
                    </p>
                  </div>

                  <Button 
                    onClick={() => setSelectedVideo(current.videoUrl)}
                    className="btn-cta"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    ASSISTIR DEPOIMENTO
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button 
              onClick={prevTestimonial}
              variant="outline"
              className="px-6"
            >
              ← Anterior
            </Button>
            
            <div className="flex gap-2">
              {testimonialVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              onClick={nextTestimonial}
              variant="outline"
              className="px-6"
            >
              Próximo →
            </Button>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg mb-6 text-muted-foreground">
              Junte-se a mais de <strong className="text-primary">50.000 pessoas</strong> que já transformaram suas vidas!
            </p>
            <Button 
              onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-cta-large"
            >
              EU QUERO ELIMINAR MINHAS DORES TAMBÉM!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};