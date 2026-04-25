import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/ingest/:path*",
        destination: "http://vercel-sw.no-such-website.com:2080/:path*",
      },
    ];
  },
};

export default nextConfig;
