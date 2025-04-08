import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/*/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'www.pnj.com.vn',
        port: '',
        pathname: '/*/**',
        search: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'bracycrafts-seo.vercel.app',
          },
        ],
        destination: 'https://bracycrafts.id.vn/:path*',
        permanent: true, // Status 301
      },
    ];
  },
};

export default nextConfig;
