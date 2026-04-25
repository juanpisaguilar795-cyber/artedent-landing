'use client';

import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Detalle decorativo de luz */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-600/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-12 sm:mb-16">
          
          {/* Brand Identity */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-6 sm:mb-8">
              <Image 
                src="/logo.png" 
                alt="Logo ArteDent" 
                width={60} 
                height={60} 
                // Añade esto para mantener el ratio y quitar el warning
                style={{ height: 'auto', width: 'auto' }} 
                className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] mb-4 sm:mb-0"
                priority
              />
              <div>
                <span className="text-2xl sm:text-3xl font-bold tracking-tight block">ArteDent</span>
                <span className="text-primary-400 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em]">Laboratorio Dental</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 max-w-md mx-auto sm:mx-0 leading-relaxed text-base sm:text-lg italic">
              "Innovación que se siente natural. Estética dental de alto nivel diseñada para devolver la confianza en cada sonrisa."
            </p>
          </div>

          {/* Navegación Rápida */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 relative inline-block">
              Servicios
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-8 h-1 bg-primary-600 rounded-full" />
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-slate-400">
              {['Prótesis Flexible', 'Prótesis Removible', 'Prótesis Fija', 'Prótesis Acrílica', 'Arreglos en general'].map((s) => (
                <li key={s} className="text-sm sm:text-base hover:text-primary-400 transition-colors cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Info Directa - ICONOS OCULTOS EN MÓVIL */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 relative inline-block">
              Ubicación
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-8 h-1 bg-primary-600 rounded-full" />
            </h3>
            <div className="space-y-6">
              {/* Ubicación */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                {/* hidden sm:flex oculta el icono en móvil y lo muestra desde sm */}
                <div className="hidden sm:flex p-2.5 bg-white/5 rounded-lg border border-white/10">
                  <FaMapMarkerAlt className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-slate-200 font-medium text-sm sm:text-base">La Española, Bogotá</p>
                  <p className="text-slate-400 text-xs sm:text-sm">Transversal 79b # 83b - 35</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                {/* hidden sm:flex oculta el icono en móvil */}
                <div className="hidden sm:flex p-2.5 bg-white/5 rounded-lg border border-white/10">
                  <FaPhone className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <a href="tel:3215932059" className="text-slate-200 font-bold hover:text-primary-400 transition-colors block text-sm sm:text-lg">
                    321 593 2059
                  </a>
                  <p className="text-slate-400 text-[10px] sm:text-xs italic uppercase tracking-wider">Marionel Aguilar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <p className="text-slate-500 text-[11px] sm:text-sm font-medium">
            © {currentYear} <span className="text-slate-300">ArteDent Laboratorio Dental</span>. <br className="sm:hidden" /> Hecho con precisión en Bogotá.
          </p>
        </div>
      </div>
    </footer>
  );
}