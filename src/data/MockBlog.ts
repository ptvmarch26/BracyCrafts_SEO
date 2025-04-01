export interface Blog {
  slug: string;
  title: string;
  content: string;
  image: string;
}

// Danh sách blog
export const blogs: Blog[] = [
  {
    slug: "cach-chon-vong-phong-thuy",
    title: "Cách chọn vòng phong thủy hợp mệnhCách chọn vòng phong thủy hợp mệnhCách chọn vòng phong thủy hợp mệnhCách chọn vòng phong thủy hợp mệnhCách chọn vòng phong thủy hợp mệnh",
    content: "Chọn vòng phong thủy theo mệnh giúp bạn gặp nhiều may mắn",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743504620/image_gdavn4.png",
  },
  {
    slug: "y-nghia-vong-handmade",
    title: "Ý nghĩa của vòng tay handmade",
    content:
      "Vòng tay handmade thể hiện cá tính và sự sáng tạo của người đeo",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743504620/image_1_dmmpt8.png",
  },
  {
    slug: "cach-bao-quan-vong",
    title: "Cách bảo quản vòng tay bền đẹp",
    content: "Hướng dẫn bảo quản vòng tay đúng cách để luôn giữ được vẻ đẹp",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743504619/image_2_cuwqkf.png",
  },
  {
    slug: "chon-vong-theo-cung-hoang-dao",
    title: "Chọn vòng theo cung hoàng",
    content: "Mỗi cung hoàng đạo có màu sắc và loại đá phong thủy phù hợp",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743504619/image_2_cuwqkf.png",
  },
  {
    slug: "meo-phoi-do-voi-vong-tay",
    title: "Mẹo phối đồ với vòng tay",
    content: "Kết hợp vòng tay với trang phục để tạo phong cách ấn tượng",
    image:
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743504619/image_2_cuwqkf.png",
  },
];
