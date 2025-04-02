import Link from "next/link";
import Image from "next/image";
import facebook from "../../../public/images/facebook.svg";
import instagram from "../../../public/images/instagram.svg";
import tiktok from "../../../public/images/tiktok.svg";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#BD3A3A] bg-[url('/images/footer_design.svg')] bg-bottom px-2">
      <div className="container mx-auto">
        <div className="py-10">
          <h1 className="text-4xl text-white pacifico">
            BracyCrafts - Made with heart
          </h1>
        </div>
        <div>
          <div className="w-full text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 space-y-10 lg:space-y-0">
              {/* Liên hệ */}
              <div className="col-span-2">
                <h3 className="text-xl font-extrabold mb-3 uppercase">
                  Liên hệ
                </h3>
                <nav className="space-y-2">
                  <div className="flex items-center">
                    <IoLocationSharp />
                    <a
                      href="https://maps.google.com/?q=Linh+Trung,+Thủ+Đức,+HCM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-md ml-1 opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      Khu phố 6, phường Linh Trung, TP. Thủ Đức, TP.HCM
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MdPhone />
                    <a
                      href="tel:0932345510"
                      className="block text-md ml-1 opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      0932345510
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MdEmail />
                    <a
                      href="mailto:contact.bracycrafts@gmail.com"
                      className="block text-md ml-1 opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      contact.bracycrafts@gmail.com
                    </a>
                  </div>
                </nav>
                <div className="flex space-x-3 mt-5">
                  <Link href="/" aria-label="Facebook">
                    <Image
                      src={facebook}
                      alt="Facebook"
                      width={32}
                      height={32}
                      className="cursor-pointer opacity-80 hover:opacity-100 transition"
                    />
                  </Link>
                  <Link href="/" aria-label="Instagram">
                    <Image
                      src={instagram}
                      alt="Instagram"
                      width={32}
                      height={32}
                      className="cursor-pointer opacity-80 hover:opacity-100 transition"
                    />
                  </Link>
                  <Link href="/" aria-label="TikTok">
                    <Image
                      src={tiktok}
                      alt="TikTok"
                      width={32}
                      height={32}
                      className="cursor-pointer opacity-80 hover:opacity-100 transition"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex justify-between gap-5 flex-wrap md:grid grid-cols-1 md:grid-cols-3 col-span-3">
                <div>
                  <h3 className="text-xl font-extrabold mb-3 uppercase">
                    Khám phá
                  </h3>
                  <nav className="space-y-2">
                    <Link
                      href={"/"}
                      className="block text-md opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      Mọi thứ
                    </Link>
                    <Link
                      href={"/"}
                      className="block text-md opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      BTS thời đại
                    </Link>
                    <Link
                      href={"/"}
                      className="block text-md opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      Blog hay
                    </Link>
                    <Link
                      href={"/"}
                      className="block text-md opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      Ưu đãi
                    </Link>
                  </nav>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold mb-3 uppercase">
                    Về BracyCrafts
                  </h3>
                  <nav className="space-y-2">
                    <Link
                      href={"/about-us"}
                      className="block text-md opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      Chuyện nhà mình
                    </Link>
                    <Link
                      href={"/term-of-use"}
                      className="block text-md opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      Điều khoản chung
                    </Link>
                    <Link
                      href={"/private-policy"}
                      className="block text-md opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      Chính sách bảo mật
                    </Link>
                  </nav>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold mb-3 uppercase">
                    Hỗ trợ
                  </h3>
                  <nav className="space-y-2">
                    <Link
                      href={"/"}
                      className="block text-md opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      Khách iu hỏi gì?
                    </Link>
                    <Link
                      href={"/"}
                      className="block text-md opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      Cách bảo quản
                    </Link>
                    <Link
                      href={"/"}
                      className="block text-md opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      Chính sách thanh toán
                    </Link>
                    <Link
                      href={"/"}
                      className="block text-md opacity-80 hover:opacity-100 hover:font-medium transition"
                    >
                      Chính sách giao nhận & đổi hàng
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-md py-2">
            <span className="text-white opacity-60 font-semibold text-md block pb-3">
              2025 - Bản quyền thuộc cửa hàng BracyCrafts
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
