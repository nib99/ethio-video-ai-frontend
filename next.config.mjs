/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable if you need to support Ge'ez script better
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
