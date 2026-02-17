export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Diseño y desarrollo de páginas web profesionales desde 400€
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Webs modernas, optimizadas y listas para generar clientes.
          Ideal para autónomos y negocios locales.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contacto"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
