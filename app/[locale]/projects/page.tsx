import { Locale } from "@/lib/i18n/locale";
import { getProjectsContent } from "@/lib/i18n/getProjectsContent";
import ProjectsClient from "./ProjectsClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

// Datos técnicos de los proyectos (no traducibles)
const projectsData = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    technologies: ['Java', 'SpringBoot', 'RestController', 'JPA', 'PostgreSQL', 'MariaDB', 'MongoDB', 'Maven', 'Docker', 'Kubernetes'],
    codeUrl: 'https://github.com/Draulez/microservices',
    iconType: 'spring' as const,
    iconColor: 'bg-green-500',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'React', 'Tailwind', 'TypeScript', 'i18n'],
    liveUrl: 'https://mindwaresolutions.com',
    codeUrl: 'https://github.com/Draulez/web-personal',
    iconType: 'nextjs' as const,
    iconColor: 'bg-blue-500',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://pizzeriadelangel.com',
    iconType: 'vercel' as const,
    iconColor: 'bg-black',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://david-hernandez-portfolio.vercel.app/',
    iconType: 'alexa' as const,
    iconColor: 'bg-blue-500',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop',
    technologies: ['Node.js', 'AWS', 'Lambda', 'Alexa Skills Kit', 'DynamoDB', 'CloudWatch', 'API Gateway'],
    codeUrl: 'https://github.com/Draulez/CapacitaTe',
    iconType: 'alexa' as const,
    iconColor: 'bg-blue-500',
  },
];

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const content = await getProjectsContent(locale);

  // Combinar datos traducidos con datos técnicos
  const projects = projectsData.map((data, index) => ({
    ...data,
    ...content.projects[index],
  }));

  return <ProjectsClient content={content} projects={projects} />;
}
