"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "./LocaleProvider";
import { VscTerminalCmd } from "react-icons/vsc";
import { MdArrowOutward } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  content: {
    nav: {
      projects: string;
      experience: string;
      contact: string;
    };
  };
}

export default function Header({ content }: HeaderProps) {
  const locale = useLocale();
  const pathname = usePathname();

  const handleLocaleChange = () => {
    const newLocale = locale === "es" ? "en" : "es";
    // Obtener la ruta actual sin el locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    // Construir la nueva ruta con el nuevo locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    window.location.href = newPath;
  };

  return (
    <header className="w-full border-b border-gray-200/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <VscTerminalCmd className="text-xl text-(--color-accent) " />
          <Link href={`/${locale}`} className="font-semibold text-lg">
            DavidDev
          </Link>
        </div>

        <nav className="flex hidden gap-6 text-sm text-(--color-text-secondary)">
          <Link href={`/${locale}/projects`} className="transition-discrete duration-200 hover:font-semibold hover:scale-110">
            {content.nav.projects}
          </Link>
          <Link href={`/${locale}/experience`} className="transition-discrete duration-200 hover:font-semibold hover:scale-110">
            {content.nav.experience}
          </Link>
          <Link href={`/${locale}/contact`} className="transition-discrete duration-200 hover:font-semibold hover:scale-110">
            {content.nav.contact}
            <MdArrowOutward className="inline-block ml-1 mb-1" />
          </Link>
        </nav>

        <nav className="flex items-center">
          <ThemeToggle />
          <button
            className="ml-4 px-3 py-1 border rounded hover:bg-(--color-accent) hover:text-white transition cursor-pointer"
            onClick={handleLocaleChange}
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
        </nav>
      </div>
    </header>
  );
}
