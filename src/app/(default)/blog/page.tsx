import { blogs } from "@/data/MockBlog";
import BlogComponent from "@/components/BlogComponent";

export default function Blog() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Bài viết mới nhất</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <BlogComponent key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
