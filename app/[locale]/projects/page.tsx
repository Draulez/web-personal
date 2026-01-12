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
    image: 'https://github.com/Draulez/microservices',
    technologies: ['Java', 'SpringBoot', 'RestController', 'JPA', 'PostgreSQL', 'MariaDB', 'MongoDB', 'Maven', 'Docker', 'Kubernetes'],
    codeUrl: 'https://github.com/Draulez/microservices',
    iconType: 'spring' as const,
    iconColor: 'bg-green-500',
  },
  {
    id: '2',
    image: 'https://mindwaresolutions.com',
    technologies: ['Next.js', 'React', 'Tailwind', 'TypeScript', 'i18n'],
    liveUrl: 'https://mindwaresolutions.com',
    codeUrl: 'https://github.com/Draulez/web-personal',
    iconType: 'nextjs' as const,
    iconColor: 'bg-blue-500',
  },
  {
    id: '3',
    image: 'https://pizzeriadelangel.com',
    technologies: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://pizzeriadelangel.com',
    iconType: 'vercel' as const,
    iconColor: 'bg-black',
  },
  {
    id: '4',
    image: 'https://david-hernandez-portfolio.vercel.app/',
    technologies: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://david-hernandez-portfolio.vercel.app/',
    iconType: 'alexa' as const,
    iconColor: 'bg-blue-500',
  },
  {
    id: '5',
    image: 'https://skill-alexa.com',
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
