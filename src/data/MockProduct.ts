export interface Product {
  id: number;
  slug: string;
  alt: string;
  name: string;
  description: string;
  price: number;
  star: number;
  percent: number;
  colors?: string[];
  sizes?: string[];
  images: {
    main: string;
    gallery?: string[];
  };
}

// Danh sách sản phẩm vòng tay
export const products: Product[] = [
  {
    id: 1,
    slug: "vong-tay-da-thach-anh-tim",
    images: {
      main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
      gallery: [
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
      ],
    },
    alt: "Vòng tay đá thạch anh tím",
    name: "Vòng Tay Đá Thạch Anh Tím",
    description:
      "Vòng tay đá thạch anh tím mang lại năng lượng tích cực, giúp giảm căng thẳng và tăng cường tập trung.Vòng tay đá mắt hổ mang lại sự tự tin, giúp cải thiện khả năng quyết đoán và tăng cường sức mạnh tinh thần.Vòng tay đá mắt hổ mang lại sự tự tin, giúp cải thiện khả năng quyết đoán và tăng cường sức mạnh tinh thần.Vòng tay đá mắt hổ mang lại sự tự tin, giúp cải thiện khả năng quyết đoán và tăng cường sức mạnh tinh thần.",
    price: 750000,
    star: 4.8,
    percent: 13,
    colors: ["Tím", "Hồng nhạt"],
  },
  {
    id: 2,
    slug: "vong-tay-da-mat-ho",
    images: {
      main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
      gallery: [
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502960/3_tuabai.jpg",
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502961/4_tuabai.jpg",
      ],
    },
    alt: "Vòng tay đá mắt hổ",
    name: "Vòng Tay Đá Mắt Hổ",
    description:
      "Vòng tay đá mắt hổ mang lại sự tự tin, giúp cải thiện khả năng quyết đoán và tăng cường sức mạnh tinh thần.",
    price: 900000,
    star: 5,
    percent: 15,
    sizes: ["M", "L"],
  },
  {
    id: 3,
    slug: "vong-tay-da-hematite",
    images: {
      main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
      gallery: [
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502960/3_tuabai.jpg",
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502961/4_tuabai.jpg",
      ],
    },
    alt: "Vòng tay đá Hematite",
    name: "Vòng Tay Đá Hematite",
    description:
      "Vòng tay đá Hematite giúp cân bằng năng lượng, giảm căng thẳng và tăng cường khả năng tập trung.",
    price: 600000,
    star: 4.6,
    percent: 17,
    colors: ["Xám bạc", "Đen"],
  },
  {
    id: 4,
    slug: "vong-tay-tram-huong",
    images: {
      main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
      gallery: [
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502960/3_tuabai.jpg",
      ],
    },
    alt: "Vòng tay trầm hương",
    name: "Vòng Tay Trầm Hương Cao Cấp",
    description:
      "Vòng tay trầm hương mang lại hương thơm dễ chịu, giúp thư giãn tinh thần và cải thiện giấc ngủ.",
    price: 1200000,
    star: 4.9,
    percent: 16,
    sizes: ["M", "L"],
  },
  {
    id: 5,
    slug: "vong-tay-da-lam-ngoc",
    images: {
      main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
      gallery: [
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502960/3_tuabai.jpg",
      ],
    },
    alt: "Vòng tay đá lam ngọc",
    name: "Vòng Tay Đá Lam Ngọc",
    description:
      "Vòng tay đá lam ngọc tượng trưng cho sự may mắn, bình an và giúp cải thiện trực giác.",
    price: 850000,
    star: 4.7,
    percent: 14,
    colors: ["Xanh lam", "Xanh ngọc"],
  },
];
