# 🚀 Guía de Instalación Rápida - ArteDent

## Pasos para ejecutar el proyecto

### 1. Descomprimir el archivo
Descomprime el archivo `artedent-landing.zip` en tu computadora.

### 2. Abrir terminal
Abre una terminal o línea de comandos en la carpeta del proyecto.

### 3. Instalar dependencias
```bash
npm install
```

### 4. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 5. Abrir en el navegador
Abre tu navegador y ve a: http://localhost:3000

## 🎨 Personalización Rápida

### Cambiar el número de WhatsApp
Archivo: `components/WhatsAppButton.tsx` y `components/Contact.tsx`
Busca: `573215932059` y reemplázalo por tu número.

### Cambiar imágenes de la galería
Archivo: `components/Gallery.tsx`
Reemplaza las URLs de Unsplash con tus propias imágenes.

### Cambiar colores
Archivo: `tailwind.config.ts`
Modifica los colores en la sección `primary`.

### Actualizar información de contacto
Archivo: `components/Contact.tsx`
Modifica el array `contactInfo` con tus datos.

## 📦 Deploy a Producción

### Opción 1: Vercel (Recomendado - Gratis)
1. Crea una cuenta en https://vercel.com
2. Sube tu código a GitHub
3. Conecta tu repositorio en Vercel
4. ¡Listo! Tu sitio estará en línea en minutos

### Opción 2: Build local
```bash
npm run build
npm start
```

## ⚠️ Requisitos
- Node.js 18+ instalado
- npm o yarn

## 🆘 Problemas Comunes

**Error al instalar dependencias:**
```bash
npm cache clean --force
npm install
```

**Puerto 3000 ocupado:**
```bash
npm run dev -- -p 3001
```

## 📞 Contacto
Si tienes problemas, verifica el README.md principal para más detalles.
