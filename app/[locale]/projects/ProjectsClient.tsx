"use client";
import { useState } from 'react';
import { Globe, Code, ExternalLink } from 'lucide-react';
import { SiSpring, SiNextdotjs, SiVercel } from "react-icons/si";
import { BsAlexa } from "react-icons/bs";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  iconType: 'spring' | 'nextjs' | 'vercel' | 'alexa';
  iconColor: string;
}

interface ProjectsClientProps {
  content: {
    categories: {
      all: string;
      java: string;
      react: string;
      nodejs: string;
    };
    buttons: {
      liveDemo: string;
      viewCode: string;
    };
    emptyMessage: string;
  };
  projects: Project[];
}

const iconMap = {
  spring: SiSpring,
  nextjs: SiNextdotjs,
  vercel: SiVercel,
  alexa: BsAlexa,
};


const ProjectCard = ({ project, content }: { project: Project; content: ProjectsClientProps['content'] }) => {
  const IconComponent = iconMap[project.iconType];

  return (
    <div className="bg-(--color-background-slideProject)/50 rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
      {/* Header con icono y título */}
      <div className="p-6 pb-4 flex items-start gap-4">
        <div className={`${project.iconColor} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
          <IconComponent className="w-7 h-7" />
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
            {content.buttons.liveDemo}
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
            {content.buttons.viewCode}
          </a>
        )}
      </div>
    </div>
  );
};

export default function ProjectsClient({ content, projects }: ProjectsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { key: 'All', label: content.categories.all },
    { key: 'Java', label: content.categories.java },
    { key: 'React', label: content.categories.react },
    { key: 'Node.js', label: content.categories.nodejs },
  ];

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
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-(--color-accent) text-gray-900 shadow-lg shadow-green-500/50'
                  : 'bg-(color-background-slideProject)/50 text-(--color-text-primary) hover:bg-gray-700/50 border border-gray-700/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} content={content} />
          ))}
        </div>

        {/* Mensaje si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">{content.emptyMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
