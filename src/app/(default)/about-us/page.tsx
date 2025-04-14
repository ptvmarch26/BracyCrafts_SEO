import React from "react";
import about1 from "../../../../public/images/about/about1.svg";
import about2 from "../../../../public/images/about/about2.svg";
import about3 from "../../../../public/images/about/about3.svg";
import reason1 from "../../../../public/images/about/reason1.svg";
import reason2 from "../../../../public/images/about/reason2.svg";
import reason3 from "../../../../public/images/about/reason3.svg";
import reason4 from "../../../../public/images/about/reason4.svg";
import reason5 from "../../../../public/images/about/reason5.svg";
import reason6 from "../../../../public/images/about/reason6.svg";
import Image from "next/image";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Tìm hiểu về BracyCrafts – cửa hàng phụ kiện handmade đáng yêu, sáng tạo và đầy cảm hứng. Khám phá giá trị, sứ mệnh và lý do bạn nên chọn BracyCrafts!",
  keywords:
    "về chúng tôi, vòng tay handmade, phụ kiện handmade, sản phẩm thủ công, BracyCrafts, thiết kế vòng tay cá nhân hóa, phụ kiện tự làm",
  robots: "index, follow",
  openGraph: {
    title: "Về chúng tôi - BracyCrafts",
    description:
      "Tìm hiểu về BracyCrafts – cửa hàng phụ kiện handmade đáng yêu, sáng tạo và đầy cảm hứng. Khám phá giá trị, sứ mệnh và lý do bạn nên chọn BracyCrafts!",
    url: "https://bracycrafts.id.vn/about-us",
    images: [
      {
        url: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743605796/logo_m9hxmn.svg",
        width: 1200,
        height: 630,
        alt: "Về chúng tôi - BracyCrafts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bracycrafts",
    title: "Về chúng tôi - BracyCrafts",
    description:
      "Tìm hiểu về BracyCrafts – cửa hàng phụ kiện handmade đáng yêu, sáng tạo và đầy cảm hứng. Khám phá giá trị, sứ mệnh và lý do bạn nên chọn BracyCrafts!",
    images: [
      "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743605796/logo_m9hxmn.svg",
    ],
  },
};

const AboutUs = () => {
  const options = [
    {
      img: about1,
      title: "Chất liệu thân thiện & Bền vững",
      content:
        "Sử dụng đá tự nhiên, gỗ, hạt charm sặc sỡ và các nguyên liệu thân thiện với môi trường, vừa đẹp, vừa an toàn cho sức khỏe, góp phần bảo vệ thiên nhiên.",
    },
    {
      img: about2,
      title: "Thiết kế cá nhân hóa",
      content:
        "Thể hiện cá tính riêng với vòng tay khắc tên, in thông điệp hoặc phối màu theo yêu cầu. Mỗi sản phẩm đều mang dấu ấn cá nhân, dành riêng cho bạn hoặc làm quà tặng ý nghĩa.",
    },
    {
      img: about3,
      title: "Giao hàng nhanh chóng & An toàn",
      content:
        "Đóng gói cẩn thận, giao hàng tận nơi, đảm bảo sản phẩm đến tay bạn một cách nguyên vẹn và nhanh chóng. Trải nghiệm mua sắm dễ dàng, nhận hàng an tâm!",
    },
  ];

  const reasons = [
    {
      img: reason1,
      title: "Giá trị cốt lõi",
      content:
        "Tại BracyCrafts, chúng mình luôn coi khách hàng như người bạn thân thiết, mang đến những sản phẩm và dịch vụ vượt trội.",
    },
    {
      img: reason2,
      title: "Tầm nhìn và sứ mệnh",
      content:
        "Với phương châm luôn đề cao sự trải nghiêm, chúng tôi không ngừng cố gắng để cải thiện chất lượng sản phẩm và dịch vụ dành cho khách hàng.",
    },
    {
      img: reason3,
      title: "Thế mạnh của chúng mình",
      content:
        "Chúng mình tự hào về sự đa dạng sản phẩm, dịch vụ chuyên nghiệp và tận tình tại BracyCrafts.",
    },
    {
      img: reason4,
      title: "Hỗ trợ 24/7",
      content:
        "Chúng mình sẵn lòng hỗ trợ khách hàng mọi lúc, mọi nơi. Đừng ngần ngại liên hệ với chúng mình bất cứ khi nào bạn cần.",
    },
    {
      img: reason5,
      title: "Chính sách đổi trả",
      content:
        "Bạn có thể yên tâm mua sắm tại BracyCrafts vì chúng mình chấp nhận đổi trả trong vòng 14 ngày kể từ ngày mua hàng.",
    },
    {
      img: reason6,
      title: "Bảo mật thông tin",
      content:
        "Chúng mình cam kết tuân thủ các quy định pháp luật về bảo vệ dữ liệu và sử dụng thông tin cá nhân của khách hàng một cách cẩn thận và công bằng.",
    },
  ];
  return (
    <div className="container mx-auto flex flex-col items-center py-10 px-2">
      <section>
        <h1 className="text-4xl pacifico font-medium text-primary text-center">
          BracyCrafts - Cửa hàng phụ kiện handmade siu xinh
        </h1>
        <div className="flex justify-center py-7">
          <div className="h-[2px] w-[30%] bg-black"></div>
        </div>
        <p className="text-center text-xl font-bold">
          Chào mừng các tình iu đến với BracyCrafts – Thế giới của những món phụ
          kiện vòng tay handmade độc đáo, đáng yêu và đậm chất riêng!{" "}
        </p>
        <div className="flex justify-evenly flex-wrap lg:flex-nowrap py-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center py-5 lg:py-0"
            >
              <Image
                src={option.img}
                alt={option.title}
                width={80}
                height={80}
                quality={100}
              />
              <p className="font-bold text-lg my-3 text-center">
                {option.title}
              </p>
              <p className="text-center">{option.content}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-10">
        <h2 className="text-4xl pacifico font-medium text-primary text-center">
          Chuyện nhà mình
        </h2>
        <div className="flex justify-center py-7">
          <div className="h-[2px] w-[30%] bg-black"></div>
        </div>
        <p className="text-justify text-lg">
          Tại <strong>BracyCrafts</strong>, chúng mình tin rằng phụ kiện không
          chỉ là món đồ trang trí mà còn là cách bạn thể hiện cá tính và phong
          cách riêng. Được tạo nên từ niềm đam mê thủ công và sự sáng tạo không
          giới hạn, <strong>BracyCrafts</strong> mang đến một thế giới phụ kiện
          độc đáo, tinh tế và đầy cảm hứng, giúp bạn thêm tự tin và tỏa sáng mỗi
          ngày. <br />
          <br />
          Chúng mình tin rằng mỗi chiếc vòng tay đều mang một ý nghĩa đặc biệt,
          vì thế các sản phẩm tại <strong>BracyCrafts</strong> không chỉ được
          làm hoàn toàn thủ công với sự tỉ mỉ và tâm huyết, mà còn mang đậm
          phong cách riêng, giúp bạn thể hiện cá tính và phong cách một cách
          trọn vẹn nhất. Chúng mình không ngừng sáng tạo và cập nhật những thiết
          kế vòng tay mới nhất, từ phong cách nhẹ nhàng, thanh lịch đến cá tính,
          độc đáo, đảm bảo bạn luôn tìm thấy chiếc vòng phù hợp với sở thích của
          mình. Nếu bạn đang tìm kiếm một nơi đáng tin cậy để sở hữu vòng tay
          handmade đẹp, chất lượng, hãy đến với <strong>BracyCrafts</strong> –
          nơi mang đến trải nghiệm mua sắm tuyệt vời và giúp bạn thêm tự tin,
          tỏa sáng mỗi ngày. <br />
          <br />
          Thế mạnh của chúng mình chính là sự đa dạng và sáng tạo trong từng mẫu
          vòng tay, giúp bạn dễ dàng lựa chọn được thiết kế phù hợp với bản thân
          hoặc làm quà tặng ý nghĩa. <strong>BracyCrafts</strong> tự hào có một
          đội ngũ thợ thủ công giàu kinh nghiệm, đam mê sáng tạo, luôn sẵn sàng
          tư vấn và thiết kế theo yêu cầu riêng của bạn. <br />
          <br />
          Không chỉ là một cửa hàng vòng tay handmade thông thường,{" "}
          <strong>BracyCrafts</strong>
          còn là nơi để bạn tìm thấy sự kết nối và cảm hứng. Chúng mình luôn sẵn
          lòng chia sẻ kiến thức về cách bảo quản vòng tay, ý nghĩa của từng
          chất liệu và phong cách phù hợp với từng cá nhân. Bên cạnh đó,{" "}
          <strong>BracyCrafts</strong> cam kết mang đến mức giá hợp lý và chất
          lượng tốt nhất, giúp khách hàng có được sự hài lòng cao nhất mỗi khi
          lựa chọn sản phẩm. Sự độc đáo trong thiết kế, kết hợp với dịch vụ chăm
          sóc khách hàng tận tình, chính là điều khiến{" "}
          <strong>BracyCrafts</strong> trở thành điểm đến yêu thích của những ai
          yêu thích vòng tay handmade. Hãy để <strong>BracyCrafts</strong> đồng
          hành cùng bạn, mang đến những món phụ kiện không chỉ đẹp mà còn đầy ý
          nghĩa!
        </p>
      </section>
      <section>
        <h2 className="text-4xl pacifico font-medium text-primary text-center">
          Tại sao nên chọn BracyCrafts
        </h2>
        <div className="flex justify-center py-7">
          <div className="h-[2px] w-[30%] bg-black"></div>
        </div>
        <p className="text-center text-xl font-bold">
          Với sứ mệnh tạo ra những giá trị bền vững, chúng mình luôn không ngừng
          nỗ lực phát triển, khẳng định dấu ấn thương hiệu handmade Việt và mang
          đến những giá trị lâu dài cho cộng đồng và khách hàng!
        </p>
        <div className="grid grid-cols-2 gap-5 py-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#FFD2D8] p-5 rounded-md"
            >
              <Image
                src={reason.img}
                alt={reason.title}
                width={80}
                height={80}
                quality={100}
              />
              <p className="font-bold text-lg my-3 text-center">
                {reason.title}
              </p>
              <p className="text-center">{reason.content}</p>
            </div>
          ))}
        </div>
      </section>
      <Script
        id="schema-about-us"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "BracyCrafts | Về chúng tôi",
            url: "https://bracycrafts-seo.vercel.app/about-us",
            description:
              "Khám phá BracyCrafts - Cửa hàng phụ kiện handmade độc đáo. Chúng tôi cam kết mang đến sản phẩm chất lượng, thiết kế cá nhân hóa và dịch vụ tận tâm cho bạn.",
            publisher: {
              "@type": "Organization",
              name: "BracyCrafts",
              logo: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/dkww5mgnf/image/upload/v1743605796/logo_m9hxmn.svg",
              },
            },
          }),
        }}
      />
    </div>
  );
};

export default AboutUs;
