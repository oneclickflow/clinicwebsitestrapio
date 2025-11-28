import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      // Allow images from any Strapi host (since user's domain is unknown yet)
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
