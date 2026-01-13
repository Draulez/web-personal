import { FaGithub, FaLinkedin } from "react-icons/fa";

interface FooterProps {
  content: {
    copyright: string;
    tagline: string;
  };
}

export default function Footer({ content }: FooterProps) {
  const year = new Date().getFullYear();
  const copyright = content.copyright.replace("{year}", year.toString());

  return (
    <footer className="grid-cols-1 md:grid-cols-3 w-full border-t border-gray-200/15 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
        {copyright}
      </div>
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
        {content.tagline}
      </div>
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 text-right justify-center md:justify-end flex gap-2 ">
        <FaGithub className="inline-block mb-2 p-3 bg-gray-500/25 rounded-4xl transition-transform duration-400 hover:scale-110 hover:cursor-pointer text-5xl" />
        <FaLinkedin className="inline-block mb-2 p-3 bg-gray-500/25 rounded-4xl transition-transform duration-400 hover:scale-110 hover:cursor-pointer text-5xl " />
      </div>
    </footer>
  );
}
