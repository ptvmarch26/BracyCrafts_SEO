import { blogPosts } from "@/data/MockBlog";
import BlogComponent from "@/components/BlogComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài viết",
};

export default function Blog() {
  return (
    <div className="container max-w-[1200px] mx-auto py-10">
      <h1 className="text-4xl pacifico font-medium text-primary text-center mb-5">Danh sách bài viết</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((blog) => (
          <BlogComponent key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
