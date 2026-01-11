"use client";
import Link from "next/link";
import { useLocale } from "./LocaleProvider";
import { VscTerminalCmd } from "react-icons/vsc";
import { MdArrowOutward } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

interface Params {
  content: any;
}

export default function Header({ content }: Params) {
  const locale = useLocale();

  return (
    <header className="w-full border-b border-gray-200/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <VscTerminalCmd className="text-xl text-(--color-accent) " />
          <Link href={`/${locale}`} className="font-semibold text-lg">
            DavidDev
          </Link>
        </div>

        <nav className="flex gap-6 text-sm text-(--color-text-secondary)">
          <Link href="/projects" className="transition-discrete duration-200 hover:font-semibold hover:scale-110">
            Proyectos
          </Link>
          <Link href="/experience" className="transition-discrete duration-200 hover:font-semibold hover:scale-110">
            Experience
          </Link>
          <Link href="/contact" className="transition-discrete duration-200 hover:font-semibold hover:scale-110">
            Contact
            <MdArrowOutward className="inline-block ml-1 mb-1" />
          </Link>
        </nav>

        <nav className="flex items-center">
          <ThemeToggle />
          <button
            className="ml-4 px-3 py-1 border rounded hover:bg-(--color-accent) hover:text-white transition cursor-pointer"
            onClick={() => {
              const newLocale = locale === "es" ? "en" : "es";
              window.location.href = `/${newLocale}`;
            }}
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
        </nav>
      </div>
    </header>
  );
}
