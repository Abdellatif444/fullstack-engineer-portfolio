/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image optimization
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn5.f-cdn.com' },
      { protocol: 'https', hostname: 'cdn3.f-cdn.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'user-images.githubusercontent.com' },
      { protocol: 'https', hostname: 'media0.giphy.com' },
      { protocol: 'https', hostname: 'media1.giphy.com' },
      { protocol: 'https', hostname: 'media2.giphy.com' },
      { protocol: 'https', hostname: 'media3.giphy.com' },
      { protocol: 'https', hostname: 'media4.giphy.com' },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Performance
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
