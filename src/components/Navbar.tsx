"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'

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
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="MASDESARROLLO Logo"
            width={100}
            height={100}
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
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
