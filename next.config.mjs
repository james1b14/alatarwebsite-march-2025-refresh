/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configures static export mode
  output: 'export',

  images: {
    // Avoid Next.js image optimization for static sites
    unoptimized: true,
  },

  typescript: {
    // Keep ignoring build errors for now, but you should fix type issues eventually
    ignoreBuildErrors: true,
  },

  experimental: {
    optimizeCss: true, // Optimize CSS during the build
    forceSwcTransforms: true, // Keep experimental SWC transforms if needed
  },
};

export default nextConfig;