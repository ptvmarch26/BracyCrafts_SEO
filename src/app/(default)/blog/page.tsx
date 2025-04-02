import { blogPosts } from "@/data/MockBlog";
import BlogComponent from "@/components/BlogComponent";
import { Metadata } from "next";
import { Fragment } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tất cả bài viết",
  description:
    "Khám phá những bài viết thú vị về sản phẩm handmade, quà tặng thủ công và những câu chuyện thú vị tại BracyCrafts.",
  keywords: [
    "bài viết handmade",
    "quà tặng thủ công",
    "blog BracyCrafts",
    "sản phẩm thủ công",
  ],
  openGraph: {
    title: "BracyCrafts | Tất cả bài viết",
    description:
      "Khám phá các bài viết thú vị về sản phẩm handmade, quà tặng thủ công và những câu chuyện tại BracyCrafts.",
    url: "https://bracycrafts-seo.vercel.app/blog", // Cập nhật URL thực tế của trang
    images: [
      {
        url: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743605796/logo_m9hxmn.svg",
        width: 1200,
        height: 630,
        alt: "Blog tại BracyCrafts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bracycrafts",
    title: "BracyCrafts | Tất cả bài viết",
    description:
      "Khám phá những bài viết thú vị tại BracyCrafts về sản phẩm handmade và quà tặng thủ công.",
    images: [
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743605796/logo_m9hxmn.svg",
    ],
  },
};

export default function Blog() {
  return (
    <Fragment>
      <Script
        id="schema-blog-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: blogPosts.map((blog, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "BlogPosting",
                headline: blog.title,
                description: blog.description,
                image: blog.image,
                datePublished: blog.publishedAt,
                author: {
                  "@type": "Person",
                  name: "BracyCrafts",
                },
                publisher: {
                  "@type": "Organization",
                  name: "BracyCrafts",
                },
                url: `https://bracycrafts.com/blog/${blog.slug}`,
              },
            })),
          }),
        }}
      />
      <div className="container max-w-[1200px] mx-auto py-10 px-2">
        <h1 className="text-4xl pacifico font-medium text-primary text-center mb-5">
          Danh sách bài viết
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((blog) => (
            <BlogComponent key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
