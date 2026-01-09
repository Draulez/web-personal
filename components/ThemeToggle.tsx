"use client";

import { useEffect, useState } from "react";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const dark = storedTheme === "dark" || (!storedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-8 rounded-full bg-gray-200 animate-pulse" />
    );
  }

  const toggleTheme = () => {
    const newTheme = !isDark;
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    setIsDark(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full transition-all duration-300 ease-in-out
                 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-indigo-900 dark:to-purple-900
                 hover:shadow-lg transform hover:scale-105"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      role="switch"
      aria-checked={isDark}
    >
      {/* Track del switch con efecto de cielo/noche */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Estrellas para modo oscuro */}
          <div className="absolute w-1 h-1 bg-white rounded-full top-2 left-2 animate-pulse" />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-3 right-3 animate-pulse delay-100" />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full bottom-2 left-4 animate-pulse delay-200" />
        </div>
      </div>

      {/* Toggle deslizable */}
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-all duration-300 ease-in-out
                    transform ${isDark ? "translate-x-8" : "translate-x-0"}
                    bg-white dark:bg-gray-800
                    shadow-lg flex items-center justify-center`}
      >
        {/* Iconos dentro del círculo */}
        <div className="relative w-full h-full flex items-center justify-center">
          <CiSun
            className={`absolute text-yellow-500 text-lg transition-all duration-300 ${
              isDark
                ? "opacity-0 rotate-180 scale-0"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <FaMoon
            className={`absolute text-indigo-300 text-sm transition-all duration-300 ${
              isDark
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-180 scale-0"
            }`}
          />
        </div>
      </div>
    </button>
  );
}