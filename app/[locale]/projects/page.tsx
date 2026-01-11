"use client";
import { useState } from 'react';
import { Globe, Code, ExternalLink } from 'lucide-react';
import { SiSpring, SiNextdotjs, SiVercel, SiReact } from "react-icons/si";
import { BsAlexa } from "react-icons/bs";

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
  icon: React.ReactNode;
  iconColor: string;
}

// Datos de ejemplo
const projects: Project[] = [
  {
    id: '1',
    title: 'Microservicios',
    category: 'Backend Arquitecture',
    description: 'Microservicios para la gestión de usuarios, pedidos y productos. Autenticación y autorización.',
    image: 'https://github.com/Draulez/microservices',
    technologies: ['Java', 'SpringBoot', 'RestController', 'JPA', 'PostgreSQL', 'MariaDB', 'MongoDB', 'Maven', 'Docker', 'Kubernetes'],
    codeUrl: 'https://github.com/Draulez/microservices',
    icon: <SiSpring className="w-7 h-7" />,
    iconColor: 'bg-green-500'
  },
  {
    id: '2',
    title: 'Web Mindware Solutions',
    category: 'Frontend Developer',
    description: 'Desarrollo de la web corporativa de Mindware Solutions',
    image: 'https://mindwaresolutions.com',
    technologies: ['Next.js', 'React', 'Tailwind', 'TypeScript', 'i18n'],
    liveUrl: 'https://mindwaresolutions.com',
    icon: <SiNextdotjs className="w-7 h-7" />,
    iconColor: 'bg-blue-500'
  },
  {
    id: '3',
    title: 'Web Pizzería Simple',
    category: 'Frontend Developer',
    description: 'Desarrollo de la web de una pizzería simple',
    image: 'https://pizzeriadelangel.com',
    technologies: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://pizzeriadelangel.com',
    icon: <SiVercel className="w-7 h-7" />,
    iconColor: 'bg-black'
  },
  {
    id: '4',
    title: 'Web Personal',
    category: 'Frontend Developer',
    description: 'Desarrollo de la web personal de un desarrollador de software',
    image: 'https://david-hernandez-portfolio.vercel.app/',
    technologies: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://david-hernandez-portfolio.vercel.app/',
    icon: <BsAlexa className="w-7 h-7" />,
    iconColor: 'bg-blue-500'
  },
  {
    id: '5',
    title: 'Skill Alexa',
    category: 'Backend Developer',
    description: 'Desarrollo de la skill Alexa como trábajo de final de carrera',
    image: 'https://skill-alexa.com',
    technologies: ['Node.js', 'AWS', 'Lambda', 'Alexa Skills Kit', 'DynamoDB', 'CloudWatch', 'API Gateway'],
    codeUrl: 'https://github.com/Draulez/CapacitaTe',
    icon: <BsAlexa className="w-7 h-7" />,
    iconColor: 'bg-blue-500'
  },

];

const categories = ['All', 'Java', 'React', 'Node.js'];

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
          <p className="text-sm text-green-400 text-bold uppercase tracking-wide">{project.category}</p>
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