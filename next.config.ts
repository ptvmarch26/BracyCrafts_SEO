import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/*/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "www.pnj.com.vn",
        port: "",
        pathname: "/*/**",
        search: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "bracycrafts-seo.vercel.app",
          },
        ],
        destination: "https://bracycrafts.id.vn/:path*",
        permanent: true, // Status 301
      },

      {
        source: "/product/vong-tay-da-thach-anh-tim",
        destination: "/product/vong-tay-magenta-glow",
        permanent: true,
      },
      {
        source: "/product/vong-tay-da-mat-ho",
        destination: "/product/vong-tay-red-tide",
        permanent: true,
      },
      {
        source: "/product/vong-tay-da-hematite",
        destination: "/product/vong-tay-midas-sea",
        permanent: true,
      },
      {
        source: "/product/vong-tay-tram-huong",
        destination: "/product/vong-tay-underwater-world",
        permanent: true,
      },
      {
        source: "/product/vong-tay-da-lam-ngoc",
        destination: "/product/vong-tay-conal-pink",
        permanent: true,
      },
      {
        source: "/product/vong-tay-bien",
        destination: "/product/vong-tay-hoi-tho-bien",
        permanent: true,
      },

      // Blog
      {
        source: "/blog/10-cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
        destination: "/blog/chon-vong-tay-handmade-theo-menh",
        permanent: true,
      },
      {
        source: "/blog/cach-cham-soc-vong-tay-da",
        destination: "/blog/cach-bao-quan-vong-tay-handmade",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
