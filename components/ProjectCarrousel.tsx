"use client";
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Interfaz para las props del slide
interface SlideProps {
  image: string;
  title: string;
  tools: string[];
}

// Interfaz para las props del carrusel
interface CarouselProps {
  slides: SlideProps[];
  className?: string;
}

// Componente de slide individual
const ProjectSlide = ({ image, title, tools }: SlideProps) => (
  <div className="min-w-80 h-70 mt-34 bg-white/10 rounded-lg shadow-md p-4 mx-2 flex flex-col">
    <img src={image} alt={title} className="w-full h-36 object-cover rounded-lg mb-2" />
    <h3 className="font-bold text-base my-3 text-left text-(--color-text-primary)">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {tools.map((tool, i) => (
        <span key={i} className="text-xs bg-white/20 border-2 px-2 py-1 rounded">{tool}</span>
      ))}
    </div>
  </div>
);

// Componente del carrusel que puedes usar con tus propios datos
export const ProjectCarousel = ({ slides, className = '' }: CarouselProps) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Duplicamos los slides para crear el efecto infinito
  const duplicatedSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    const animate = (): void => {
      setScrollPosition(prev => {
        const newPosition = prev + speed;
        const slideWidth = 336; // 320px + 16px margin
        const totalWidth = slides.length * slideWidth;
        
        if (newPosition >= totalWidth) {
          return 0;
        }
        return newPosition;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, slides.length]);

  const handleLeftClick = (): void => {
    // Ir al slide anterior
    const slideWidth = 336;
    const currentSlide = Math.floor(scrollPosition / slideWidth);
    const totalSlides = slides.length;
    
    // Calcular el slide anterior (con wrap around)
    const previousSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    setScrollPosition(previousSlide * slideWidth);
  };

  const handleRightClick = (): void => {
    setSpeed(prev => Math.min(prev + 2, 5));
    setTimeout(() => setSpeed(1), 1000);
  };

  return (
    <div className={`w-full h-32 bg-accent relative ${className}`}>
      {/* Botón izquierdo */}
      {/* <button
        onClick={handleLeftClick}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Desplazar izquierda"
      >
        <ChevronLeft className="w-5 h-5" />
      </button> */}

      {/* Contenedor del carrusel */}
      <div className=" h-full" ref={containerRef}>
        <div 
          className="flex h-full items-center"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: 'transform 0.05s linear'
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <ProjectSlide
              key={index}
              image={slide.image}
              title={slide.title}
              tools={slide.tools}
            />
          ))}
        </div>
      </div>

      {/* Botón derecho */}
      {/* <button
        onClick={handleRightClick}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Desplazar derecha"
      >
        <ChevronRight className="w-5 h-5" />
      </button> */}
    </div>
  );
};