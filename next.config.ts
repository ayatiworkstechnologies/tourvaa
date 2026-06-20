import type { NextConfig } from "next";

const apiTarget = (process.env.API_URL || "http://127.0.0.1:8000").replace(/\/$/, "");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiTarget}/api/:path*`,
      },
      {
        source: "/storage/:path*",
        destination: `${apiTarget}/storage/:path*`,
      },
    ];
  },
};

export default nextConfig;
