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
  {
    id: 6,
    slug: "vong-tay-ocean-bloom",
    images: {
      main: "https://res.cloudinary.com/dai92e7cq/image/upload/v1745230024/vong-tay-ocean-bloom_x8n5v8.png",
      gallery: [
        "https://res.cloudinary.com/dai92e7cq/image/upload/v1745230024/vong-tay-ocean-bloom_x8n5v8.png",
        "https://res.cloudinary.com/dai92e7cq/image/upload/v1745230024/vong-tay-ocean-bloom_x8n5v8.png",
      ],
    },
    alt: "Vòng tay ocean bloom",
    name: "Vòng Tay Ocean Bloom",
    description:
      "Chiếc vòng tay Ocean Bloom là sự hòa quyện nhẹ nhàng giữa màu sắc của đại dương và sự trong trẻo của thiên nhiên. Lấy cảm hứng từ sắc xanh của sóng biển, sắc tím – hồng nhạt của san hô và ánh sáng lung linh trên mặt nước, chiếc vòng mang đến cảm giác dịu dàng và thanh khiết. Các hạt đá hình hoa và lá được xâu tỉ mỉ trên nền dây dù nâu nhạt chắc chắn, có thể điều chỉnh kích thước dễ dàng. Với tone màu pastel ngọt ngào như xanh mint, tím lavender, hồng phấn, chiếc vòng không chỉ là phụ kiện, mà còn như một mảnh ghép của biển cả dịu êm được gói gọn trên cổ tay. Phù hợp với những ai yêu phong cách nữ tính, bay bổng và yêu thiên nhiên, đại dương.",
    price: 40000,
    star: 4.9,
    percent: 10,
    colors: ["Xanh pastel", "Hồng nhạt", "Tím nhạt"],
  },
  {
    id: 7,
    slug: "vong-tay-ruby-whispers",
    images: {
      main: "https://res.cloudinary.com/dai92e7cq/image/upload/v1745230024/vong-tay-ruby-whispers_y1iumo.png",
      gallery: [
        "https://res.cloudinary.com/dai92e7cq/image/upload/v1745230024/vong-tay-ruby-whispers_y1iumo.png",
        "https://res.cloudinary.com/dai92e7cq/image/upload/v1745230024/vong-tay-ruby-whispers_y1iumo.png",
      ],
    },
    alt: "Vòng tay ruby whispers",
    name: "Vòng Tay Ruby Whispers",
    description:
      "Chiếc vòng tay Ruby Bloom là biểu tượng của tình yêu rực cháy, cảm xúc nồng nàn và nét đẹp cổ điển đầy cuốn hút. Lấy cảm hứng từ sắc đỏ của hoa hồng, ánh hoàng hôn vội vã và dấu môi ngọt ngào, chiếc vòng kết hợp hài hòa giữa các charm hình hoa, lá và hạt đá màu đỏ – hồng – nâu sẫm. Nền dây nâu đậm tạo cảm giác ấm áp, trưởng thành và rất dễ phối đồ. Mỗi bông hoa đỏ rực như một nốt nhạc tình ca vang vọng trên cổ tay, dành riêng cho những tâm hồn đam mê, quyến rũ và luôn sống hết mình với cảm xúc. Đây là món phụ kiện lý tưởng cho những buổi hẹn hò, những outfit có tone trầm hoặc để làm nổi bật phong cách cá nhân.",
    price: 40000,
    star: 4.8,
    percent: 20,
    colors: ["Đỏ ruby", "Hồng phấn", "Nâu đất"],
  },
  {
    id: 12,
    slug: "vong-tay-crystal-rainbow",
    images: {
      main: "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574760/20_jmxl9v.jpg",
      gallery: [
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574760/20_jmxl9v.jpg",
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574760/20_jmxl9v.jpg",
      ],
    },
    alt: "Vòng tay crystal rainbow",
    name: "Vòng Tay Crystal  Rainbow",
    description:
      "Chiếc vòng tay Crystal Rainbow là sự kết hợp tuyệt vời của những viên đá tinh thể màu sắc rực rỡ, mang đến vẻ đẹp nổi bật và ấn tượng. Được làm từ những viên đá pha lê tinh xảo, chiếc vòng này không chỉ thu hút ánh nhìn mà còn đem lại sự tươi mới và sinh động cho cổ tay bạn. Mỗi màu sắc từ xanh dương, vàng, cam, xanh lá, tạo nên một dải cầu vồng lung linh, phản chiếu ánh sáng một cách tuyệt đẹp. Với thiết kế đơn giản, nhưng đầy tinh tế, chiếc vòng tay này có thể điều chỉnh dễ dàng, phù hợp với nhiều kích thước cổ tay. Vòng tay Crystal Rainbow sẽ là món phụ kiện không thể thiếu cho những ai yêu thích sự rực rỡ, tươi vui và mong muốn thể hiện cá tính sáng tạo của mình. Hãy để chiếc vòng này trở thành điểm nhấn thú vị cho mỗi ngày của bạn!",
    price: 150000,
    star: 4.9,
    percent: 15,
    colors: ["Cầu vồng tone nóng", "Cầu vồng tone lạnh"],
  },
  {
    id: 13,
    slug: "vong-tay-fairy-dew",
    images: {
      main: "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574760/21_xcgxr0.jpg",
      gallery: [
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574760/21_xcgxr0.jpg",
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574760/21_xcgxr0.jpg",
      ],
    },
    alt: "Vòng tay fairy dew",
    name: "Vòng Tay Fairy Dew",
    description:
      "Chiếc vòng tay Fairy Dew mang đến vẻ đẹp nhẹ nhàng và thanh thoát như một làn sương mai trong sáng. Được làm từ những viên đá tinh thể trong suốt, pha lẫn màu pastel ngọt ngào như hồng phấn, xanh da trời và tím nhạt, chiếc vòng tạo nên một dải màu sắc dịu dàng, tươi tắn. Thiết kế thanh thoát với những viên đá được xâu chuỗi tinh tế, tạo cảm giác mềm mại và nữ tính. Với dây buộc có thể điều chỉnh, vòng tay dễ dàng vừa vặn với mọi kích thước cổ tay, giúp bạn thoải mái khi đeo. Vòng tay Fairy Dew không chỉ là món phụ kiện tuyệt vời cho những ai yêu thích phong cách nhẹ nhàng, trong sáng mà còn là một món quà ý nghĩa cho những ai muốn thêm chút lung linh vào cuộc sống của mình.",
    price: 150000,
    star: 4.8,
    percent: 15,
    colors: ["Dây đen", "Dây trắng", "Dây xanh nhạt"],
  },
  {
    id: 14,
    slug: "vong-tay-ca-con",
    images: {
      main: "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574760/10_ursjqr.jpg",
      gallery: [
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574760/10_ursjqr.jpg",
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574760/10_ursjqr.jpg",
      ],
    },
    alt: "Vòng tay cá con",
    name: "Vòng Tay Cá Con",
    description:
      "Chiếc vòng tay Cá Con là một món phụ kiện đáng yêu và dễ thương, được thiết kế tinh xảo với hình dáng cá con dễ thương làm điểm nhấn chính. Các viên đá mịn màng, màu sắc nhẹ nhàng như trắng, hồng và xám tạo nên một sự kết hợp nhẹ nhàng, thanh thoát. Đặc biệt, hình cá con với đôi mắt đen láy càng làm tăng thêm vẻ ngộ nghĩnh, dễ thương cho chiếc vòng. Với dây thun có thể điều chỉnh, chiếc vòng tay dễ dàng vừa vặn với cổ tay của bạn, mang đến cảm giác thoải mái khi đeo. Vòng tay Cá Con là sự lựa chọn tuyệt vời cho những ai yêu thích sự nhẹ nhàng, dễ thương và có một chút gì đó tinh nghịch. Hãy để chiếc vòng này làm bạn thêm phần nổi bật với vẻ đáng yêu đầy cuốn hút!",
    price: 25000,
    star: 4.7,
    percent: 10,
    colors: ["Cam trắng", "Hồng trắng", "Xanh trắng"],
  },
  {
    id: 15,
    slug: "vong-tay-forest-blossom",
    images: {
      main: "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/19_u5yc6g.jpg",
      gallery: [
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/19_u5yc6g.jpg",
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/19_u5yc6g.jpg",
      ],
    },
    alt: "Vòng tay forest blossom",
    name: "Vòng Tay Forest Blossom",
    description:
      "Chiếc vòng tay Forest Blossom mang vẻ đẹp ngọt ngào và tinh tế, như một khu rừng hoa đầy sắc màu tươi mới. Các viên đá được thiết kế thành hình hoa nhỏ, với đủ các sắc thái từ hồng phấn, xanh lá, đến tím và vàng nhạt, tạo nên một dải màu rực rỡ nhưng không kém phần dịu dàng. Hình ảnh những bông hoa mọc tựa như trong một khu vườn xinh đẹp, mang đến cảm giác thanh bình và dễ chịu. Với dây thun có thể điều chỉnh kích thước, vòng tay dễ dàng vừa vặn với cổ tay của bạn, giúp bạn thoải mái khi đeo. Vòng tay Forest Blossom là món phụ kiện lý tưởng cho những ai yêu thích sự nhẹ nhàng, nữ tính và hòa mình vào thiên nhiên. Hãy để chiếc vòng này trở thành điểm nhấn tuyệt vời cho phong cách của bạn!",
    price: 150000,
    star: 4.9,
    percent: 15,
    colors: ["Hồng xanh lá", "Tím xanh lá", "Cam xanh lá"],
  },
  {
    id: 16,
    slug: "vong-tay-ocean-mood",
    images: {
      main: "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/13_slmrk1.jpg",
      gallery: [
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/13_slmrk1.jpg",
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/13_slmrk1.jpg",
      ],
    },
    alt: "Vòng tay ocean mood",
    name: "Vòng Tay Ocean Mood",
    description:
      "Chiếc vòng tay Ocean Mood mang đến cảm giác như làn sóng vỗ về nhẹ nhàng từ biển cả bao la. Với thiết kế lấy cảm hứng từ đại dương, chiếc vòng có các viên đá trong suốt pha lẫn màu xanh biển tươi mát, kết hợp với hình ngôi sao biển xinh xắn làm điểm nhấn. Mỗi viên đá, mỗi chi tiết nhỏ đều gợi lên hình ảnh của những làn sóng mát lành, của không gian biển cả rộng lớn và đầy sức sống. Với dây thun có thể điều chỉnh, chiếc vòng tay này dễ dàng phù hợp với mọi cổ tay, mang lại sự thoải mái khi đeo. Vòng tay Ocean Mood là món phụ kiện lý tưởng cho những ai yêu thích sự nhẹ nhàng, tươi mới và luôn mong muốn có một chút hơi thở của đại dương trong cuộc sống hàng ngày.",
    price: 30000,
    star: 4.8,
    percent: 10,
    colors: ["Xanh biển", "Hồng nhạt", "Tím nhạt"],
  },
  {
    id: 17,
    slug: "vong-tay-pinky-glow",
    images: {
      main: "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/18_okdmta.jpg",
      gallery: [
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/18_okdmta.jpg",
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/18_okdmta.jpg",
      ],
    },
    alt: "Vòng tay pinky glow",
    name: "Vòng Tay Pinky Glow",
    description:
      "Chiếc vòng tay Pinky Glow là sự kết hợp tuyệt vời giữa sắc hồng ngọt ngào và sự tinh tế của những viên đá pha lê lấp lánh. Với thiết kế mềm mại, vòng tay này mang đến vẻ đẹp nữ tính, nhẹ nhàng và đầy quyến rũ. Các viên đá nhỏ hình hoa, kết hợp với màu sắc pastel như hồng phấn, tím nhạt và trắng, tạo nên một dải màu sắc hài hòa, dễ thương. Điểm nhấn đặc biệt là những chi tiết hoa nhỏ xinh, mang lại cảm giác tươi mới, rực rỡ. Với dây thun có thể điều chỉnh, vòng tay này dễ dàng vừa vặn với cổ tay của bạn, mang lại sự thoải mái và tự tin khi đeo. Vòng tay Pinky Glow là món phụ kiện lý tưởng cho những ai yêu thích vẻ đẹp ngọt ngào, nhẹ nhàng và luôn muốn thêm phần rực rỡ cho phong cách của mình. Hãy để chiếc vòng này là điểm nhấn ngọt ngào trong bộ sưu tập phụ kiện của bạn.",
    price: 150000,
    star: 4.9,
    percent: 15,
    colors: ["Hồng phấn", "Hồng cam", "Hồng sen"],
  },
  {
    id: 18,
    slug: "vong-tay-hoa-gom-nho",
    images: {
      main: "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/9_mbyifj.jpg",
      gallery: [
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/9_mbyifj.jpg",
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/9_mbyifj.jpg",
      ],
    },
    alt: "Vòng tay hoa gốm nhỏ",
    name: "Vòng Tay Hoa Gốm Nhỏ",
    description:
      "Chiếc vòng tay Hoa Gốm Nhỏ mang đến vẻ đẹp dịu dàng, ngọt ngào và vô cùng tinh tế. Với những hạt charm gốm nhỏ xinh, màu sắc pastel nhẹ nhàng như hồng, xanh dương và trắng, chiếc vòng này dễ dàng chinh phục mọi ánh nhìn. Điểm nhấn nổi bật chính là hoa gốm nhỏ xinh ở giữa, tạo nên sự nổi bật và ấn tượng nhẹ nhàng, như một cánh hoa đọng lại giữa không gian. Với dây thun có thể điều chỉnh kích thước, vòng tay này mang lại sự thoải mái, dễ dàng vừa vặn với cổ tay của bạn. Vòng tay Hoa Gốm Nhỏ là lựa chọn tuyệt vời cho những ai yêu thích sự nữ tính, thanh thoát và muốn thêm phần ngọt ngào, dễ thương vào phong cách cá nhân. Hãy để chiếc vòng này là món quà tuyệt vời dành cho chính bạn hoặc người thân yêu.",
    price: 30000,
    star: 4.7,
    percent: 10,
    colors: ["Hoa xanh", "Hoa hồng", "Hoa trắng"],
  },
  {
    id: 19,
    slug: "vong-tay-winter-butterfly",
    images: {
      main: "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/12_ju2gwd.jpg",
      gallery: [
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/12_ju2gwd.jpg",
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/12_ju2gwd.jpg",
      ],
    },
    alt: "Vòng tay winter butterfly",
    name: "Vòng Tay Winter Butterfly",
    description:
      "Chiếc vòng tay Winter Butterfly mang đến vẻ đẹp huyền bí và tinh tế, như một làn gió lạnh mùa đông mang theo sự nhẹ nhàng của cánh bướm lướt qua. Với các viên đá nhỏ xinh màu trắng, bạc và xám, vòng tay tạo ra một không gian vừa mơ màng vừa thanh thoát. Điểm nhấn đặc biệt là chiếc cánh bướm lấp lánh ở giữa, mang đến cảm giác tự do, bay bổng và đầy lôi cuốn. Với dây thun có thể điều chỉnh, chiếc vòng tay này dễ dàng vừa vặn với cổ tay của bạn, giúp bạn thoải mái khi đeo. Vòng tay Winter Butterfly là món phụ kiện lý tưởng cho những ai yêu thích sự nhẹ nhàng, thanh thoát và muốn thể hiện phong cách nữ tính, đầy lãng mạn. Hãy để chiếc vòng này trở thành điểm nhấn độc đáo cho phong cách của bạn.",
    price: 35000,
    star: 4.8,
    percent: 10,
    colors: ["Trắng", "Xanh", "Be"],
  },
  {
    id: 20,
    slug: "vong-tay-tiny-tulip",
    images: {
      main: "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/11_yohfc8.jpg",
      gallery: [
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/11_yohfc8.jpg",
        "https://res.cloudinary.com/dbr85jktp/image/upload/v1745574759/11_yohfc8.jpg",
      ],
    },
    alt: "Vòng tay tiny tulip",
    name: "Vòng Tay Tiny Tulip",
    description:
      "Chiếc vòng tay Tiny Tulip mang đến vẻ đẹp dịu dàng và dễ thương như những cánh hoa tulip nhỏ xinh. Các viên đá pastel nhẹ nhàng kết hợp với những chi tiết hoa và lá mềm mại, tạo ra một dải màu tươi tắn, từ hồng nhẹ, xanh lá cho đến trắng trong suốt, mang lại cảm giác thư giãn và tươi mới. Điểm nhấn đặc biệt chính là bông hoa tulip nhỏ xinh ở giữa, gợi lên sự dịu dàng và nữ tính. Với dây thun có thể điều chỉnh, chiếc vòng tay này dễ dàng vừa vặn với cổ tay của bạn, mang lại sự thoải mái và dễ chịu khi đeo. Vòng tay Tiny Tulip là món phụ kiện hoàn hảo cho những ai yêu thích sự nhẹ nhàng, ngọt ngào và muốn thêm phần tươi mới cho phong cách của mình. Hãy để chiếc vòng này là điểm nhấn tinh tế trong bộ sưu tập phụ kiện của bạn!",
    price: 30000,
    star: 4.8,
    percent: 10,
    colors: ["Trắng", "Xanh", "Hồng"],
  },
];
