import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface Blog {
  slug: string;
  title: string;
  description: string;
  image: string;
}

interface BlogProps {
  blog: Blog;
}

const BlogComponent = ({ blog }: BlogProps) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="bg-white rounded-xs shadow-lg overflow-hidden transform transition-all duration-300 cursor-pointer">
        <div className="relative w-full h-[250px]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover border"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold hover:text-primary line-clamp-2 sm:min-h-[56px]">
            {blog.title}
          </h2>
          <div className="flex justify-center my-5">
            <div className="h-[1px] w-full bg-[#FFD2D8]"></div>
          </div>
          <p className="text-[#00000080] text-sm line-clamp-2 sm:min-h-[40px]">
            {blog.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogComponent;
