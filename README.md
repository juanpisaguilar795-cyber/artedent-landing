# 🦷 ArteDent Laboratorio Dental - Landing Page

Landing page profesional y moderna para ArteDent, un laboratorio dental especializado en prótesis dentales.

## 🚀 Características

- Diseño moderno y elegante con gradientes azules
- 100% Responsive (Mobile-first)
- Next.js 14+ con App Router
- Tailwind CSS para estilos
- Animaciones suaves con Framer Motion
-  SEO optimizado
-  Accesible
-  Galería con modal lightbox
-  Botón flotante de WhatsApp
-  Optimización de imágenes con next/image

## 📦 Tecnologías

- **Framework:** Next.js 14+
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Fuentes:** Google Fonts (Outfit + Inter)

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📂 Estructura del Proyecto

```
artedent-landing/
├── app/
│   ├── layout.tsx          # Layout principal con fuentes
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Navbar.tsx          # Navegación responsive
│   ├── Hero.tsx            # Sección hero con animaciones
│   ├── Services.tsx        # Cards de servicios
│   ├── Gallery.tsx         # Galería con lightbox
│   ├── Contact.tsx         # Información de contacto
│   ├── Footer.tsx          # Pie de página
│   └── WhatsAppButton.tsx  # Botón flotante de WhatsApp
├── public/                 # Archivos estáticos
└── tailwind.config.ts      # Configuración de Tailwind
```

## 🎨 Personalización

### Colores

Los colores principales se configuran en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Azules principales
    500: '#3b82f6',
    600: '#1e40af',
    700: '#1e3a8a',
  }
}
```

### Imágenes de la Galería

Para cambiar las imágenes de la galería, edita el array `galleryImages` en `components/Gallery.tsx`:

```typescript
const galleryImages = [
  {
    id: 1,
    src: '/ruta-a-tu-imagen.jpg',
    alt: 'Descripción de la imagen',
    category: 'Categoría',
  },
  // ... más imágenes
];
```

### Información de Contacto

Toda la información de contacto se encuentra en `components/Contact.tsx`. Modifica el array `contactInfo` para actualizar:

- Teléfono
- Dirección
- Horarios

### WhatsApp

Para cambiar el número de WhatsApp, edita el enlace en `components/WhatsAppButton.tsx`:

```typescript
href="https://wa.me/573215932059"
```

## 📱 Secciones

1. **Navbar**: Navegación fija con menú hamburguesa en móvil
2. **Hero**: Sección principal con llamado a la acción
3. **Servicios**: 5 servicios principales en cards
4. **Galería**: Grid de trabajos con modal lightbox
5. **Contacto**: Información completa y CTAs
6. **Footer**: Enlaces y datos de contacto
7. **WhatsApp**: Botón flotante siempre visible

## 🌐 Deploy en Vercel

1. Sube tu código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará Next.js automáticamente
4. ¡Listo! Tu sitio estará en línea

## 📝 Notas Importantes

- Las imágenes de la galería son placeholders de Unsplash
- Reemplaza las imágenes con fotos reales de tus trabajos
- El logo actualmente es un placeholder "AD" - reemplázalo con tu logo real
- Actualiza los enlaces de redes sociales en el Footer
- Personaliza los metadatos SEO en `app/page.tsx`

## 🎯 Optimizaciones para Producción

- ✅ Imágenes optimizadas con next/image
- ✅ Lazy loading automático
- ✅ Code splitting por rutas
- ✅ Fuentes optimizadas con Google Fonts
- ✅ CSS minimizado en producción
- ✅ Smooth scroll para navegación

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start

# Linting
npm run lint
```

## 📄 Licencia

Este proyecto fue desarrollado para ArteDent Laboratorio Dental.

## 🤝 Soporte

Para preguntas o soporte:
-  Teléfono: 321 593 2059
-  Dirección: Transversal 79b # 83b - 33, La Española, Bogotá

---

