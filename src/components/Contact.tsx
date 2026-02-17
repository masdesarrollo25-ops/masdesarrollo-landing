export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-black to-zinc-900 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_70%)]"></div>

      <div className="relative max-w-xl w-full bg-zinc-950/60 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Solicita tu presupuesto
        </h2>

        <p className="text-zinc-400 text-center mt-4">
          Cuéntame tu idea y te responderé en menos de 24 horas.
        </p>

        <form
          action="https://formsubmit.co/masdesarrollo25@gmail.com"
          method="POST"
          className="mt-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-white outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Tu email"
            required
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-white outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Cuéntame qué necesitas..."
            required
            rows={5}
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-white outline-none transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-105 transition transform duration-200"
          >
            Enviar solicitud
          </button>
        </form>

        <div className="mt-8 text-center">
          <a
            href="https://wa.me/34666727945"
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-xl transition"
          >
            O escríbeme por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
