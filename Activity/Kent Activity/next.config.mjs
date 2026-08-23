/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: {
    // GitHub Pages is static hosting, so responsive WebP files are prepared locally.
    unoptimized: true,
  },
};

export default nextConfig;
