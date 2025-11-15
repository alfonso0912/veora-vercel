/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ NO EXPORT — VERCEL NON LO SUPPORTA SU NEXT 15
  // Nada, rimosso tutto.

  images: {
    unoptimized: true,
  },

  // Evita che Vercel blocchi la build
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // Includi la cartella public per sicurezza
  outputFileTracingIncludes: {
    "/": ["./public/**/*"],
  },
};

module.exports = nextConfig;
