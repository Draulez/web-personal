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
  <div className="flex-shrink-0 w-72 sm:w-80 h-64 bg-white/10 rounded-lg shadow-md p-4 mx-2 flex flex-col">
    <img src={image} alt={title} className="w-full h-36 object-cover rounded-lg mb-2" />
    <h3 className="font-bold text-base my-3 text-left">{title}</h3>
    <div className="flex flex-wrap gap-2">
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
        // Ancho responsivo: 288px (móvil) o 320px (desktop) + 16px margin
        const slideWidth = window.innerWidth < 640 ? 304 : 336;
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
    const slideWidth = window.innerWidth < 640 ? 304 : 336;
    const currentSlide = Math.floor(scrollPosition / slideWidth);
    const totalSlides = slides.length;
    
    const previousSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    setScrollPosition(previousSlide * slideWidth);
  };

  const handleRightClick = (): void => {
    setSpeed(prev => Math.min(prev + 2, 5));
    setTimeout(() => setSpeed(1), 1000);
  };

  return (
    <div className={`w-full relative ${className}`}>
      {/* Contenedor del carrusel con overflow-hidden */}
      <div className="overflow-hidden h-72" ref={containerRef}>
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
    </div>
  );
};

// Ejemplo de uso con datos de muestra
export default function App() {
  const projectSlides = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      title: "Proyecto Web Moderno",
      tools: ["React", "TypeScript", "Tailwind"]
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "Dashboard Analytics",
      tools: ["Next.js", "Chart.js", "API"]
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      title: "App Mobile",
      tools: ["React Native", "Firebase"]
    },
    {
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop",
      title: "E-commerce Platform",
      tools: ["Vue", "Node.js", "MongoDB"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 mt-8">
          Mis Proyectos
        </h1>
        <ProjectCarousel slides={projectSlides} />
      </div>
    </div>
  );
}