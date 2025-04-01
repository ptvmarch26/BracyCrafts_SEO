import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface Blog {
  slug: string;
  title: string;
  content: string;
  image: string;
}

interface BlogProps {
  blog: Blog;
}

const BlogComponent = ({ blog }: BlogProps) => {
  return (
    <div className="bg-white rounded-xs shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="relative w-full h-[280px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover border"
        />
      </div>
      <Link href={`/blog/${blog.slug}`}>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 line-clamp-2 min-h-[60px]">
            {blog.title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-2 min-h-[40px]">
            {blog.content}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogComponent;
