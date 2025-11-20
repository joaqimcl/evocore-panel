/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // CRUCIAL PARA DOCKER
  
  eslint: {
    ignoreDuringBuilds: true, // Evita que errores de estilo detengan el deploy
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;