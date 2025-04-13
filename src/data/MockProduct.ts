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
  // {
  //   id: 1,
  //   slug: "vong-tay-da-thach-anh-tim",
  //   images: {
  //     main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
  //     gallery: [
  //       "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
  //       "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
  //     ],
  //   },
  //   alt: "Vòng tay đá thạch anh tím",
  //   name: "Vòng Tay Đá Thạch Anh Tím",
  //   description:
  //     "Vòng tay đá thạch anh tím mang lại năng lượng tích cực, giúp giảm căng thẳng và tăng cường tập trung.Vòng tay đá mắt hổ mang lại sự tự tin, giúp cải thiện khả năng quyết đoán và tăng cường sức mạnh tinh thần.Vòng tay đá mắt hổ mang lại sự tự tin, giúp cải thiện khả năng quyết đoán và tăng cường sức mạnh tinh thần.Vòng tay đá mắt hổ mang lại sự tự tin, giúp cải thiện khả năng quyết đoán và tăng cường sức mạnh tinh thần.",
  //   price: 750000,
  //   star: 4.8,
  //   percent: 13,
  //   colors: ["Tím", "Hồng nhạt"],
  // },
  // {
  //   id: 2,
  //   slug: "vong-tay-da-mat-ho",
  //   images: {
  //     main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
  //     gallery: [
  //       "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502960/3_tuabai.jpg",
  //       "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502961/4_tuabai.jpg",
  //     ],
  //   },
  //   alt: "Vòng tay đá mắt hổ",
  //   name: "Vòng Tay Đá Mắt Hổ",
  //   description:
  //     "Vòng tay đá mắt hổ mang lại sự tự tin, giúp cải thiện khả năng quyết đoán và tăng cường sức mạnh tinh thần.",
  //   price: 900000,
  //   star: 5,
  //   percent: 15,
  //   sizes: ["M", "L"],
  // },
  // {
  //   id: 3,
  //   slug: "vong-tay-da-hematite",
  //   images: {
  //     main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
  //     gallery: [
  //       "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502960/3_tuabai.jpg",
  //       "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502961/4_tuabai.jpg",
  //     ],
  //   },
  //   alt: "Vòng tay đá Hematite",
  //   name: "Vòng Tay Đá Hematite",
  //   description:
  //     "Vòng tay đá Hematite giúp cân bằng năng lượng, giảm căng thẳng và tăng cường khả năng tập trung.",
  //   price: 600000,
  //   star: 4.6,
  //   percent: 17,
  //   colors: ["Xám bạc", "Đen"],
  // },
  // {
  //   id: 4,
  //   slug: "vong-tay-tram-huong",
  //   images: {
  //     main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
  //     gallery: [
  //       "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502960/3_tuabai.jpg",
  //     ],
  //   },
  //   alt: "Vòng tay trầm hương",
  //   name: "Vòng Tay Trầm Hương Cao Cấp",
  //   description:
  //     "Vòng tay trầm hương mang lại hương thơm dễ chịu, giúp thư giãn tinh thần và cải thiện giấc ngủ.",
  //   price: 1200000,
  //   star: 4.9,
  //   percent: 16,
  //   sizes: ["M", "L"],
  // },
  // {
  //   id: 5,
  //   slug: "vong-tay-da-lam-ngoc",
  //   images: {
  //     main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502959/2_tuabai.jpg",
  //     gallery: [
  //       "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743502960/3_tuabai.jpg",
  //     ],
  //   },
  //   alt: "Vòng tay đá lam ngọc",
  //   name: "Vòng Tay Đá Lam Ngọc",
  //   description:
  //     "Vòng tay đá lam ngọc tượng trưng cho sự may mắn, bình an và giúp cải thiện trực giác.",
  //   price: 850000,
  //   star: 4.7,
  //   percent: 14,
  //   colors: ["Xanh lam", "Xanh ngọc"],
  // },
  {
    id: 10,
    slug: "vong-tay-conal-pink",
    images: {
      main: "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535659/2_bixzpm.png",
      gallery: [
        "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535659/2_bixzpm.png",
        "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535659/2_bixzpm.png",
      ],
    },
    alt: "Vòng tay conal pink",
    name: "Vòng tay Conal Pink",
    description:
      "Vòng tay Coral Pink là mẫu vòng tay handmade dễ thương đến từ BracyCrafts, mang gam màu hồng san hô nhẹ nhàng kết hợp cùng charm sao biển, vỏ sò và hạt giả ngọc trai, tạo nên một thiết kế đậm chất biển cả và nữ tính. Sản phẩm được làm thủ công tỉ mỉ, sử dụng dây cotton bền chắc, có thể điều chỉnh kích thước linh hoạt, phù hợp với nhiều size tay. Với mức giá chỉ 35.000 VNĐ, đây là lựa chọn lý tưởng cho các bạn gái yêu phong cách mộng mơ, nhẹ nhàng hoặc đang tìm kiếm món quà nhỏ xinh tặng bạn bè, người yêu. Vòng tay coral pink không chỉ là phụ kiện thời trang mà còn là điểm nhấn thể hiện cá tính riêng, phù hợp để phối cùng váy, áo trễ vai hay phong cách nàng thơ.",
    price: 35000,
    star: 4.8,
    percent: 20,
    colors: ["Tím", "Hồng nhạt"],
  },
  {
    id: 11,
    slug: "vong-tay-magenta-glow",
    images: {
      main: "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535668/3_zv1jfs.png",
      gallery: [
        "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535668/3_zv1jfs.png",
        "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535668/3_zv1jfs.png",
      ],
    },
    alt: "Vòng tay magenta glow",
    name: "Vòng Tay Magenta Glow",
    description:
      "Vòng tay Magenta Glow là mẫu vòng tay handmade mang sắc tím hồng dịu dàng, kết hợp các charm vỏ sò, sao biển và hạt ngọc lấp lánh như ánh chiều tà. Thiết kế mềm mại, nữ tính, được làm thủ công tỉ mỉ từ chất liệu dây dù bền chắc, dễ dàng điều chỉnh theo cổ tay. Với mức giá chỉ 35.000 VNĐ, vòng tay magenta glow là lựa chọn hoàn hảo cho những cô nàng yêu thích sự thơ mộng, bay bổng và muốn tìm một phụ kiện nhỏ xinh mang lại cảm hứng biển cả.",
    price: 35000,
    star: 4.8,
    percent: 20,
    colors: ["Tím", "Hồng nhạt"],
  },
  {
    id: 12,
    slug: "vong-tay-underwater-world",
    images: {
      main: "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535667/4_qi3ruu.png",
      gallery: [
        "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535667/4_qi3ruu.png",
        "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535667/4_qi3ruu.png",
      ],
    },
    alt: "Vòng tay underwater world",
    name: "Vòng Tay Underwater World",
    description:
      "Vòng tay Underwater World Bracelet là mẫu vòng tay handmade màu xanh biển độc đáo, lấy cảm hứng từ lòng đại dương huyền bí. Với các charm cá heo, vỏ sò, sao biển và hạt ngọc xanh ngọc lam, sản phẩm mang lại cảm giác tươi mát và năng động. Mẫu vòng tay này phù hợp với những bạn yêu biển, yêu khám phá và luôn muốn mang theo một chút `ocean vibes` bên mình. Dây rút chắc chắn, dễ điều chỉnh, giá chỉ 35.000 VNĐ – một món quà tuyệt vời dành tặng cho chính bạn hoặc người thân yêu thích phong cách vòng tay handmade phong cách biển, xanh mát, trẻ trung.",
    price: 35000,
    star: 4.8,
    percent: 20,
    colors: ["Tím", "Hồng nhạt"],
  },
  {
    id: 13,
    slug: "vong-tay-midas-sea",
    images: {
      main: "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535656/5_vfrf6d.png",
      gallery: [
        "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535656/5_vfrf6d.png",
        "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535656/5_vfrf6d.png",
      ],
    },
    alt: "Vòng tay midas sea",
    name: "Vòng Tay Midas Sea",
    description:
	"Midas Sea là mẫu vòng tay handmade mang tone vàng ánh kim sang trọng, điểm xuyết các charm sao biển, cánh bướm và hạt ngọc ánh vàng rực rỡ như hoàng hôn trên mặt biển. Thiết kế nhẹ nhàng nhưng nổi bật, dễ phối đồ và phù hợp với những bạn yêu thích phong cách nữ tính nhưng vẫn muốn tạo điểm nhấn cá tính riêng. Với giá cực kỳ hợp lý – chỉ 35.000 VNĐ – vòng tay Midas Sea là lựa chọn không thể bỏ lỡ nếu bạn đang tìm kiếm vòng tay handmade vàng kim, nổi bật, đẹp rẻ cho mùa hè năm nay.",
    price: 35000,
    star: 4.8,
    percent: 20,
    colors: ["Tím", "Hồng nhạt"],
  },
  {
    id: 14,
    slug: "vong-tay-red-tide",
    images: {
      main: "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535659/6_t59dxi.png",
      gallery: [
        "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535659/6_t59dxi.png",
        "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744535659/6_t59dxi.png",
      ],
    },
    alt: "Vòng tay red tide",
    name: "Vòng Tay Red Tide",
    description:
      "Vòng tay Red Tide là mẫu vòng tay handmade độc đáo với tone đỏ – đen nổi bật, dành riêng cho những ai cá tính, mạnh mẽ và yêu thích sự bí ẩn. Các charm sao biển, đầu lâu, vỏ sò được sắp xếp hài hòa trên nền dây đen rút chắc chắn, dễ điều chỉnh kích thước. Đây là lựa chọn lý tưởng cho những bạn yêu vibe biển đêm, huyền bí hoặc đang tìm kiếm món phụ kiện phá cách cho outfit thường ngày. Với mức giá chỉ 35.000 VNĐ, Red Tide chính là điểm nhấn hoàn hảo cho phong cách vòng tay handmade đỏ đen – cool ngầu – chất riêng của bạn.",
    price: 35000,
    star: 4.8,
    percent: 20,
    colors: ["Tím", "Hồng nhạt"],
  },
];
