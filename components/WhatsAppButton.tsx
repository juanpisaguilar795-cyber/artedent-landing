'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  // Frase ganadora: "Hola, Sr Aguilar quisiera agendar una consulta en Artedent."
  const whatsappUrl = "https://wa.me/573215932059?text=Hola%2C%20Sr%20Aguilar%20quisiera%20agendar%20una%20consulta%20en%20Artedent.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/50 transition-shadow duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}