 'use client'; // Necesario en Next.js 13+ para usar estado y eventos

import { useState } from "react";

export default function Home() {
  const [success, setSuccess] = useState(false); // Controla mensaje de éxito

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    // ---------------------------
    // Logs de depuración
    console.log("Datos del formulario:", { name, email, message });
    // ---------------------------

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      // ---------------------------
      console.log("Respuesta de la API:", res.status);
      // ---------------------------

      if (res.ok) {
        setSuccess(true);
        e.target.reset();
      } else {
        console.error("Error enviando correo:", await res.text());
      }
    } catch (err) {
      console.error("Error en fetch:", err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-b from-blue-500 to-blue-300 text-white">
        <h1 className="text-5xl font-bold mb-4">Novastdio</h1>
        <p className="text-xl mb-6 max-w-xl">
          Somos una agencia creativa que transforma ideas en experiencias digitales.
        </p>
        <a
          href="#contacto"
          className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100"
        >
          Contáctanos
        </a>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          <div className="p-6 shadow-lg rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">Diseño Web</h3>
            <p>Creamos sitios modernos y adaptados a tus necesidades.</p>
          </div>
          <div className="p-6 shadow-lg rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">Marketing Digital</h3>
            <p>Impulsamos tu marca con estrategias creativas.</p>
          </div>
          <div className="p-6 shadow-lg rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">Automatización e IA</h3>
            <p>Optimizamos tus procesos usando inteligencia artificial y n8n.</p>
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section id="portafolio" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Nuestro Portafolio</h2>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          <div className="p-6 shadow-lg rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">Proyecto 1</h3>
            <p>Descripción breve del proyecto y resultados obtenidos.</p>
          </div>
          <div className="p-6 shadow-lg rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">Proyecto 2</h3>
            <p>Descripción breve del proyecto y resultados obtenidos.</p>
          </div>
          <div className="p-6 shadow-lg rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">Proyecto 3</h3>
            <p>Descripción breve del proyecto y resultados obtenidos.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="p-3 rounded-xl border border-gray-300"
            required
          />
          <input
            type="email"
            placeholder="Tu email"
            className="p-3 rounded-xl border border-gray-300"
            required
          />
          <textarea
            placeholder="Tu mensaje"
            className="p-3 rounded-xl border border-gray-300"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-600 font-semibold">
            ¡Mensaje enviado correctamente! ✅
          </p>
        )}
      </section>
    </main>
  );
}
