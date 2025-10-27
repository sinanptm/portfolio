import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      '@react-pdf-viewer/core',
      'recharts',
      'three-globe'
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
        pathname: "/**",
      }
    ],
    dangerouslyAllowSVG: true
  },
};

export default nextConfig;