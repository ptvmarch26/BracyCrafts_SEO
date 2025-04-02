import { products } from "@/data/MockProduct";
import ProductComponent from "@/components/ProductComponent";
import Link from "next/link";
import SliderBanner from "@/components/SliderBanner";
import logo from "../../../public/images/logo.svg";
import ins_logo from "../../../public/images/ins_logo.svg";
import fb_logo from "../../../public/images/fb_logo.svg";
import shopee_logo from "../../../public/images/shopee_logo.svg";
import Image from "next/image";
import SliderBlog from "@/components/SliderBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Chào mừng bạn đến với BracyCrafts – Nơi mang lại trải nghiệm mua sắm tuyệt vời dành cho bạn. BracyCrafts cam kết cung cấp những sản phẩm chất lượng và dịch vụ tậm tâm nhất dành cho khách hàng. Hãy khám phá thêm về chúng tôi bằng cách trải nghiệm mua sắm ngay hôm nay!",
};

export default function Home() {
  const socials = [
    { src: shopee_logo, alt: "Shopee Logo", link: "https://shopee.vn" },
    { src: ins_logo, alt: "Instagram Logo", link: "https://www.instagram.com" },
    { src: fb_logo, alt: "Facebook Logo", link: "https://www.facebook.com" },
  ];

  return (
    <div className="container mx-auto py-10">
      <SliderBanner />

      <div className="grid items-center grid-cols-5 py-20 gap-5">
        <div className="col-span-3">
          <h2 className="pacifico text-primary font-medium text-4xl">
            Giá trị mà BracyCrafts mang đến
          </h2>
          <p className="text-xl text-justify mt-10">
            BracyCrafts xin chào! <br />
            <br />
            Những niềm vui làm bằng tay, chỉ dành riêng cho bạn, là châm ngôn mà
            đội ngũ BracyCrafts luôn tâm niệm. Với tình yêu dành cho sự sáng tạo
            và tỉ mỉ, BracyCrafts luôn mong muốn tạo ra những sản phẩm thủ công
            độc đáo, mang đậm dấu ấn cá nhân cho những khách hàng thân yêu của
            mình. Làm cho các bạn trở nên đặc biệt là niềm vui của BracyCrafts.
            Mặc dù mỗi món đồ handmade có vẻ ngoài khác biệt, nhưng bên trong
            tất cả đều chứa đựng những ý nghĩa riêng biệt, tất cả đều xuất phát
            từ sự nhiệt huyết và lòng chân thành của chúng tôi. <br />
            <br />
            Cảm ơn các bạn đã luôn tin tưởng và ủng hộ BracyCrafts!
          </p>
        </div>
        <div className="bg-secondary col-span-2 py-20 px-5 border-3 border-[#BD3A3A] rounded-xl">
          <Image src={logo} alt="BracyCrafts Logo" width={500} height={250} />
        </div>
      </div>

      <div className="flex items-center justify-center w-full mb-10">
        <div className="flex-1 h-[1px] bg-[#FFD2D8]"></div>

        <div className="px-6 py-3 border border-[#FFD2D8] rounded-lg">
          <h2 className="text-2xl pacifico font-medium text-primary italic">
            Sản phẩm nổi bật
          </h2>
        </div>

        <div className="flex-1 h-[1px] bg-[#FFD2D8]"></div>
      </div>
      <div className="grid grid-cols-5 gap-6 ">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.slug}`}>
            <ProductComponent product={product} />
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center w-full my-20">
        <div className="flex-1 h-[1px] bg-[#FFD2D8]"></div>

        <div className="px-6 py-3 border border-[#FFD2D8] rounded-lg">
          <h2 className="text-2xl pacifico font-medium text-primary italic">
            BracyCrafts đã có mặt tại
          </h2>
        </div>

        <div className="flex-1 h-[1px] bg-[#FFD2D8]"></div>
      </div>
      <div className="flex justify-around items-center">
        <div className="flex-1 flex justify-around items-center">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[150px] h-[150px] flex items-center justify-center bg-secondary shadow-md rounded-xl"
            >
              <Image
                src={social.src}
                alt={social.alt}
                width={100}
                height={100}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center w-full my-20">
        <div className="flex-1 h-[1px] bg-[#FFD2D8]"></div>

        <div className="px-6 py-3 border border-[#FFD2D8] rounded-lg">
          <h2 className="text-2xl pacifico font-medium text-primary italic">
            BracyCrafts chia sẻ
          </h2>
        </div>

        <div className="flex-1 h-[1px] bg-[#FFD2D8]"></div>
      </div>
      <div>
        <SliderBlog />
      </div>
    </div>
  );
}
