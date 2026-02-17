"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-10 right-10 z-50 p-4 rounded-full bg-white text-black transition-all duration-500 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      ↑
    </button>
  );
}
