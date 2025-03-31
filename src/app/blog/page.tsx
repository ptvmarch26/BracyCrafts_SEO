import Link from "next/link";
import { blogs } from "@/data/MockBlog";

export default function Blog() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Bài viết mới nhất</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.slug} className="border-b pb-3">
            <Link
              href={`/blog/${blog.slug}`}
              className="text-xl text-blue-600 hover:underline"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
