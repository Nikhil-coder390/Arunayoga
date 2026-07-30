import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days image cache
  },
  async rewrites() {
    return [
      {
        source: "/products/:path*",
        destination: "/assets/ayurvedic-treatment-1.jpg",
      },
    ];
  },
};

export default nextConfig;
