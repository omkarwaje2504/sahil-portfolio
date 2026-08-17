import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
   basePath: '/sahil-portfolio',
  assetPrefix: '/sahil-portfolio/',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
