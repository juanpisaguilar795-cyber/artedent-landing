import type { Metadata } from "next";
import { Outfit, Inter } from 'next/font/google';
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ArteDent Laboratorio Dental",
  description: "Laboratorio dental especializado en prótesis dentales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
