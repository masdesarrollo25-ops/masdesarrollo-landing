"use client";

import { motion } from "framer-motion";
import PremiumBackground from "./PremiumBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black text-white">

      <PremiumBackground />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-5xl text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6"
        >
          MAS Desarrollo · ESTUDIO DIGITAL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-semibold leading-tight"
        >
          Diseñamos experiencias digitales
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
            que convierten en clientes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Desarrollo web estratégico para negocios que quieren posicionarse,
          destacar y vender más.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white text-black font-medium transition duration-300 hover:scale-105"
          >
            Solicitar presupuesto
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
