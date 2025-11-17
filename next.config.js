/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // esporta in static
  distDir: "out", // cartella valida, non “public”
  images: { unoptimized: true }, // Next Image senza problemi
};

module.exports = nextConfig;
