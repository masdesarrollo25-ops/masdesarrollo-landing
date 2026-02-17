"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        <span className="text-sm tracking-[0.3em] text-zinc-400">
          MASDESARROLLO
        </span>

        <nav className="hidden md:flex gap-10 text-sm text-zinc-400">
          <a href="#servicios" className="hover:text-white transition">
            Servicios
          </a>
          <a href="#contacto" className="hover:text-white transition">
            Contacto
          </a>
        </nav>

      </div>
    </header>
  );
}
