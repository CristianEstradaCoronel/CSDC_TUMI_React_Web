import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import Jugadores from "./pages/jugadores.jsx";
import Historia from "./pages/historia.jsx";
import Tienda from "./pages/tienda.jsx";
import Contacto from "./pages/contacto.jsx";

export default function Csdctumi() {
  const [section, setSection] = useState('inicio');

  const renderSection = () => {
    switch (section) {
      case 'inicio':
        return (
          <section
            className="h-[80vh] bg-cover bg-center flex items-end justify-center rounded-xl shadow-lg"
            style={{ backgroundImage: "url('/img/estadiotumi.png')" }}
          >
            <div className="bg-black bg-opacity-60 p-8 mb-16 rounded text-center">
              <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
                ¡Bienvenidos a CSDC TUMI!
              </h1>
              <p className="text-white mt-4 text-lg">
                Pasión, garra y orgullo dorado y negro ⚽
              </p>
            </div>
          </section>
        );
      case 'historia':
        return <Historia />;
        
      case 'jugadores':
        return <Jugadores />;
  
      case 'galeria':
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-yellow-500">Galería</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="bg-yellow-500/20 aspect-square rounded-2xl shadow-lg"></div>
              ))}
            </div>
          </div>
        );
      case 'tienda':
        return <Tienda />;

      case 'contacto':
        return <Contacto />;

      case 'intranet':
        return (
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-yellow-500">Intranet</h2>
            <p>Acceso exclusivo para jugadores y personal autorizado.</p>
            <Button className="bg-yellow-500 text-black font-bold hover:bg-yellow-400">Ingresar</Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-4">
      <nav className="flex flex-wrap justify-center gap-3 mb-8">
        {['inicio', 'historia', 'jugadores', 'galeria', 'tienda', 'contacto', 'intranet'].map((s) => (
          <motion.div
            key={s}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              onClick={() => setSection(s)}
              variant={section === s ? 'default' : 'outline'}
              className={`capitalize relative overflow-hidden transition-all duration-300 
                ${section === s 
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/30' 
                  : 'border-yellow-500 text-yellow-500 hover:bg-yellow-500/20'
                }`}
            >
              {s}
              {section === s && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 border-2 border-yellow-400 rounded-lg pointer-events-none"
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
            </Button>
          </motion.div>
        ))}
      </nav>

      <motion.div
      key={section}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="max-w-5xl mx-auto"
    >
      {renderSection()}
    </motion.div>

      <footer className="mt-16 text-center text-gray-500 text-sm border-t border-yellow-500/20 pt-4">
        © {new Date().getFullYear()} CSDC TUMI — Dorado y Negro. Todos los derechos reservados.
      </footer>
    </div>
  );
}