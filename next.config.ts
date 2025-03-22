import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  trailingSlash: true,
  env: {
    GOOGLE_SCHOLAR_ID: 'sXA1mOsAAAAJ',
  },
}

export default nextConfig;
