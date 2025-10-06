import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tienda() {
  const productos = [
    { nombre: "POLO", img: "/img/tienda/polo.jpg" },
    { nombre: "GORRA", img: "/img/tienda/gorra.jpg" },
    { nombre: "TOMATODO", img: "/img/tienda/tomatodo.jpg" },
    { nombre: "CAMISETA", img: "/img/tienda/camiseta.jpg" },
    { nombre: "POLERA", img: "/img/tienda/polera.jpg" },
  ];

  const [selected, setSelected] = useState(productos[0]);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">
        Tienda Oficial 🛍️
      </h2>

      {/* Imagen principal */}
      <div className="relative w-full max-w-2xl aspect-square bg-black/50 rounded-xl overflow-hidden shadow-lg border border-yellow-500/30">
        <AnimatePresence mode="wait">
          <motion.img
            key={selected.img}
            src={selected.img}
            alt={selected.nombre}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="object-cover w-full h-full"
          />
        </AnimatePresence>

        <motion.div
          className="absolute bottom-4 right-4 bg-black/60 px-4 py-2 rounded-lg text-yellow-400 text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {selected.nombre}
        </motion.div>
      </div>

      {/* Miniaturas */}
      <div className="flex overflow-x-auto gap-4 p-2 w-full max-w-3xl justify-center">
        {productos.map((p) => (
          <motion.div
            key={p.nombre}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(p)}
            className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              selected.nombre === p.nombre
                ? "border-yellow-500 shadow-lg shadow-yellow-500/20"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={p.img}
              alt={p.nombre}
              className="object-cover w-28 h-28 rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
