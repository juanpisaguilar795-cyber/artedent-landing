'use client';

import { motion, Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToGallery = () => {
    const element = document.querySelector('#galeria');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 bg-[#f8fafc]"
    >
      {/* FONDO ANIMADO (Optimizado para móvil) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[5%] -right-[10%] w-64 h-64 sm:w-[500px] sm:h-[500px] bg-primary-200/40 rounded-full blur-[80px] sm:blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[5%] -left-[10%] w-72 h-72 sm:w-[600px] sm:h-[600px] bg-primary-100/50 rounded-full blur-[80px] sm:blur-[120px]" 
        />
      </div>

      <motion.div 
        className="relative w-full max-w-7xl mx-auto px-6 text-center z-10 py-12 sm:py-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 bg-white/70 backdrop-blur-md border border-primary-100 rounded-full mb-6 sm:mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary-600" />
          <span className="text-[10px] sm:text-sm font-bold text-primary-700 uppercase tracking-wider">
            Excelencia en Prótesis Dental
          </span>
        </motion.div>

        {/* Título Responsive */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold text-slate-900 mb-6 sm:mb-8 tracking-tight leading-[1.1]"
        >
          Diseño y precisión en <br className="hidden sm:block" />
          <span className="text-primary-700">prótesis dentales</span>
        </motion.h1>

        {/* Subtítulo Responsive */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
        >
          Elevamos la estética dental mediante procesos de alta precisión y un compromiso absoluto con el detalle personalizado.
        </motion.p>

        {/* CTAs Responsive */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToGallery}
            className="w-full sm:w-auto px-8 py-4 bg-primary-700 text-white rounded-2xl font-bold text-lg hover:bg-primary-800 transition-all shadow-lg shadow-primary-200 active:scale-95"
          >
            Ver trabajos
          </button>
          <a
            href="#contacto"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all active:scale-95 text-center"
          >
            Más información
          </a>
        </motion.div>

        {/* Stats: Grid 2 col en móvil para no ser tan largo */}
        <motion.div
          variants={itemVariants}
          className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '15+', label: 'Años Exp.' },
            { value: '5K+', label: 'Prótesis' },
            { value: '100%', label: 'Calidad' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-white/50 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/60 shadow-sm ${
                index === 2 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className="text-2xl sm:text-4xl font-black text-primary-700 mb-1">{stat.value}</div>
              <div className="text-[10px] sm:text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}