/** @type {import('next').NextConfig} */
const nextConfig = {
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
  async headers() {
    return [
      {
        source: "/_next/image", 
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", 
          },
        ],
      },
      {
        source: "/assets/:path*", 
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
