"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="servicios" className="py-32 px-6 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
          Servicios
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold">
          Soluciones digitales estratégicas
        </h2>

        <div className="mt-20 grid md:grid-cols-3 gap-12">
          {[
            "Landing pages de alta conversión",
            "Web corporativa profesional",
            "Optimización SEO básica incluida",
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-10 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-white transition duration-500"
            >
              <h3 className="text-xl font-medium mb-4">{service}</h3>
              <p className="text-zinc-400">
                Diseño moderno, estructura estratégica y enfoque en resultados.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
