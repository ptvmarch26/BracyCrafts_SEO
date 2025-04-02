import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogPosts } from "@/data/MockBlog";
import { Blog, BlogSection } from "@/data/MockBlog";

// Tạo các đường dẫn tĩnh khi build
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Tạo metadata động cho SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Bài viết không tìm thấy",
      description: "Bài viết không tồn tại hoặc đã bị xóa.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://bracycrafts-seo.vercel.app/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.altText,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@bracycrafts",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: post.canonicalUrl,
    },
  };
}

const BlogSectionComponent = ({
  section,
  post,
}: {
  section: BlogSection;
  post: Blog;
}) => {
  // Lọc ra các section con của section hiện tại
  const childSections = post.sections.filter((s) => s.parentId === section.id);

  switch (section.type) {
    case "heading":
      const HeadingTag =
        section.level === 2 ? "h2" : section.level === 3 ? "h3" : "h4";
      return (
        <div className={"mb-6"}>
          <HeadingTag
            className={`${
              section.level === 2
                ? "text-3xl font-bold"
                : section.level === 3
                ? "text-2xl font-bold"
                : "text-xl font-bold"
            } mb-4`}
          >
            {section.content as string}
          </HeadingTag>
          {childSections.map((childSection, index) => (
            <BlogSectionComponent
              key={index}
              section={childSection}
              post={post}
            />
          ))}
        </div>
      );

    case "paragraph":
      return (
        <p className="mb-4 text-lg leading-relaxed">
          {section.content as string}
        </p>
      );

    case "image":
      return (
        <div className="flex justify-center my-6">
          <div>
            <Image
              src={section.content as string}
              alt={section.altText || "Blog image"}
              width={700}
              height={700}
              className="rounded-lg"
            />
            {section.altText && (
              <p className="text-md text-gray-500 mt-2 text-center">
                {section.altText}
              </p>
            )}
          </div>
        </div>
      );

    case "list":
      if (section.listType === "ordered") {
        return (
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            {(section.content as string[]).map((item, index) => (
              <li key={index} className="font-semibold text-base">
                {item}
              </li>
            ))}
          </ol>
        );
      } else {
        return (
          <ul className="list-disc pl-6 mb-4 space-y-2">
            {(section.content as string[]).map((item, index) => (
              <li key={index} className="font-semibold text-base">
                {item}
              </li>
            ))}
          </ul>
        );
      }

    default:
      return null;
  }
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Đợi Promise resolve để có slug
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  // Lấy các section cấp cao nhất (không có parentId)
  const topLevelSections = post.sections.filter((section) => !section.parentId);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <article className="max-w-4xl mx-auto py-10 px-2">
      {/* Thêm dữ liệu có cấu trúc cho SEO */}
      {post.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post.structuredData),
          }}
        />
      )}

      <header className="mb-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <p className="text-primary font-bold">{post.author}</p>
            <p className="text-sm text-gray-500">{post.readingTime} phút đọc</p>
          </div>
          <div className="text-sm text-gray-500 mb-2">
            Đăng vào {formatDate(post.publishedAt)}
            {post.updatedAt && ` • Cập nhật ${formatDate(post.updatedAt)}`}
          </div>
        </div>

        <h1 className="text-4xl font-bold mt-8">{post.title}</h1>
        <p className="text-xl text-gray-600 my-3">{post.description}</p>
        <div className="flex justify-center mb-8">
          <Image
            src={post.image}
            alt={post.altText}
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {post.category.map((cat) => (
            <span
              key={cat}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </header>

      {/* Nội dung bài viết */}
      <div className="prose lg:prose-xl max-w-none">
        {topLevelSections.map((section, index) => (
          <BlogSectionComponent key={index} section={section} post={post} />
        ))}
      </div>

      <footer className="mt-10 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
}
