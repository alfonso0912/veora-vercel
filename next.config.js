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

  experimental: {},
};

module.exports = nextConfig;
