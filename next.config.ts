import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: { 
    unoptimized: true 
  },
  compiler: {
    emotion: true,
  },

  env: {
    
  },
};

export default nextConfig;