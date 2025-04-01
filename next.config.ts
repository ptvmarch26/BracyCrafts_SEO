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
};

export default nextConfig;
