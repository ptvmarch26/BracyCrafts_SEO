export interface Product {
  id: number;
  slug: string;
  src: string;
  alt: string;
  name: string;
  oldPrice: number;
  newPrice: number;
  star: number;
  percent: number;
}

// Danh sách sản phẩm vòng tay
export const products: Product[] = [
  {
    id: 1,
    slug: "vong-tay-da-thach-anh-tim",
    src: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    alt: "Vòng tay đá thạch anh tím",
    name: "Vòng Tay Đá Thạch Anh TímVòng Tay Đá Thạch Anh TímVòng Tay Đá Thạch Anh TímVòng Tay Đá Thạch Anh TímVòng Tay Đá Thạch Anh TímVòng Tay Đá Thạch Anh TímVòng Tay Đá Thạch Anh Tím",
    oldPrice: 750000,
    newPrice: 650000,
    star: 4.8,
    percent: 13,
  },
  {
    id: 2,
    slug: "vong-tay-da-mat-ho",
    src: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    alt: "Vòng tay đá mắt hổ",
    name: "Vòng Tay Đá Mắt Hổ",
    oldPrice: 900000,
    newPrice: 780000,
    star: 5,
    percent: 15,
  },
  {
    id: 3,
    slug: "vong-tay-da-hematite",
    src: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    alt: "Vòng tay đá Hematite",
    name: "Vòng Tay Đá Hematite",
    oldPrice: 600000,
    newPrice: 500000,
    star: 4.6,
    percent: 17,
  },
  {
    id: 4,
    slug: "vong-tay-tram-huong",
    src: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    alt: "Vòng tay trầm hương",
    name: "Vòng Tay Trầm Hương Cao Cấp",
    oldPrice: 1200000,
    newPrice: 1000000,
    star: 4.9,
    percent: 16,
  },
  {
    id: 5,
    slug: "vong-tay-da-lam-ngoc",
    src: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
    alt: "Vòng tay đá lam ngọc",
    name: "Vòng Tay Đá Lam Ngọc",
    oldPrice: 850000,
    newPrice: 730000,
    star: 4.7,
    percent: 14,
  },
];
