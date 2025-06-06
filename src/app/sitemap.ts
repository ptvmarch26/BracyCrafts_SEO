import { MetadataRoute } from "next";
import { products, Product } from "@/data/MockProduct";
import { blogPosts, Blog } from "@/data/MockBlog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://bracycrafts.id.vn";

  // Chuyển đổi dữ liệu sản phẩm giả thành định dạng sitemap
  const productUrls: MetadataRoute.Sitemap = (products as Product[]).map(
    (product) => ({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: new Date(new Date()),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  // Chuyển đổi dữ liệu blog giả thành định dạng sitemap
  const blogUrls: MetadataRoute.Sitemap = (blogPosts as Blog[]).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || new Date()),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Các trang tĩnh
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/product`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/term-of-use`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/private-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Kết hợp tất cả URL
  return [...staticPages, ...productUrls, ...blogUrls];
}
