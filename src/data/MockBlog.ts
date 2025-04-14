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
    slug: "ban-la-ai-qua-vong-tay-ban-deo",
    title:
      "Bạn Là Ai Qua Vòng Tay Bạn Đeo? Khám Phá Tính Cách Qua Vòng Tay Handmade",
    description:
      "Vòng tay handmade không chỉ là phụ kiện mà còn phản ánh cá tính, cảm xúc và gu thẩm mỹ của bạn. Cùng BracyCrafts khám phá “chất riêng” qua chiếc vòng bạn chọn!",
    image:
      "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744549638/vn-11134207-7r98o-lwvm8l79kfrv8d_resize_w450_nl_jmw8z7.webp",
    altText: "Các loại vòng tay cho từng người",
    publishedAt: "2025-04-14T08:00:00Z",
    updatedAt: "2025-04-15T10:00:00Z",
    author: "Nguyễn Lê Thanh Huyền",
    category: ["Vòng Tay", "Thời Trang", "phong cách cá nhân"],
    tags: ["vòng tay", "lựa chọn vòng tay", "phong cách", "dáng tay"],
    readingTime: 35,
    canonicalUrl:
      "https://example.com/blog/cach-chon-vong-tay-phu-hop-voi-tung-dang-tay",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Bạn Là Ai Qua Vòng Tay Bạn Đeo? Khám Phá Tính Cách Qua Vòng Tay Handmade",
      datePublished: "2025-04-15T08:00:00Z",
      dateModified: "2025-04-14T10:00:00Z",
      author: {
        "@type": "Person",
        name: "Nguyễn Lê Thanh Huyền",
      },
    },
    sections: [
      {
        id: "section-1",
        type: "heading",
        content: "1. Vòng tay – món phụ kiện biết kể chuyện",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Khi chọn vòng tay cho người tay nhỏ, bạn nên chọn những chiếc vòng có thiết kế thanh mảnh và nhẹ nhàng để tạo sự cân đối.",
        parentId: "section-1",
      },
      {
        type: "paragraph",
        content:
          " Hãy cùng BracyCrafts “giải mã” bản thân qua kiểu vòng bạn yêu thích nhất nhé!",
        parentId: "section-1",
      },
      {
        id: "section-2",
        type: "heading",
        content: "2. Khám phá tính cách qua các kiểu vòng tay handmade",
        level: 2,
      },
      {
        id: "section-2-1",
        type: "heading",
        content: "2.1 Vòng tay tối giản – Người sống nội tâm và trưởng thành",
        level: 3,
        parentId: "section-2",
      },
      {
        type: "paragraph",
        content:
          "Đặc điểm: Dây da, dây vải sáp, không charm hoặc chỉ một chi tiết nhỏ. Màu nâu, đen, xám, be.",
        parentId: "section-2-1",
      },
      {
        type: "paragraph",
        content:
          "Bạn là ai? Bạn là người chín chắn, không thích phô trương. Bạn chọn sự ổn định và yên bình, có gu thẩm mỹ tinh tế và luôn biết mình muốn gì. Cuộc sống của bạn không ồn ào, nhưng lại rất vững chắc.",
        parentId: "section-2-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744595177/vong-tay-bac-nam-don-gian-lta0006_yhneus.jpg",
        altText: "Vòng tay tối giản",
        parentId: "section-2-1",
      },
      {
        id: "section-2-2",
        type: "heading",
        content: "2.2 Vòng tay hạt charm nhỏ – Người mộng mơ, tình cảm",
        level: 3,
        parentId: "section-2",
      },
      {
        type: "paragraph",
        content:
          "Đặc điểm: Hạt đá nhỏ, charm hình ngôi sao, cỏ 4 lá, trái tim… Tông màu pastel, nhẹ nhàng.",
        parentId: "section-2-2",
      },
      {
        type: "paragraph",
        content:
          "Bạn là ai? Bạn là người giàu cảm xúc, sống mộng mơ và dễ rung động. Bạn yêu cái đẹp, hay để ý những điều nhỏ nhặt và có tâm hồn nghệ sĩ. Mỗi chiếc vòng bạn chọn đều mang ý nghĩa riêng, như một món quà cho chính mình.",
        parentId: "section-2-2",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744595177/vn-11134207-7ras8-m1qe55jqqksff8_us9xts.jpg",
        altText: "Vòng tay hạt charm nhỏ",
        parentId: "section-2-2",
      },
      {
        id: "section-2-3",
        type: "heading",
        content: "2.3 Vòng nhiều lớp, bản to – Người cá tính và phá cách",
        level: 3,
        parentId: "section-2",
      },
      {
        type: "paragraph",
        content:
          "Đặc điểm: Mix nhiều chất liệu, dây to, charm độc đáo. Màu sắc nổi bật như đỏ đô, xanh rêu, bạc ánh kim.",
        parentId: "section-2-3",
      },
      {
        type: "paragraph",
        content:
          "Bạn là ai? Bạn luôn muốn nổi bật và khác biệt. Bạn không ngại thử thách, yêu sự sáng tạo và không bao giờ chịu “hòa tan”. Với bạn, chiếc vòng không chỉ là phụ kiện mà là tuyên ngôn cá nhân.",
        parentId: "section-2-3",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744595178/vong-tay-da-phong-thuy-mix-charm-bac-dapu-gemstone-09_koj1tg.jpg",
        altText: "Vòng tay nhiều lớp, bản to",
        parentId: "section-2-3",
      },
      {
        id: "section-2-4",
        type: "heading",
        content: "2.4 Vòng đá phong thủy – Người sâu sắc và hướng nội",
        level: 3,
        parentId: "section-2",
      },
      {
        type: "paragraph",
        content:
          "Đặc điểm: Làm từ đá tự nhiên theo mệnh, charm phong thủy như tỳ hưu, hồ ly, lu thống…",
        parentId: "section-2-4",
      },
      {
        type: "paragraph",
        content:
          "Bạn là ai? Bạn tin vào năng lượng và giá trị tâm linh. Bạn sống chậm, quan sát kỹ, luôn tìm sự cân bằng giữa cảm xúc và lý trí. Vòng tay đối với bạn không chỉ để đeo mà còn để bảo vệ – thu hút năng lượng tích cực.",
        parentId: "section-2-4",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dwaphvnp3/image/upload/v1744595177/get_image_vybfci.jpg",
        altText: "Vòng tay phong thủy",
        parentId: "section-2-4",
      },
      {
        id: "section-3",
        type: "heading",
        content: "3. Chiếc vòng – tấm gương phản chiếu tính cách",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Bạn chọn vòng tay theo cảm xúc hay theo thẩm mỹ? Dù lý do là gì, thì lựa chọn đó vẫn tiết lộ phần nào bản sắc rất riêng của bạn. Vòng tay handmade mang dấu ấn cá nhân không chỉ ở thiết kế, mà còn ở câu chuyện phía sau – một món phụ kiện nhỏ, nhưng mang trong mình sự kết nối rất lớn với chính người đeo.",
        parentId: "section-3",
      },
      {
        id: "section-4",
        type: "heading",
        content: "4. Gợi ý từ BracyCrafts: Thiết kế vòng tay đúng 'chất bạn'",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Tại BracyCrafts, mỗi chiếc vòng là một phiên bản duy nhất – được làm theo gu, màu sắc, bản mệnh, tính cách của chính bạn. Nếu bạn chưa biết mình hợp với kiểu vòng nào, hãy để tụi mình gợi ý theo ngày sinh, cung mệnh hoặc phong cách thời trang nhé!",
        parentId: "section-4",
      },
      {
        type: "paragraph",
        content: "👉 Đặt thiết kế riêng tại đây: https://bracycrafts.id.vn/",
        parentId: "section-4",
      },
      {
        type: "paragraph",
        content:
          "👉 Nhắn tụi mình để tư vấn vòng “chính mình” nhất: https://www.facebook.com/bracycrafts.shop",
        parentId: "section-4",
      },
      {
        id: "section-5",
        type: "heading",
        content: "5. Kết luận – Khi bạn hiểu mình qua vòng tay mình chọn",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Vòng tay không chỉ là vật trang trí. Nó là một phần mở rộng của bản thân bạn – nói thay điều bạn muốn thể hiện, lưu giữ điều bạn tin tưởng, và phản chiếu vẻ đẹp bạn đang mang.",
        parentId: "section-5",
      },
      {
        type: "paragraph",
        content: "Vậy bạn là ai – qua chiếc vòng bạn đeo hôm nay?",
        parentId: "section-5",
      },
      {
        type: "paragraph",
        content:
          "#vòngtayhandmade #BracyCrafts #vòngtayphongcách #vòngtayphongthủy #vòngtaycustom #vòngtayđẹp",
        parentId: "section-5",
      },
    ],
  },
  {
    slug: "bat-mi-bi-quyet-phoi-do-cung-vong-tay",
    title:
      "Bật mí bí quyết phối đồ cùng vòng tay - Khẳng định phong cách cá nhân",
    description:
      "Khám phá cách phối vòng tay handmade theo từng phong cách thời trang từ tối giản đến cá tính, giúp bạn thể hiện cá tính riêng một cách tinh tế.",
    image:
      "https://res.cloudinary.com/dai92e7cq/image/upload/v1744566031/Screenshot_2025-04-14_003936_dw7q1d.png",
    altText: "Vòng tay handmade thiết kế theo phong cách cá nhân",
    publishedAt: "2025-04-14T08:00:00Z",
    updatedAt: "2025-04-14T08:00:00Z",
    author: "Nguyễn Ngọc Thanh Tuyền",
    category: ["Vòng Tay", "Thời Trang"],
    tags: [
      "vòng tay handmade",
      "phối đồ",
      "phong cách cá nhân",
      "xu hướng thời trang",
    ],
    readingTime: 9,
    canonicalUrl:
      "https://bracycrafts.id.vn/blog/bat-mi-bi-quyet-phoi-do-cung-vong-tay",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Bật mí bí quyết phối đồ cùng vòng tay - Khẳng định phong cách cá nhân",
      datePublished: "2025-04-14T08:00:00Z",
      dateModified: "2025-04-14T08:00:00Z",
      author: {
        "@type": "Person",
        name: "Nguyễn Ngọc Thanh Tuyền",
      },
    },
    sections: [
      {
        id: "section-1",
        type: "heading",
        content: "1. Giới thiệu chung",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Vòng tay handmade không chỉ là một phụ kiện, mà còn là cách để bạn thể hiện phong cách và cá tính riêng. Đặc biệt những chiếc vòng tay nhỏ bé này có thể tạo điểm nhấn tinh tế, giúp bạn trông ấn tượng hơn trong mắt người đối diện và ngày càng trở thành xu hướng được ưa chuộng. Hãy cùng khám phá cách phối vòng tay handmade để nâng tầm phong cách thời trang của bạn!",
        parentId: "section-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dai92e7cq/image/upload/v1744566031/Screenshot_2025-04-14_003936_dw7q1d.png",
        altText: "Vòng tay handmade thiết kế theo phong cách cá nhân",
        parentId: "section-1",
      },
      {
        id: "section-2",
        type: "heading",
        content: "2. Lựa chọn vòng tay handmade phù hợp với từng phong cách",
        level: 2,
      },
      {
        id: "section-2-1",
        type: "heading",
        content: "2.1. Phong Cách Tối Giản – Minimalist",
        level: 3,
        parentId: "section-2",
      },
      {
        type: "list",
        listType: "unordered",
        content: [
          "Chọn vòng tay dây mảnh, màu trung tính như trắng, đen, be hoặc pastel.",
          "Kết hợp với trang phục đơn sắc, ít họa tiết như áo sơ mi trắng, quần jeans, đầm suông.",
          "Đeo nhiều vòng mảnh cùng lúc để tạo hiệu ứng layering.",
        ],
        parentId: "section-2-1",
      },
      {
        type: "paragraph",
        content:
          "\uD83D\uDC49 Gợi ý: Vòng tay chỉ đỏ may mắn, vòng bạc nhỏ hoặc vòng da mảnh kết hợp charm nhỏ.",
        parentId: "section-2-1",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dai92e7cq/image/upload/v1744565921/Screenshot_2025-04-14_003552_p6ymw8.png",
        altText: "Vòng tay phong cách tối giản",
        parentId: "section-2-1",
      },
      {
        id: "section-2-2",
        type: "heading",
        content: "2.2. Phong Cách Bohemian – Phóng Khoáng & Nghệ Thuật",
        level: 3,
        parentId: "section-2",
      },
      {
        type: "list",
        listType: "unordered",
        content: [
          "Kết hợp vòng tay nhiều màu sắc, vòng hạt gỗ hoặc vòng len đan tay.",
          "Phối cùng váy maxi, áo croptop, quần jeans rách, hoặc trang phục có họa tiết thổ cẩm.",
          "Đeo nhiều vòng tay cùng lúc (stacking) để tạo hiệu ứng nổi bật.",
        ],
        parentId: "section-2-2",
      },
      {
        type: "paragraph",
        content:
          "\uD83D\uDC49 Gợi ý: Vòng tay đá mắt hổ, vòng dây thừng, vòng handmade kết hợp hạt gỗ.",
        parentId: "section-2-2",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dai92e7cq/image/upload/v1744565921/Screenshot_2025-04-14_003541_lm6ula.png",
        altText: "Vòng tay phong cách Bohemian",
        parentId: "section-2-2",
      },
      {
        id: "section-2-3",
        type: "heading",
        content: "2.3. Phong Cách Thanh Lịch – Elegant & Chic",
        level: 3,
        parentId: "section-2",
      },
      {
        type: "list",
        listType: "unordered",
        content: [
          "Chọn vòng handmade đính đá nhỏ, charm nhẹ nhàng hoặc vòng tay bạc mạ vàng.",
          "Kết hợp với váy liền thân, suit công sở hoặc áo blouse nhẹ nhàng.",
          "Giữ sự tinh giản bằng cách đeo từ 1 - 2 chiếc vòng để tránh quá nhiều chi tiết.",
        ],
        parentId: "section-2-3",
      },
      {
        type: "paragraph",
        content:
          "\uD83D\uDC49 Gợi ý: Vòng tay handmade với charm ngọc trai, vòng dây xích nhỏ đính đá.",
        parentId: "section-2-3",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dai92e7cq/image/upload/v1744565921/Screenshot_2025-04-14_003529_dptbp6.png",
        altText: "Vòng tay phong cách thanh lịch",
        parentId: "section-2-3",
      },
      {
        id: "section-2-4",
        type: "heading",
        content: "2.4. Phong Cách Cá Tính – Street Style",
        level: 3,
        parentId: "section-2",
      },
      {
        type: "list",
        listType: "unordered",
        content: [
          "Kết hợp với áo phông oversize, quần cargo hoặc jacket denim.",
          "Đeo vòng tay bản to hoặc vòng dây xích để tạo điểm nhấn.",
          "Kết hợp vòng tay nam và nữ để tạo sự phá cách.",
        ],
        parentId: "section-2-4",
      },
      {
        type: "paragraph",
        content:
          "\uD83D\uDC49 Gợi ý: Vòng tay da đinh tán, vòng dây xích, vòng tay handmade từ dây dù kết hợp charm kim loại.",
        parentId: "section-2-4",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dai92e7cq/image/upload/v1744565921/Screenshot_2025-04-14_003521_an3s20.png",
        altText: "Vòng tay phong cách cá tính",
        parentId: "section-2-4",
      },
      {
        id: "section-2-5",
        type: "heading",
        content: "2.5. Phong Cách Nữ Tính – Romantic & Sweet",
        level: 3,
        parentId: "section-2",
      },
      {
        type: "list",
        listType: "unordered",
        content: [
          "Chọn vòng tay handmade có hạt ngọc, nơ hoặc họa tiết hoa.",
          "Phối cùng váy xòe, áo kiểu nhẹ nhàng hoặc trang phục ren.",
          "Kết hợp với nhẫn mảnh hoặc dây chuyền tinh tế để tạo sự hài hòa.",
        ],
        parentId: "section-2-5",
      },
      {
        type: "paragraph",
        content:
          "\uD83D\uDC49 Gợi ý: Vòng tay handmade từ cườm pastel, vòng tay ren hoặc vòng tay handmade đính charm hoa.",
        parentId: "section-2-5",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dai92e7cq/image/upload/v1744565921/Screenshot_2025-04-14_003510_cxb3mh.png",
        altText: "Vòng tay phong cách nữ tính",
        parentId: "section-2-5",
      },
      {
        id: "section-3",
        type: "heading",
        content: "3. Mẹo chọn vòng tay handmade phù hợp",
        level: 2,
      },
      {
        type: "list",
        listType: "unordered",
        content: [
          "Chọn theo màu da: Da trắng hợp với nhiều màu sắc, từ pastel đến rực rỡ. Da ngăm nên chọn tông trung tính hoặc ánh kim để tôn da.",
          "Kết hợp nhiều vòng đúng cách: Chọn vòng có liên kết màu sắc hoặc chất liệu để đeo cùng lúc mà không rối mắt.",
          "Chọn theo dịp: Vòng nhẹ nhàng cho công sở, nổi bật cho dạo phố, tinh xảo cho sự kiện.",
          "Phối với phụ kiện khác: Nếu vòng tay nổi bật, giữ nhẫn và dây chuyền đơn giản.",
          "Chọn theo ý nghĩa: Vòng chỉ đỏ may mắn, vòng đá thiên nhiên giúp cân bằng năng lượng, vòng charm thể hiện cá tính.",
        ],
        parentId: "section-3",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dai92e7cq/image/upload/v1744565921/Screenshot_2025-04-14_003457_hdkzmi.png",
        altText: "Mẹo chọn vòng tay handmade phù hợp",
        parentId: "section-3",
      },
      {
        id: "section-4",
        type: "heading",
        content: "4. Lời kết",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Vòng tay handmade không chỉ là phụ kiện mà còn là tuyên ngôn về phong cách cá nhân. Bạn sẽ dễ dàng tìm thấy những chiếc vòng tay handmade với đa dạng mẫu mã và đầy sáng tạo tại BracyCrafts. Đừng ngần ngại khám phá và lựa chọn một chiếc vòng tay handmade để làm mới phong cách và tạo dấu ấn riêng nhé!",
        parentId: "section-4",
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
