import React from "react";
import "./jugadores.css"; // 👈 Importa el CSS del efecto

const jugadores = [
  {
    nombre: "Carlos Mendoza",
    posicion: "Delantero",
    edad: 24,
    nacimiento: "12/05/2001",
    talla: "1.80 m",
    peso: "75 kg",
    foto: "/img/jugadores/1.jpg",
  },
  {
    nombre: "Luis Ramírez",
    posicion: "Arquero",
    edad: 28,
    nacimiento: "03/11/1996",
    talla: "1.85 m",
    peso: "80 kg",
    foto: "/img/jugadores/2.jpg",
  },
  {
    nombre: "José Gutiérrez",
    posicion: "Defensa Central",
    edad: 26,
    nacimiento: "21/07/1999",
    talla: "1.83 m",
    peso: "78 kg",
    foto: "/img/jugadores/3.jpg",
  },
  // Puedes seguir agregando más jugadores...
];

export default function Jugadores() {
  return (
    <section className="min-h-screen bg-gray-900 py-16 px-6">
      <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">
        Plantel Oficial
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {jugadores.map((jugador, index) => (
          <div key={index} className="card-fifa relative rounded-2xl overflow-hidden">
            <img
              src={jugador.foto}
              alt={jugador.nombre}
              className="w-full h-64 object-cover"
            />

            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
              <h3 className="font-bold text-lg">{jugador.nombre}</h3>
              <p className="text-sm">{jugador.posicion}</p>
            </div>

            <div className="bg-black text-white bg-opacity-80 p-4">
              <p><span className="text-yellow-400 font-semibold">Edad:</span> {jugador.edad} años</p>
              <p><span className="text-yellow-400 font-semibold">Nac.:</span> {jugador.nacimiento}</p>
              <p><span className="text-yellow-400 font-semibold">Talla:</span> {jugador.talla}</p>
              <p><span className="text-yellow-400 font-semibold">Peso:</span> {jugador.peso}</p>
            </div>

            {/* Brillo dorado animado */}
            <div className="shine"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
