"use client";
import { useState } from 'react';
import { Globe, Code, ExternalLink, Github } from 'lucide-react';

// Tipos
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  icon: string;
  iconColor: string;
}

// Datos de ejemplo
const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Dash',
    category: 'Web App',
    description: 'Un panel de control complejo con análisis en tiempo real para seguimiento de ventas y gestión de inventario. Incluye modo oscuro y widgets personalizables.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    technologies: ['Java', 'Firebase', 'Tailwind'],
    liveUrl: 'https://example.com/demo',
    codeUrl: 'https://github.com/example',
    icon: '📊',
    iconColor: 'bg-purple-500'
  },
  {
    id: '2',
    title: 'Task Manager API',
    category: 'Backend',
    description: 'Servicio backend robusto para manejo de tareas asíncronas. Arquitectura escalable diseñada para manejar alta concurrencia de usuarios.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    codeUrl: 'https://github.com/example',
    icon: '⚙️',
    iconColor: 'bg-orange-500'
  },
  {
    id: '3',
    title: 'Weather iOS',
    category: 'Mobile',
    description: 'Aplicación nativa de clima con animaciones fluidas y notificaciones push. Enfocada en la experiencia de usuario y diseño minimalista.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=400&fit=crop',
    technologies: ['Swift', 'SwiftUI'],
    liveUrl: 'https://apps.apple.com/example',
    icon: '☁️',
    iconColor: 'bg-blue-500'
  },
  {
    id: '4',
    title: 'Social Network',
    category: 'Web App',
    description: 'Red social completa con sistema de mensajería en tiempo real, publicaciones multimedia y sistema de seguidores.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com/social',
    codeUrl: 'https://github.com/example',
    icon: '💬',
    iconColor: 'bg-pink-500'
  },
  {
    id: '5',
    title: 'Fitness Tracker',
    category: 'Mobile',
    description: 'App móvil para seguimiento de entrenamientos con gráficas de progreso y planes personalizados.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop',
    technologies: ['React Native', 'Firebase'],
    liveUrl: 'https://play.google.com/example',
    icon: '💪',
    iconColor: 'bg-green-500'
  },
  {
    id: '6',
    title: 'Payment Gateway',
    category: 'Backend',
    description: 'Sistema de procesamiento de pagos seguro con integración de múltiples proveedores y prevención de fraude.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
    technologies: ['Node.js', 'Stripe', 'Redis'],
    codeUrl: 'https://github.com/example',
    icon: '💳',
    iconColor: 'bg-emerald-500'
  }
];

const categories = ['All', 'Java', 'React'];

// Componente de proyecto individual
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-(--color-background-slideProject)/50 rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
      {/* Header con icono y título */}
      <div className="p-6 pb-4 flex items-start gap-4">
        <div className={`${project.iconColor} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
          {project.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-(--color-text-primary) mb-1">{project.title}</h3>
          <p className="text-sm text-green-400 uppercase tracking-wide">{project.category}</p>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors p-2">
          <ExternalLink className="w-5 h-5" />
        </button>
      </div>

      {/* Imagen del proyecto */}
      <div className="px-6 pb-4">
        <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-video">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="px-6 pb-4">
        <p className="text-(--color-text-primary) text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tecnologías */}
      <div className="px-6 pb-6 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className="text-xs bg-white/20 border-2 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Botones de acción */}
      <div className="px-6 pb-6 flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-(--color-accent) hover:bg-(--color-accent-hover) text-gray-900 font-semibold py-3 rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <Globe className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.liveUrl ? 'flex-1' : 'flex-1'} bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-2xl transition-colors flex items-center justify-center gap-2`}
          >
            <Code className="w-4 h-4" />
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

// Componente principal
export default function PortfolioProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-gradient-to-br from-(--color-background-start) via-(--color-background-middle)/20 to-(--color-background-start)">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-(--color-accent) text-gray-900 shadow-lg shadow-green-500/50'
                  : 'bg-(color-background-slideProject)/50 text-(--color-text-primary) hover:bg-gray-700/50 border border-gray-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mensaje si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No hay proyectos en esta categoría</p>
          </div>
        )}
      </div>
    </div>
  );
}