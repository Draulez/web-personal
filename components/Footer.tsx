import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="grid grid-cols-3 w-full border-t border-gray-200/15 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} David · Backend Software Developer
      </div>
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
        Construyamos lo que tengas en mente
      </div>
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 text-right justify-end flex gap-2 ">
        <FaGithub className="inline-block mb-2 p-3 bg-gray-500/25 rounded-4xl transition-transform duration-400 hover:scale-110 hover:cursor-pointer text-5xl" />
        <FaLinkedin className="inline-block mb-2 p-3 bg-gray-500/25 rounded-4xl transition-transform duration-400 hover:scale-110 hover:cursor-pointer text-5xl " />
      </div>
    </footer>
  );
}
