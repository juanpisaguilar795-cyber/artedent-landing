import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'ArteDent Laboratorio Dental - Prótesis Dentales en Bogotá',
  description:
    'Laboratorio dental especializado en prótesis fija, removible y acrílica. Más de 15 años de experiencia en Bogotá. Calidad y precisión garantizada.',
  keywords: [
    'laboratorio dental',
    'prótesis dentales',
    'prótesis fija',
    'prótesis removible',
    'prótesis acrílica',
    'prótesis flexible',
    'Bogotá',
    'ArteDent',
  ],
  authors: [{ name: 'ArteDent Laboratorio Dental' }],
  openGraph: {
    title: 'ArteDent Laboratorio Dental - Prótesis Dentales en Bogotá',
    description:
      'Laboratorio dental especializado en prótesis fija, removible y acrílica. Más de 15 años de experiencia.',
    type: 'website',
    locale: 'es_CO',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
