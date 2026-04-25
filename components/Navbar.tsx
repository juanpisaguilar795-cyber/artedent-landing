'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Calculamos la posición restando la altura del navbar (80px)
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo optimizado */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="ArteDent Logo"
                  fill
                  priority
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                  ArteDent
                </span>
                <p className="text-xs text-gray-600 -mt-1">Laboratorio Dental</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 hover:text-primary-700 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="px-6 py-3 bg-gradient-to-r from-primary-700 to-primary-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-700 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="block px-4 py-3 bg-gradient-to-r from-primary-700 to-primary-500 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200"
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}