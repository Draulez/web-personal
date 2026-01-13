"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale } from "./LocaleProvider";
import { VscTerminalCmd } from "react-icons/vsc";
import { MdArrowOutward, MdMenu, MdClose } from "react-icons/md";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLocaleChange = () => {
    const newLocale = locale === "es" ? "en" : "es";
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    window.location.href = newPath;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="w-full border-b border-gray-200/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <VscTerminalCmd className="text-xl text-(--color-accent)" />
            <Link href={`/${locale}`} className="font-semibold text-lg">
              DavidDev
            </Link>
          </div>

          <nav className="md:flex hidden gap-6 text-sm text-(--color-text-secondary)">
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
            
            {/* Botón hamburguesa para móvil */}
            <button
              className="md:hidden ml-4 text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </nav>
        </div>
      </header>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-200" 
          onClick={closeMenu}
        >
          <div 
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-(--color-bg) border-l border-gray-200/10 shadow-2xl animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del menú */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200/10">
              <div className="flex items-center gap-2">
                <VscTerminalCmd className="text-xl text-(--color-accent)" />
                <span className="font-semibold text-lg">Menu</span>
              </div>
              <button 
                onClick={closeMenu}
                className="text-2xl hover:text-(--color-accent) transition"
                aria-label="Close menu"
              >
                <MdClose />
              </button>
            </div>

            {/* Enlaces de navegación */}
            <nav className="flex flex-col p-6 gap-2">
              <Link 
                href={`/${locale}/projects`} 
                className="py-4 px-4 rounded-lg hover:bg-gray-200/5 hover:text-(--color-accent) transition-all duration-200 flex items-center justify-between group"
                onClick={closeMenu}
              >
                <span className="text-lg">{content.nav.projects}</span>
                <MdArrowOutward className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link 
                href={`/${locale}/experience`} 
                className="py-4 px-4 rounded-lg hover:bg-gray-200/5 hover:text-(--color-accent) transition-all duration-200 flex items-center justify-between group"
                onClick={closeMenu}
              >
                <span className="text-lg">{content.nav.experience}</span>
                <MdArrowOutward className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link 
                href={`/${locale}/contact`} 
                className="py-4 px-4 rounded-lg hover:bg-gray-200/5 hover:text-(--color-accent) transition-all duration-200 flex items-center justify-between group"
                onClick={closeMenu}
              >
                <span className="text-lg">{content.nav.contact}</span>
                <MdArrowOutward className="opacity-100 group-hover:scale-110 transition-transform" />
              </Link>
            </nav>

            {/* Footer del menú con info adicional */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200/10">
              <p className="text-sm text-(--color-text-secondary) text-center">
                DavidDev © 2025
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}