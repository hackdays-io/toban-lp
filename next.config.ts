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
    NEXT_PUBLIC_AIRTABLE_PAT: process.env.NEXT_PUBLIC_AIRTABLE_PAT,
    NEXT_PUBLIC_AIRTABLE_BASE: process.env.NEXT_PUBLIC_AIRTABLE_BASE,
    NEXT_PUBLIC_AIRTABLE_TABLE: process.env.NEXT_PUBLIC_AIRTABLE_TABLE,
  },
};

export default nextConfig;