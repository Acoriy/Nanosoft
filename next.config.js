/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pour exporter une SPA si vous ne voulez pas tout de suite SSR
  output: 'export',
  // Personnalisez le dossier de sortie du build
  distDir: 'build',
};

module.exports = nextConfig;
