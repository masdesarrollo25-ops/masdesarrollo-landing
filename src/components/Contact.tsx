"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contacto" className="relative py-32 px-6 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Contacto
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Hablemos de tu proyecto
          </h2>

          <p className="mt-6 text-zinc-400 leading-relaxed max-w-md">
            Cuéntame qué necesitas y diseñaremos una solución alineada con tus objetivos.
          </p>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-10 shadow-[0_0_80px_rgba(255,255,255,0.03)]">
          <form
            action="https://formsubmit.co/masdesarrollo25@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="text-sm text-zinc-400">Nombre</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none py-3 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none py-3 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Proyecto</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full mt-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none py-3 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-white text-black py-4 rounded-xl font-medium transition duration-300 hover:scale-105"
            >
              Enviar propuesta
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
