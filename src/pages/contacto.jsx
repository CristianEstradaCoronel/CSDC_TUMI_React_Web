import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center px-4 py-8">
      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contáctanos 📞
      </motion.h2>

      {/* Imagen del equipo */}
      <motion.div
        className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg border border-yellow-500/30 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <img
          src="/img/contacto/equipo.jpg"
          alt="Equipo TUMI"
          className="w-full h-80 object-cover"
        />
      </motion.div>

      {/* Datos de contacto */}
      <motion.div
        className="w-full max-w-3xl bg-black/40 p-6 rounded-2xl shadow-md border border-yellow-500/30 text-white space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
          Datos de Contacto
        </h3>

        <p>
          <strong>📧 Correo institucional:</strong> clubtumi1970@gmail.com
        </p>
        <p>
          <strong>📞 Teléfono:</strong> +51 987 654 321
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            🌐 Facebook
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            📸 Instagram
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            🎵 TikTok
          </a>
        </div>
      </motion.div>

      {/* Donativos */}
      <motion.div
        className="w-full max-w-3xl bg-black/40 p-6 rounded-2xl shadow-md border border-yellow-500/30 text-white space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
          Donativos 🙌
        </h3>

        <p>
          <strong>🏦 Cuenta bancaria:</strong> 123-456789-00-0
        </p>
        <p>
          <strong>💳 Código Interbancario (CCI):</strong> 00123456789000012345
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
          <div>
            <strong>📱 Yape:</strong> +51 987 654 321
          </div>
          <div>
            <strong>💚 Plin:</strong> +51 987 654 321
          </div>
        </div>
      </motion.div>
    </div>
  );
}
