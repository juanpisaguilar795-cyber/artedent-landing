import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // 👇 Deshabilita caché de imágenes en desarrollo
    minimumCacheTTL: 0,
  },
  // 👇 Deshabilita caché en desarrollo
  onDemandEntries: {
    maxInactiveAge: 0,
    pagesBufferLength: 1,
  },
  // 👇 Para desarrollo, deshabilita la caché del servidor
  staticPageGenerationTimeout: 0,
};

export default nextConfig;