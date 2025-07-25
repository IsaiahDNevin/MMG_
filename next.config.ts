import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/deal35ni0/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "mountainmenofgod.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
