/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  // Include TUTTE le immagini della cartella public nell'export
  outputFileTracingIncludes: {
    "/": ["./public/**/*"],
  },

  // 🔥 DISABILITA ESLINT DURANTE LA BUILD SU VERCEL
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 🔥 DISABILITA TYPESCRIPT DURANTE LA BUILD SU VERCEL
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {},
};

module.exports = nextConfig;
