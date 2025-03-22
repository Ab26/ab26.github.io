import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  basePath: '',
  assetPrefix: '',
}

export default nextConfig;
