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
    id: 2,
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
    id: 3,
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
    percent: 18,
    colors: ["Tím", "Hồng nhạt"],
  },
  {
    id: 4,
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
    percent: 23,
    colors: ["Tím", "Hồng"],
  },
  {
    id: 5,
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
    percent: 25,
    colors: ["Tím", "Hồng nhạt"],
  },
  {
    id: 6,
    slug: "vong-tay-ocean-bloom",
    images: {
      main: "https://res.cloudinary.com/dai92e7cq/image/upload/v1744564841/ocean-main_rfdwfl.jpg",
      gallery: [
        "https://res.cloudinary.com/dai92e7cq/image/upload/v1744564841/ocean-1_naynrp.jpg",
        "https://res.cloudinary.com/dai92e7cq/image/upload/v1744564840/ocean-2_tpjjsp.jpg",
      ],
    },
    alt: "Vòng tay ocean bloom",
    name: "Vòng Tay Ocean Bloom",
    description:
      "Chiếc vòng tay Ocean Bloom là sự hòa quyện nhẹ nhàng giữa màu sắc của đại dương và sự trong trẻo của thiên nhiên. Lấy cảm hứng từ sắc xanh của sóng biển, sắc tím – hồng nhạt của san hô và ánh sáng lung linh trên mặt nước, chiếc vòng mang đến cảm giác dịu dàng và thanh khiết. Các hạt đá hình hoa và lá được xâu tỉ mỉ trên nền dây dù nâu nhạt chắc chắn, có thể điều chỉnh kích thước dễ dàng. Với tone màu pastel ngọt ngào như xanh mint, tím lavender, hồng phấn, chiếc vòng không chỉ là phụ kiện, mà còn như một mảnh ghép của biển cả dịu êm được gói gọn trên cổ tay. Phù hợp với những ai yêu phong cách nữ tính, bay bổng và yêu thiên nhiên, đại dương.",
    price: 35000,
    star: 4.9,
    percent: 10,
    colors: ["Xanh pastel”, “Hồng nhạt”, “Tím nhạt"],
  },
  {
    id: 7,
    slug: "vong-tay-ruby-whispers",
    images: {
      main: "https://res.cloudinary.com/dai92e7cq/image/upload/v1744564841/ruby_erjtqj.jpg",
      gallery: [
        "https://res.cloudinary.com/dai92e7cq/image/upload/v1744564840/ruby-1_jzslqy.jpg",
        "https://res.cloudinary.com/dai92e7cq/image/upload/v1744564841/ruby-2_omdeij.jpg",
      ],
    },
    alt: "Vòng tay ruby whispers",
    name: "Vòng Tay Ruby Whispers",
    description:
      "Chiếc vòng tay Ruby Bloom là biểu tượng của tình yêu rực cháy, cảm xúc nồng nàn và nét đẹp cổ điển đầy cuốn hút. Lấy cảm hứng từ sắc đỏ của hoa hồng, ánh hoàng hôn vội vã và dấu môi ngọt ngào, chiếc vòng kết hợp hài hòa giữa các charm hình hoa, lá và hạt đá màu đỏ – hồng – nâu sẫm. Nền dây nâu đậm tạo cảm giác ấm áp, trưởng thành và rất dễ phối đồ. Mỗi bông hoa đỏ rực như một nốt nhạc tình ca vang vọng trên cổ tay, dành riêng cho những tâm hồn đam mê, quyến rũ và luôn sống hết mình với cảm xúc. Đây là món phụ kiện lý tưởng cho những buổi hẹn hò, những outfit có tone trầm hoặc để làm nổi bật phong cách cá nhân.",
    price: 35000,
    star: 4.8,
    percent: 15,
    colors: ["Đỏ ruby", "Hồng phấn", "Nâu đất"],
  },
  {
    id: 8,
    slug: "vong-tay-da-mat-ho-nau",
    images: {
      main: "https://res.cloudinary.com/dn8z3mhbs/image/upload/v1744597065/SEO_-_DESIGN_1_bytxmx.jpg",
      gallery: [
        "https://res.cloudinary.com/dn8z3mhbs/image/upload/v1744597064/SEO_-_DESIGN_2_kcvaj5.jpg",
        "https://res.cloudinary.com/dn8z3mhbs/image/upload/v1744596760/SEO_-_DESIGN_ked1px.jpg",
      ],
    },
    alt: "Vòng tay đá mắt hổ nâu",
    name: "Vòng Tay Đá Mắt Hổ Nâu",
    description:
      "Vòng tay đá mắt hổ nâu không chỉ là một phụ kiện thời trang mà còn mang ý nghĩa phong thủy sâu sắc. Loại đá này được biết đến với khả năng kích thích lòng dũng cảm, sự tự tin và ý chí mạnh mẽ. Khi đeo vòng tay đá mắt hổ, bạn sẽ cảm nhận được nguồn năng lượng tích cực lan tỏa, giúp tăng cường sự quyết đoán trong các tình huống quan trọng. Ngoài ra, vòng còn hỗ trợ cải thiện khả năng tập trung, giữ vững tinh thần và thúc đẩy sự kiên định trong công việc cũng như trong cuộc sống hằng ngày. Đây là lựa chọn hoàn hảo cho những ai đang tìm kiếm sự bảo vệ tinh thần và động lực nội tại để vượt qua thử thách.",
    price: 400000,
    star: 4.7,
    percent: 10,
    colors: ["Nâu", "Vàng đồng"],
  },
  {
    id: 9,
    slug: "vong-tay-da-ngu-sac",
    images: {
      main: "https://res.cloudinary.com/dn8z3mhbs/image/upload/v1744597585/9_dpxpf2.jpg",
      gallery: [
        "https://res.cloudinary.com/dn8z3mhbs/image/upload/v1744597532/SEO_-_DESIGN_3_qlkt1h.jpg",
        "https://res.cloudinary.com/dn8z3mhbs/image/upload/v1744597532/SEO_-_DESIGN_4_kpf9fa.jpg",
      ],
    },
    alt: "Vòng tay đá ngũ sắc",
    name: "Vòng Tay Đá Ngũ Sắc",
    description:
    "Sản phẩm vòng tay thủ công tinh tế, được chế tác tỉ mỉ từ 5 loại đá thiên nhiên đại diện cho ngũ hành: Kim, Mộc, Thủy, Hỏa, Thổ. Mỗi loại đá mang một nguồn năng lượng riêng, khi kết hợp lại tạo nên sự hài hòa và cân bằng trong phong thủy. Không chỉ tôn lên vẻ đẹp thẩm mỹ độc đáo, chiếc vòng còn giúp điều hòa sinh khí, hỗ trợ cải thiện sức khỏe, thu hút tài lộc và mang lại sự an yên trong tâm trí. Đây là món phụ kiện lý tưởng cho những ai yêu thích sự giao hòa giữa nghệ thuật và năng lượng tự nhiên.",
    price: 100000,
    star: 4.9,
    percent: 15,
    colors: ["Đỏ", "Xanh lá", "Xanh biển", "Trắng", "Vàng"],
  },
  {
    id: 10,
    slug: "vong-tay-hoi-tho-bien",
    images: {
      main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1744598146/8_yj5hqv.jpg",
      gallery: [
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1744598146/10_nqh2d4.jpg",
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1744598146/11_tyfvx6.jpg",
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1744598146/9_tbtzab.jpg",
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1744598146/9_tbtzab.jpg",
      ],
    },
    alt: "Vòng tay hơi thở biển",
    name: "Vòng Tay Hơi Thở Biển",
    description:
      "Bộ sưu tập vòng tay hơi thở biển là chuỗi thiết kế handmade độc đáo lấy cảm hứng từ vẻ đẹp của đại dương – từ dịu dàng đến mãnh liệt. Mỗi chiếc vòng mang một sắc thái riêng: 'Biển Hồng' ngọt ngào và nữ tính, 'Biển Đỏ' rực rỡ cuốn hút, 'Biển Vắng' trầm lắng và hoài niệm, 'Biển Đêm' huyền bí, sâu thẳm. Tất cả được làm thủ công tỉ mỉ, sử dụng dây dù bền chắc và các charm vỏ sò, sao biển, ngọc trai… phù hợp với nhiều phong cách và sở thích. Chỉ với 35.000 VNĐ, bạn có thể mang theo một “mảnh biển” bên mình – dịu êm, đầy cảm hứng.",
    price: 50000,
    star: 4.9,
    percent: 18,
    colors: ["Biển Hồng", "Biển Đỏ", "Biển Vắng", "Biển Đêm"],
  },
  {
    id: 11,
    slug: "vong-tay-inside-out-2",
    images: {
      main: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1744598775/12_hcowpq.jpg",
      gallery: [
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1744598776/13_j1wgop.jpg",
        "https://res.cloudinary.com/dkww5mgnf/image/upload/v1744598776/14_cw6fvl.jpg",
      ],
    },
    alt: "Vòng tay Inside Out 2 cảm xúc",
    name: "Vòng Tay Inside Out 2 – Những Mảnh Ghép Cảm Xúc",
    description:
      "Lấy cảm hứng từ bộ phim hoạt hình nổi bật Inside Out 2 (2024), vòng tay `Những Mảnh Ghép Cảm Xúc` là bộ sưu tập phụ kiện handmade thể hiện ba sắc thái cảm xúc đặc trưng: Anger (Giận dữ), Anxiety (Lo âu) và Embarrassment (Ngại ngùng). Mỗi chiếc vòng tay là một biểu tượng nhỏ của cảm xúc – với phối màu và charm đặc trưng cho từng nhân vật: đỏ rực mạnh mẽ, cam cháy và hồng pastel dịu dàng. Dây dù thủ công chắc chắn, charm chất lượng cao và kích thước có thể điều chỉnh linh hoạt. Đây không chỉ là phụ kiện, mà còn là món quà tinh thần độc đáo dành tặng bản thân hoặc bạn bè, thể hiện trọn vẹn cá tính và tâm trạng. Giá siêu mềm chỉ 42.000 VNĐ!",
    price: 42000,
    star: 4.9,
    percent: 24,
    colors: [
      "Anger (Đỏ rực)",
      "Anxiety (Cam cháy)",
      "Embarrassment (Hồng pastel)",
    ],
  },
];
