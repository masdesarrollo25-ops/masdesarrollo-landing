"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    }
  }

  return (
    <section id="contacto" className="relative py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="w-full bg-zinc-900 p-4 rounded-xl border border-zinc-800 focus:border-white outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full bg-zinc-900 p-4 rounded-xl border border-zinc-800 focus:border-white outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Cuéntame sobre tu proyecto"
            required
            rows={5}
            className="w-full bg-zinc-900 p-4 rounded-xl border border-zinc-800 focus:border-white outline-none transition resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-xl font-medium transition hover:scale-105"
          >
            {loading ? "Enviando..." : "Enviar propuesta"}
          </button>
        </form>
      </div>

      {/* Modal animado */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-xl z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-12 text-center max-w-md"
            >
              <h3 className="text-2xl font-semibold mb-4">
                🚀 Mensaje enviado
              </h3>
              <p className="text-zinc-400 mb-6">
                Te responderé en menos de 24 horas.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
