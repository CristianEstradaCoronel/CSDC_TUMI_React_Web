import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Jugadores from "./pages/jugadores.jsx";

export default function Csdctumi() {
  const [section, setSection] = useState('inicio');

  const renderSection = () => {
    switch (section) {
      case 'inicio':
        return (
          <section 
            className="h-[80vh] bg-cover bg-center flex items-center justify-center rounded-xl shadow-lg"
            style={{ backgroundImage: "url('/img/estadio.jpg')" }}
          >
            <div className="bg-black bg-opacity-60 p-8 rounded text-center">
              <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg">¡Bienvenidos a CSDC TUMI!</h1>
              <p className="text-white mt-4 text-lg">
                Pasión, garra y orgullo dorado y negro ⚽
              </p>
            </div>
          </section>
        );
      case 'historia':
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-yellow-500">Nuestra Historia</h2>
            <p>
              Fundado en el año 1985, el CSDC TUMI nació con el propósito de fomentar el deporte y la unión entre amigos. Desde sus inicios, el club ha sido símbolo de garra, respeto y pasión por el fútbol.
            </p>
            <p>
              Los colores dorado y negro representan la fuerza, la elegancia y el espíritu combativo de nuestro equipo.
            </p>
          </div>
        );
      case 'jugadores':
        return <Jugadores />;
        // return (
        //   <div className="space-y-4">
        //     <h2 className="text-3xl font-bold text-yellow-500">Plantel Oficial</h2>
        //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        //       {["Carlos Ramírez", "Luis Paredes", "Miguel Torres", "Andrés Gómez", "Rafael León", "Víctor Salas"].map((jugador) => (
        //         <Card key={jugador} className="bg-black/40 border-yellow-500 text-center">
        //           <CardContent className="p-4">
        //             <p className="font-semibold">{jugador}</p>
        //             <p className="text-sm text-gray-400">Delantero</p>
        //           </CardContent>
        //         </Card>
        //       ))}
        //     </div>
        //   </div>
        // );
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
        return (
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-yellow-500">Tienda Oficial</h2>
            <p>Muy pronto podrás adquirir camisetas, gorras y artículos oficiales del club.</p>
            <Button className="bg-yellow-500 text-black font-bold hover:bg-yellow-400">Próximamente</Button>
          </div>
        );
      case 'contacto':
        return (
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-yellow-500">Contacto</h2>
            <p>¿Quieres unirte al club o colaborar con nosotros?</p>
            <p className="text-gray-400">Escríbenos a <strong>contacto@csdctumi.com</strong></p>
          </div>
        );
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
          <Button
            key={s}
            onClick={() => setSection(s)}
            variant={section === s ? 'default' : 'outline'}
            className={`capitalize ${section === s ? 'bg-yellow-500 text-black' : 'border-yellow-500 text-yellow-500 hover:bg-yellow-500/20'}`}
          >
            {s}
          </Button>
        ))}
      </nav>

      <motion.div
        key={section}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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