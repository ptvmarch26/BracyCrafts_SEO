import type { Metadata } from "next";
import { Nunito, Pacifico } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const nunito = Nunito({
  subsets: ["vietnamese"],
  variable: "--font-nunito",
});

const pacifico = Pacifico({
  subsets: ["vietnamese"],
  weight: "400",
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: {
    template: "%s - BracyCrafts",
    default: "BracyCrafts - Made with heart",
  },
  description:
    "Chào mừng bạn đến với BracyCrafts – Nơi mang lại trải nghiệm mua sắm tuyệt vời dành cho bạn. BracyCrafts cam kết cung cấp những sản phẩm chất lượng và dịch vụ tận tâm nhất dành cho khách hàng. Hãy khám phá ngay hôm nay!",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://bracycrafts.id.vn/"),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://bracycrafts.id.vn/",
    title: "BracyCrafts - Made with heart",
    description:
      "Chào mừng bạn đến với BracyCrafts – Nơi mang lại trải nghiệm mua sắm tuyệt vời dành cho bạn.",
    siteName: "BracyCrafts",
    images: [
      {
        url: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743605796/logo_m9hxmn.svg",
        width: 1200,
        height: 630,
        alt: "BracyCrafts - Made with heart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bracycrafts",
    title: "BracyCrafts - Made with heart",
    description:
      "Chào mừng bạn đến với BracyCrafts – Nơi mang lại trải nghiệm mua sắm tuyệt vời dành cho bạn.",
    images: [
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743605796/logo_m9hxmn.svg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BracyCrafts",
              url: "http://cloubracycrafts-seo.vercel.app/",
              logo: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743605796/logo_m9hxmn.svg",
              description:
                "BracyCrafts cung cấp vòng tay handmade, phong thủy chất lượng.",
              sameAs: [
                "https://www.facebook.com/bracycrafts.shop",
                "https://www.instagram.com/bracy.crafts/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${nunito.className} ${pacifico.variable}`}>
        {children}
      </body>
    </html>
  );
}
