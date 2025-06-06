
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Explicitly set for static exports
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // This disables Next.js Image Optimization API, essential for static export
  },
  trailingSlash: true, // Generates URLs like /page/ instead of /page
};

export default nextConfig;
