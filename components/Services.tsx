'use client';

import { motion, Variants } from 'framer-motion';
import { Smile, Settings, Wrench, Layers, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Smile,
    title: 'Prótesis Flexible',
    description: 'Soluciones removibles de alta estética y confort, diseñadas para una adaptación natural y discreta.',
  },
  {
    icon: Layers,
    title: 'Prótesis Removible',
    description: 'Estructuras personalizadas con materiales de grado médico para restaurar la funcionalidad total.',
  },
  {
    icon: Shield,
    title: 'Prótesis Fija',
    description: 'Coronas y puentes permanentes con acabados cerámicos que imitan la perfección del esmalte dental.',
  },
  {
    icon: Settings,
    title: 'Prótesis Acrílica',
    description: 'Dentaduras totales y parciales con caracterización gingival para un aspecto joven y saludable.',
  },
  {
    icon: Wrench,
    title: 'Arreglos en General',
    description: 'Servicio técnico especializado para reparaciones urgentes, rebases y mantenimiento preventivo.',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Services() {
  return (
    <section 
      id="servicios" 
      className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-primary-100 via-white to-primary-50"
    >
      {/* Fondo de esferas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-10 w-64 h-64 sm:w-80 sm:h-80 bg-primary-200/40 rounded-full blur-[80px] sm:blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-10 w-72 h-72 sm:w-96 sm:h-96 bg-primary-300/30 rounded-full blur-[100px] sm:blur-[120px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 bg-white border border-primary-200 text-primary-700 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-sm"
          >
            Nuestra Especialidad
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Soluciones de <br className="sm:hidden" /> <span className="text-primary-700 italic font-display">Alta Gama</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base font-medium">
            Tecnología y arte dental al servicio de tu salud oral.
          </p>
        </div>

        {/* --- GRID / FLEX CENTRADO --- */}
        {/* Usamos flex wrap y justify-center para que las sobrantes se centren automáticamente */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                // Definimos anchos: 100% en móvil, casi 50% en tablet (md) y un tercio en desktop (lg)
                className="group bg-white/90 backdrop-blur-sm rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 border border-white shadow-xl shadow-primary-900/5 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)]"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-primary-700 transition-colors duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 group-hover:text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="mt-6 sm:mt-8 flex items-center text-primary-600 font-bold text-xs sm:text-sm gap-2">
                  Consultar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}