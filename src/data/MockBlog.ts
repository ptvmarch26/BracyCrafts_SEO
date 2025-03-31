export interface Blog {
  slug: string;
  title: string;
  content: string;
}

// Danh sách blog
export const blogs: Blog[] = [
  {
    slug: "cach-chon-vong-phong-thuy",
    title: "Cách chọn vòng phong thủy hợp mệnh",
    content: "Chọn vòng phong thủy theo mệnh giúp bạn gặp nhiều may mắn...",
  },
  {
    slug: "y-nghia-vong-handmade",
    title: "Ý nghĩa của vòng tay handmade",
    content:
      "Vòng tay handmade thể hiện cá tính và sự sáng tạo của người đeo...",
  },
];
