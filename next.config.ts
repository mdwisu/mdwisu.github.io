import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  // Sesuaikan dengan nama repository Anda
  basePath: "/mdwisu.github.io",
  assetPrefix: "/mdwisu.github.io",
};

export default nextConfig;
