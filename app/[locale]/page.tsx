import { Locale } from "@/lib/i18n/locale";
import { getHomeContent } from "@/lib/i18n/getHomeContent";
import { asset } from "@/lib/assets";
import { MdEmail } from "react-icons/md";
import { ProjectCarousel } from "@/components/ProjectCarrousel";
import { FaGithub, FaArrowRight, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

type Props = {
  params: Promise<{ locale: Locale }>;
};

interface SlideProps {
  image: string;
  title: string;
  tools: string[];
}

const slideProps: SlideProps[] = [
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    title: "Microservicios",
    tools: ["Spring Boot", "Java 21"]
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    title: "Web Mindware Solutions",
    tools: ["Next.js", "React", "Tailwind"]
  },
  {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    title: "Web Pizzería Simple",
    tools: ["Next.js", "React", "Vercel"]
  },
  {
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
    title: "Skill Alexa",
    tools: ["Node.js", "AWS", "Lambda"]
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    title: "Web Personal Portfolio",
    tools: ["Next.js", "React", "Tailwind"]
  },
];

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const content = await getHomeContent(locale);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-4 text-center ali">
      {/* Hero */}
      <img
        src={asset("/a.jpg")}
        alt="Ilustración desarrollador"
        className=" mx-auto mb-8
                    w-36 h-36 md:w-40 md:h-40
                    rounded-full
                    border border-green-500/20
                    bg-(--color-background)
                    shadow-[0_0_30px_rgba(34,197,94,0.35)]
                    dark:shadow-[0_0_40px_rgba(34,197,94,0.55)] "
      />

      <div>
        <h1 className="flex gap-3 mx-auto text-center justify-center text-4xl text-(--color-text-primary) font-bold mb-6 ">
          {content.hero.title}
          <p className="relative text-4xl font-bold">
            {/* Texto principal con gradiente animado */}
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-700 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              David
            </span>

            {/* Efecto de brillo que se mueve */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]" aria-hidden="true">
              David
            </span>
          </p>
        </h1>

        <p className="text-lg text-(--color-text-secondary) max-w-2xl text-center mx-auto mb-6">
          {content.hero.subtitle}
        </p>
      </div>

      <div className="flex items-center gap-5 justify-center w-full h-12 bg-accent">
        <Link href="/cv/CV - David Broseta.pdf" target="_blank" rel="noopener noreferrer">
          <button className=" w-full px-9 mr-3 md:w-64 md:px-10 py-2 bg-(--color-accent-hover) text-black rounded-4xl hover:bg-gray-200 transition cursor-pointer">
            {content.hero.downloadCV}
          </button>
        </Link>
        <Link href="mailto:dbrobro@hotmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail className="inline-block mb-2 p-3 bg-gray-500/25 rounded-4xl transition-transform duration-400 hover:scale-110 hover:cursor-pointer text-5xl" />
        </Link>
      </div>

      <div className="flex gap-8 justify-center">
        <Link href="https://github.com/draulez" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center">
            <FaGithub className="inline-block mb-2 p-3 bg-gray-500/25 rounded-4xl transition-transform duration-400 hover:scale-110 hover:cursor-pointer text-5xl" />
            <p className="text-xs text-(--color-text-secondary)"> GitHub</p>
          </div>
        </Link>

        <Link href="https://www.linkedin.com/in/david-broseta/" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center">
            <FaLinkedin className="inline-block mb-2 p-3 bg-gray-500/25 rounded-4xl transition-transform duration-400 hover:scale-110 hover:cursor-pointer text-5xl" />
            <p className="text-xs text-(--color-text-secondary)"> LinkedIn</p>
          </div>
        </Link>

        <Link href="https://wa.me/34601014162" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center" >
            <FaWhatsapp className="inline-block mb-2 p-3 bg-gray-500/25 rounded-4xl transition-transform duration-400 hover:scale-110 hover:cursor-pointer text-5xl" />
            <p className="text-xs text-(--color-text-secondary)"> Whatsapp </p>
          </div>
        </Link>
      </div>


      {/* Projects Layout */}
      <div className="w-full py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="block gap-60 align-middle">
            <h2 className="text-3xl text-left font-bold ">{content.hero.projectTitle}</h2>
            <Link href="/projects">
              <h3 className="flex gap-1 justify-end mb-4 text-right text-(--color-accent-hover) font-bold">{content.hero.projectAll} <FaArrowRight className="mt-2 text-xs text-(--color-accent-hover)" /></h3>
            </Link>
          </div>
          <ProjectCarousel slides={slideProps} />
        </div>
      </div>
    </section>
  );
}
