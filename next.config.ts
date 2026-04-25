import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/ingest/:path*",
        destination: "http://45.80.229.16:2080/:path*",
      },
    ];
  },
};

export default nextConfig;
