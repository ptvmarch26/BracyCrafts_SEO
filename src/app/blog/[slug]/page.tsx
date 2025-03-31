import { blogs } from "@/data/MockBlog";
import { notFound } from "next/navigation";

interface BlogDetailsProps {
  params: { slug: string };
}

// 🟢 Sử dụng generateStaticParams để Next.js biết danh sách params hợp lệ
export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogDetails({ params }: BlogDetailsProps) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-5">{blog.title}</h1>
      <p className="text-lg text-gray-700">{blog.content}</p>
    </div>
  );
}
