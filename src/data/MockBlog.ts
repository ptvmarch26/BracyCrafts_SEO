export interface BlogSection {
  type: "heading" | "paragraph" | "image" | "list";
  content: string | string[]; // Nội dung của phần
  level?: number; // Cấp độ của heading (1, 2, 3, 4...)
  altText?: string; // Mô tả cho hình ảnh khi type = "image"
  listType?: "ordered" | "unordered"; // Loại danh sách khi type = "list"
  parentId?: string; // ID của heading cha để theo dõi cấu trúc lồng nhau
  id?: string; // ID duy nhất cho mỗi section
}

interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]:
    | string
    | number
    | boolean
    | StructuredData
    | StructuredData[]
    | { "@type": string; name: string };
}

export interface Blog {
  slug: string;
  title: string;
  description: string;
  image: string;
  altText: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string[]; // Hỗ trợ nhiều danh mục
  tags: string[]; // Thêm tags để tăng khả năng SEO
  readingTime: number;
  sections: BlogSection[];
  canonicalUrl?: string; // URL chuẩn nếu có nhiều URL dẫn đến cùng nội dung
  structuredData?: StructuredData; // Dữ liệu có cấu trúc cho Schema.org
}

export const blogPosts: Blog[] = [
  {
    slug: "10-cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    title: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
    description:
      "Hướng dẫn chi tiết về cách lựa chọn vòng tay phù hợp với từng dáng tay, giúp bạn chọn được sản phẩm hoàn hảo.",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    altText: "Các loại vòng tay cho các dáng tay khác nhau",
    publishedAt: "2025-04-10T08:00:00Z",
    updatedAt: "2025-04-10T10:00:00Z",
    author: "Nguyễn Văn A",
    category: ["Vòng Tay", "Thời Trang"],
    tags: ["vòng tay", "lựa chọn vòng tay", "phong cách", "dáng tay"],
    readingTime: 8,
    canonicalUrl:
      "https://example.com/blog/cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
      datePublished: "2025-04-10T08:00:00Z",
      dateModified: "2025-04-10T10:00:00Z",
      author: {
        "@type": "Person",
        name: "Nguyễn Văn A",
      },
    },
    sections: [
      {
        id: "section-1",
        type: "heading",
        content: "1. Vòng Tay Cho Người Tay Nhỏ",
        level: 2,
      },
      {
        id: "section-1-1",
        type: "heading",
        content: "1.1. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        id: "section-1-2",
        type: "heading",
        content: "1.2. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        id: "section-2",
        type: "heading",
        content: "Vòng Tay Cho Người Tay Lớn",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Đối với người có cổ tay lớn, các mẫu vòng tay rộng và mạnh mẽ sẽ giúp tạo sự cân đối và tôn lên vẻ đẹp của bàn tay.",
        parentId: "section-2",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay lớn",
        parentId: "section-2",
      },
      {
        id: "section-3",
        type: "heading",
        content: "Cách Lựa Chọn Màu Sắc Vòng Tay",
        level: 2,
      },
      {
        type: "list",
        listType: "unordered",
        content: [
          "Đầu tiên, chọn vòng tay phù hợp với phong cách",
          "Tiếp theo, đảm bảo kích thước vòng tay vừa vặn",
          "Cuối cùng, lựa chọn màu sắc vòng tay thích hợp",
        ],
        parentId: "section-3",
      },
    ],
  },
  {
    slug: "cach-cham-soc-vong-tay-da",
    title: "Cách Chăm Sóc Vòng Tay Da Để Luôn Bền Đẹp",
    description:
      "Hướng dẫn chi tiết cách chăm sóc vòng tay da để giữ được độ bền đẹp và mới lâu dài.",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    altText: "Chăm sóc vòng tay da",
    publishedAt: "2025-04-12T08:00:00Z",
    updatedAt: "2025-04-12T10:00:00Z",
    author: "Trần Thị B",
    category: ["Vòng Tay", "Chăm Sóc Sản Phẩm"],
    tags: ["vòng tay da", "chăm sóc vòng tay", "bảo quản sản phẩm"],
    readingTime: 6,
    canonicalUrl: "https://example.com/blog/cham-soc-vong-tay-da",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Cách Chăm Sóc Vòng Tay Da Để Luôn Bền Đẹp",
      datePublished: "2025-04-12T08:00:00Z",
      dateModified: "2025-04-12T10:00:00Z",
      author: {
        "@type": "Person",
        name: "Trần Thị B",
      },
    },
    sections: [
      {
        id: "section-1",
        type: "heading",
        content: "Vệ Sinh Vòng Tay Da Đúng Cách",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Việc vệ sinh vòng tay da đúng cách giúp kéo dài tuổi thọ của sản phẩm và giữ được vẻ ngoài đẹp như mới.",
        parentId: "section-1",
      },
      {
        id: "section-2",
        type: "heading",
        content: "Bảo Quản Vòng Tay Da Khi Không Sử Dụng",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Khi không sử dụng, bạn nên bảo quản vòng tay da ở nơi khô ráo, tránh ánh nắng mặt trời và độ ẩm cao.",
        parentId: "section-2",
      },
      {
        id: "section-3",
        type: "heading",
        content: "Sử Dụng Dầu Dưỡng Da Định Kỳ",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Để vòng tay da luôn mềm mại và bền đẹp, bạn nên sử dụng dầu dưỡng da định kỳ để làm mềm và bảo vệ da khỏi tác động môi trường.",
        parentId: "section-3",
      },
    ],
  },
  {
    slug: "10-cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    title: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
    description:
      "Hướng dẫn chi tiết về cách lựa chọn vòng tay phù hợp với từng dáng tay, giúp bạn chọn được sản phẩm hoàn hảo.",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    altText: "Các loại vòng tay cho các dáng tay khác nhau",
    publishedAt: "2025-04-10T08:00:00Z",
    updatedAt: "2025-04-10T10:00:00Z",
    author: "Nguyễn Văn A",
    category: ["Vòng Tay", "Thời Trang"],
    tags: ["vòng tay", "lựa chọn vòng tay", "phong cách", "dáng tay"],
    readingTime: 8,
    canonicalUrl:
      "https://example.com/blog/cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
      datePublished: "2025-04-10T08:00:00Z",
      dateModified: "2025-04-10T10:00:00Z",
      author: {
        "@type": "Person",
        name: "Nguyễn Văn A",
      },
    },
    sections: [
      {
        id: "section-1",
        type: "heading",
        content: "1. Vòng Tay Cho Người Tay Nhỏ",
        level: 2,
      },
      {
        id: "section-1-1",
        type: "heading",
        content: "1.1. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        id: "section-1-2",
        type: "heading",
        content: "1.2. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        id: "section-2",
        type: "heading",
        content: "Vòng Tay Cho Người Tay Lớn",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Đối với người có cổ tay lớn, các mẫu vòng tay rộng và mạnh mẽ sẽ giúp tạo sự cân đối và tôn lên vẻ đẹp của bàn tay.",
        parentId: "section-2",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay lớn",
        parentId: "section-2",
      },
      {
        id: "section-3",
        type: "heading",
        content: "Cách Lựa Chọn Màu Sắc Vòng Tay",
        level: 2,
      },
      {
        type: "list",
        listType: "ordered",
        content: [
          "Đầu tiên, chọn vòng tay phù hợp với phong cách",
          "Tiếp theo, đảm bảo kích thước vòng tay vừa vặn",
          "Cuối cùng, lựa chọn màu sắc vòng tay thích hợp",
        ],
        parentId: "section-3",
      },
    ],
  },
  {
    slug: "10-cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    title: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
    description:
      "Hướng dẫn chi tiết về cách lựa chọn vòng tay phù hợp với từng dáng tay, giúp bạn chọn được sản phẩm hoàn hảo.",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    altText: "Các loại vòng tay cho các dáng tay khác nhau",
    publishedAt: "2025-04-10T08:00:00Z",
    updatedAt: "2025-04-10T10:00:00Z",
    author: "Nguyễn Văn A",
    category: ["Vòng Tay", "Thời Trang"],
    tags: ["vòng tay", "lựa chọn vòng tay", "phong cách", "dáng tay"],
    readingTime: 8,
    canonicalUrl:
      "https://example.com/blog/cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
      datePublished: "2025-04-10T08:00:00Z",
      dateModified: "2025-04-10T10:00:00Z",
      author: {
        "@type": "Person",
        name: "Nguyễn Văn A",
      },
    },
    sections: [
      {
        id: "section-1",
        type: "heading",
        content: "1. Vòng Tay Cho Người Tay Nhỏ",
        level: 2,
      },
      {
        id: "section-1-1",
        type: "heading",
        content: "1.1. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        id: "section-1-2",
        type: "heading",
        content: "1.2. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        id: "section-2",
        type: "heading",
        content: "Vòng Tay Cho Người Tay Lớn",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Đối với người có cổ tay lớn, các mẫu vòng tay rộng và mạnh mẽ sẽ giúp tạo sự cân đối và tôn lên vẻ đẹp của bàn tay.",
        parentId: "section-2",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay lớn",
        parentId: "section-2",
      },
      {
        id: "section-3",
        type: "heading",
        content: "Cách Lựa Chọn Màu Sắc Vòng Tay",
        level: 2,
      },
      {
        type: "list",
        listType: "ordered",
        content: [
          "Đầu tiên, chọn vòng tay phù hợp với phong cách",
          "Tiếp theo, đảm bảo kích thước vòng tay vừa vặn",
          "Cuối cùng, lựa chọn màu sắc vòng tay thích hợp",
        ],
        parentId: "section-3",
      },
    ],
  },
  {
    slug: "10-cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    title: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
    description:
      "Hướng dẫn chi tiết về cách lựa chọn vòng tay phù hợp với từng dáng tay, giúp bạn chọn được sản phẩm hoàn hảo.",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    altText: "Các loại vòng tay cho các dáng tay khác nhau",
    publishedAt: "2025-04-10T08:00:00Z",
    updatedAt: "2025-04-10T10:00:00Z",
    author: "Nguyễn Văn A",
    category: ["Vòng Tay", "Thời Trang"],
    tags: ["vòng tay", "lựa chọn vòng tay", "phong cách", "dáng tay"],
    readingTime: 8,
    canonicalUrl:
      "https://example.com/blog/cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
      datePublished: "2025-04-10T08:00:00Z",
      dateModified: "2025-04-10T10:00:00Z",
      author: {
        "@type": "Person",
        name: "Nguyễn Văn A",
      },
    },
    sections: [
      {
        id: "section-1",
        type: "heading",
        content: "1. Vòng Tay Cho Người Tay Nhỏ",
        level: 2,
      },
      {
        id: "section-1-1",
        type: "heading",
        content: "1.1. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        id: "section-1-2",
        type: "heading",
        content: "1.2. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        id: "section-2",
        type: "heading",
        content: "Vòng Tay Cho Người Tay Lớn",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Đối với người có cổ tay lớn, các mẫu vòng tay rộng và mạnh mẽ sẽ giúp tạo sự cân đối và tôn lên vẻ đẹp của bàn tay.",
        parentId: "section-2",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay lớn",
        parentId: "section-2",
      },
      {
        id: "section-3",
        type: "heading",
        content: "Cách Lựa Chọn Màu Sắc Vòng Tay",
        level: 2,
      },
      {
        type: "list",
        listType: "ordered",
        content: [
          "Đầu tiên, chọn vòng tay phù hợp với phong cách",
          "Tiếp theo, đảm bảo kích thước vòng tay vừa vặn",
          "Cuối cùng, lựa chọn màu sắc vòng tay thích hợp",
        ],
        parentId: "section-3",
      },
    ],
  },
  {
    slug: "10-cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    title: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
    description:
      "Hướng dẫn chi tiết về cách lựa chọn vòng tay phù hợp với từng dáng tay, giúp bạn chọn được sản phẩm hoàn hảo.",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    altText: "Các loại vòng tay cho các dáng tay khác nhau",
    publishedAt: "2025-04-10T08:00:00Z",
    updatedAt: "2025-04-10T10:00:00Z",
    author: "Nguyễn Văn A",
    category: ["Vòng Tay", "Thời Trang"],
    tags: ["vòng tay", "lựa chọn vòng tay", "phong cách", "dáng tay"],
    readingTime: 8,
    canonicalUrl:
      "https://example.com/blog/cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
      datePublished: "2025-04-10T08:00:00Z",
      dateModified: "2025-04-10T10:00:00Z",
      author: {
        "@type": "Person",
        name: "Nguyễn Văn A",
      },
    },
    sections: [
      {
        id: "section-1",
        type: "heading",
        content: "1. Vòng Tay Cho Người Tay Nhỏ",
        level: 2,
      },
      {
        id: "section-1-1",
        type: "heading",
        content: "1.1. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        id: "section-1-2",
        type: "heading",
        content: "1.2. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        id: "section-2",
        type: "heading",
        content: "Vòng Tay Cho Người Tay Lớn",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Đối với người có cổ tay lớn, các mẫu vòng tay rộng và mạnh mẽ sẽ giúp tạo sự cân đối và tôn lên vẻ đẹp của bàn tay.",
        parentId: "section-2",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay lớn",
        parentId: "section-2",
      },
      {
        id: "section-3",
        type: "heading",
        content: "Cách Lựa Chọn Màu Sắc Vòng Tay",
        level: 2,
      },
      {
        type: "list",
        listType: "ordered",
        content: [
          "Đầu tiên, chọn vòng tay phù hợp với phong cách",
          "Tiếp theo, đảm bảo kích thước vòng tay vừa vặn",
          "Cuối cùng, lựa chọn màu sắc vòng tay thích hợp",
        ],
        parentId: "section-3",
      },
    ],
  },
  {
    slug: "10-cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    title: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
    description:
      "Hướng dẫn chi tiết về cách lựa chọn vòng tay phù hợp với từng dáng tay, giúp bạn chọn được sản phẩm hoàn hảo.",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    altText: "Các loại vòng tay cho các dáng tay khác nhau",
    publishedAt: "2025-04-10T08:00:00Z",
    updatedAt: "2025-04-10T10:00:00Z",
    author: "Nguyễn Văn A",
    category: ["Vòng Tay", "Thời Trang"],
    tags: ["vòng tay", "lựa chọn vòng tay", "phong cách", "dáng tay"],
    readingTime: 8,
    canonicalUrl:
      "https://example.com/blog/cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "10 Cách Chọn Vòng Tay Phù Hợp Với Từng Dáng Tay",
      datePublished: "2025-04-10T08:00:00Z",
      dateModified: "2025-04-10T10:00:00Z",
      author: {
        "@type": "Person",
        name: "Nguyễn Văn A",
      },
    },
    sections: [
      {
        id: "section-1",
        type: "heading",
        content: "1. Vòng Tay Cho Người Tay Nhỏ",
        level: 2,
      },
      {
        id: "section-1-1",
        type: "heading",
        content: "1.1. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay nhỏ",
        parentId: "section-1-1",
      },
      {
        id: "section-1-2",
        type: "heading",
        content: "1.2. Vòng Tay Nhỏ Xinh",
        level: 3,
        parentId: "section-1",
      },
      {
        id: "section-2",
        type: "heading",
        content: "Vòng Tay Cho Người Tay Lớn",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Đối với người có cổ tay lớn, các mẫu vòng tay rộng và mạnh mẽ sẽ giúp tạo sự cân đối và tôn lên vẻ đẹp của bàn tay.",
        parentId: "section-2",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        altText: "Vòng tay cho tay lớn",
        parentId: "section-2",
      },
      {
        id: "section-3",
        type: "heading",
        content: "Cách Lựa Chọn Màu Sắc Vòng Tay",
        level: 2,
      },
      {
        type: "list",
        listType: "ordered",
        content: [
          "Đầu tiên, chọn vòng tay phù hợp với phong cách",
          "Tiếp theo, đảm bảo kích thước vòng tay vừa vặn",
          "Cuối cùng, lựa chọn màu sắc vòng tay thích hợp",
        ],
        parentId: "section-3",
      },
    ],
  },
];
