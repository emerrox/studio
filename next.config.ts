
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Explicitly set for static exports
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // This disables Next.js Image Optimization API, essential for static export
    // remotePatterns removed as optimization is off and only local images are actively used.
  },
};

export default nextConfig;
