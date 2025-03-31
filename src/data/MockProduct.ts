export interface Product {
  slug: string;
  name: string;
  price: string;
  description: string;
}

// Danh sách sản phẩm
export const products: Product[] = [
  {
    slug: "vong-phong-thuy",
    name: "Vòng phong thủy",
    price: "500.000đ",
    description: "Vòng phong thủy mang lại may mắn và bình an.",
  },
  {
    slug: "vong-handmade",
    name: "Vòng handmade",
    price: "300.000đ",
    description: "Vòng tay handmade được làm thủ công, mang nét cá tính.",
  },
  {
    slug: "vong-bac",
    name: "Vòng bạc",
    price: "700.000đ",
    description: "Vòng tay bạc cao cấp, chống oxy hóa và đẹp mắt.",
  },
];
