"use client";

import { useEffect, useState } from "react";

export default function PremiumBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />

      {/* Blob Azul */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[120px] rounded-full animate-float"></div>

      {/* Blob Morado */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[120px] rounded-full animate-float-delay"></div>
    </>
  );
}
