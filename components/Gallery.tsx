'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/galeria-1.webp', alt: 'Corona de porcelana de alta precisión', category: 'Prótesis Fija' },
  { id: 2, src: '/galeria-2.jpg', alt: 'Prótesis removible completa funcional', category: 'Prótesis Removible' },
  { id: 3, src: '/galeria-3.jpg', alt: 'Acabado natural en prótesis flexible', category: 'Prótesis Flexible' },
  { id: 4, src: '/galeria-4.jpg', alt: 'Prótesis acrílica con caracterización', category: 'Prótesis Acrílica' },
  { id: 5, src: '/galeria-5.jpg', alt: 'Puente dental cerámico', category: 'Prótesis Fija' },
  { id: 6, src: '/galeria-6.jpg', alt: 'Restauración completa estética', category: 'Prótesis Acrílica' },
];

const categories = ['Todos', ...Array.from(new Set(galleryImages.map(img => img.category)))];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('Todos');

  const filteredImages = useMemo(() => 
    filter === 'Todos' ? galleryImages : galleryImages.filter(img => img.category === filter)
  , [filter]);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex = direction === 'prev' 
      ? (currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1)
      : (currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1);
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section 
      id="galeria" 
      className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-primary-100 via-white to-primary-50"
    >
      {/* FONDO ANIMADO */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary-200/40 rounded-full blur-[80px] sm:blur-[100px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 bg-white border border-primary-200 text-primary-700 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-sm"
          >
            Portafolio de Especialista
          </motion.span>
          <h2 className="text-4xl sm:text-7xl font-bold text-slate-900 mb-6 sm:mb-8">
            Nuestros <span className="text-primary-700 italic font-display">Trabajos</span>
          </h2>
          
          {/* Filtros */}
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mt-6 sm:mt-10 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex-shrink-0 px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-primary-700 text-white shadow-lg shadow-primary-900/20 scale-105' 
                  : 'bg-white/90 text-slate-500 hover:bg-white border border-slate-200 backdrop-blur-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE IMÁGENES */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => openModal(image.id)}
                className="group relative aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden cursor-pointer bg-white shadow-xl shadow-slate-200/50 border-2 sm:border-4 border-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  // Corregido: sizes para optimizar carga en grid 1, 2 y 3 columnas
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 translate-y-0 sm:translate-y-8 group-hover:translate-y-0 transition-all duration-500 opacity-100 sm:opacity-0 group-hover:opacity-100">
                  <span className="w-fit px-2 py-0.5 bg-primary-600 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest rounded-md mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-base sm:text-xl leading-tight mb-3 sm:mb-4">
                    {image.alt}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-300 text-[10px] sm:text-sm font-bold">
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" /> Ver en detalle
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MODAL (Lightbox) */}
        <AnimatePresence>
          {selectedImage && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
              onClick={closeModal}
            >
              <button className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 rounded-full transition-all z-[110]">
                <X className="w-6 h-6 sm:w-10 sm:h-10" />
              </button>

              <div className="absolute inset-x-4 bottom-10 sm:inset-y-0 sm:bottom-auto flex sm:justify-between items-center justify-center gap-10 pointer-events-none">
                <button 
                  onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                  className="p-4 sm:p-5 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all pointer-events-auto shadow-2xl backdrop-blur-sm border border-white/10"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                  className="p-4 sm:p-5 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all pointer-events-auto shadow-2xl backdrop-blur-sm border border-white/10"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[50vh] sm:h-[65vh] rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white/5">
                  <Image
                    src={selectedImageData.src}
                    alt={selectedImageData.alt}
                    fill
                    className="object-contain"
                    priority
                    // Corregido: sizes añadido para el modal (ocupa casi todo el ancho)
                    sizes="(max-width: 1024px) 100vw, 1200px"
                  />
                </div>
                <div className="mt-6 sm:mt-10 text-center px-4">
                  <span className="text-primary-500 font-bold tracking-widest uppercase text-[10px] sm:text-sm">{selectedImageData.category}</span>
                  <h4 className="text-white text-lg sm:text-3xl font-bold mt-2 leading-tight">{selectedImageData.alt}</h4>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}