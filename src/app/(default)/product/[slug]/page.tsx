import { Metadata } from "next";
import { products } from "@/data/MockProduct";
import ProductDetailsClient from "./ProductDetailsClient";

// Tạo các đường dẫn tĩnh khi build
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Tạo metadata động cho SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return {
      title: "Sản phẩm không tìm thấy",
      description: "Sản phẩm không tồn tại hoặc đã bị xóa.",
    };
  }

  return {
    title: product.name,
    description: product.description.substring(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.substring(0, 160),
      url: `https://bracycrafts.id.vn/product/${product.slug}`,
      images: [
        {
          url: product.images.main,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@bracycrafts",
      title: product.name,
      description: product.description,
      images: [product.images.main],
    },
    alternates: {
      canonical: `/product/${product.slug}`,
    },
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return <div>Sản phẩm không tìm thấy</div>;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.images.main, ...(product.images.gallery || [])],
    description: product.description,
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: "BracyCrafts",
    },
    offers: {
      "@type": "Offer",
      url: `https://bracycrafts.id.vn/product/${product.slug}`,
      priceCurrency: "VND",
      price: product.price,
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <article className="container mx-auto py-10 px-2">
      {/* Thêm dữ liệu có cấu trúc cho SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Trang chủ",
                item: "https://bracycrafts.id.vn",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Sản phẩm",
                item: "https://bracycrafts.id.vn/product",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `https://bracycrafts.id.vn/product/${product.slug}`,
              },
            ],
          }),
        }}
      />

      {/* Truyền slug cho component client để nó tự lấy dữ liệu */}
      <ProductDetailsClient slug={slug} />
    </article>
  );
}
