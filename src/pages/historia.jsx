import { motion } from "framer-motion";

const Historia = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nuestra Historia
      </motion.h1>

      <motion.div
        className="max-w-3xl text-justify text-lg text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
      >
        <p className="mb-6">
          Fundado en el año <strong>1974</strong> en el histórico distrito de <strong>Pimentel</strong>,
          nuestro club nació del sueño de los hermanos <strong>Segura</strong>, quienes buscaron
          promover el deporte, la cultura y la camaradería entre los jóvenes de la comunidad.
        </p>

        <p className="mb-6">
          Lo que comenzó como un pequeño grupo de entusiastas del fútbol se convirtió con el tiempo
          en una familia que ha sabido mantener viva la pasión por el deporte y el orgullo local.
          Década tras década, jugadores, dirigentes y simpatizantes han dejado su huella en esta
          institución que hoy es parte esencial de la identidad pimenteleña.
        </p>

        <p className="mb-6">
          En el año <strong>2025</strong>, bajo la gestión del exjugador <strong>Sergio Ubillus</strong>,
          el club alcanzó un nuevo hito histórico al llegar hasta la <strong>Fase Nacional</strong> de la
          Copa Perú, demostrando que los valores de <em>esfuerzo, disciplina y unión</em> siguen
          siendo la base de cada logro.
        </p>

        <p className="mb-6">
          Hoy seguimos escribiendo nuevas páginas en esta historia, con la misma pasión que nos vio
          nacer, y con el firme compromiso de inspirar a las futuras generaciones a soñar, luchar y
          dejarlo todo dentro y fuera del campo.
        </p>
      </motion.div>

      {/* Espacio para las 3 fotos */}
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        <div className="h-64 bg-gray-300 rounded-2xl shadow-md flex items-center justify-center text-gray-500 text-sm italic">
          Foto 1 - (Agregar luego)
        </div>
        <div className="h-64 bg-gray-300 rounded-2xl shadow-md flex items-center justify-center text-gray-500 text-sm italic">
          Foto 2 - (Agregar luego)
        </div>
        <div className="h-64 bg-gray-300 rounded-2xl shadow-md flex items-center justify-center text-gray-500 text-sm italic">
          Foto 3 - (Agregar luego)
        </div>
      </motion.div>
    </div>
  );
};

export default Historia;
