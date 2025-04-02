import { products } from "@/data/MockProduct";
import ProductComponent from "@/components/ProductComponent";
import Link from "next/link";
import { Metadata } from "next";
import { Fragment } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description:
    "Khám phá danh sách sản phẩm handmade tại BracyCrafts - Những món quà độc đáo, chất lượng, được làm thủ công với tâm huyết.",
  keywords: [
    "vòng tay handmade",
    "quà tặng thủ công",
    "sản phẩm thủ công",
    "BracyCrafts",
  ],
  openGraph: {
    title: "BracyCrafts | Sản phẩm",
    description:
      "Khám phá những sản phẩm độc đáo tại BracyCrafts, từ vòng tay phong thủy đến các món quà tặng thủ công.",
    url: "https://bracycrafts-seo.vercel.app/product",
    images: [
      {
        url: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743605796/logo_m9hxmn.svg",
        width: 1200,
        height: 630,
        alt: "Sản phẩm handmade tại BracyCrafts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bracycrafts",
    title: "BracyCrafts | Sản phẩm",
    description: "Khám phá các sản phẩm handmade độc đáo tại BracyCrafts.",
    images: [
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743605796/logo_m9hxmn.svg",
    ],
  },
};

export default function ProductList() {
  return (
    <Fragment>
      <Script
        id="schema-product-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: product.name,
                image: product.images.main || "",
                description: product.description,
                brand: {
                  "@type": "Brand",
                  name: "BracyCrafts",
                },
                sku: product.id,
                offers: {
                  "@type": "Offer",
                  url: `https://bracycrafts.com/product/${product.slug}` || "",
                  priceCurrency: "VND",
                  price: product.newPrice,
                  itemCondition: "https://schema.org/NewCondition",
                  availability: "https://schema.org/InStock",
                  seller: {
                    "@type": "Organization",
                    name: "BracyCrafts",
                  },
                },
              },
            })),
          }),
        }}
      />
      <div className="container mx-auto py-10 px-2">
        <h1 className="text-4xl pacifico font-medium text-primary text-center mb-5">
          Danh sách sản phẩm
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <ProductComponent product={product} />
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
