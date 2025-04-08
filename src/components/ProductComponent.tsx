import { Product } from "@/data/MockProduct";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import Image from "next/image";

interface ProductProps {
  product: Product;
}

export default function ProductComponent({ product }: ProductProps) {
  return (
    <div className="group text-black overflow-hidden shadow-sm hover:shadow-xl transition-transform duration-300 transform">
      <div className="relative w-full h-[280px]">
        <Image
          src={product.images.main}
          alt={product.alt}
          fill
          className="object-cover border"
          quality={100}
        />
      </div>
      <div className="p-4">
        <h4 className="text-base font-bold line-clamp-2 min-h-[38.4px] md:min-h-[48px] mb-3">
          {product.name}
        </h4>
        <div className="flex items-center justify-between">
          <span className="text-base font-extrabold text-primary">
            {product.price.toLocaleString()} đ
          </span>
          {product.percent > 0 && (
            <span className="text-sm line-through text-gray-400">
              {(Math.round(product.price / (1 - product.percent / 100) / 1000) * 1000).toLocaleString()}₫
            </span>
          )}
        </div>
        {/* Hiển thị sao */}
        <div className="flex items-center my-2">
          {[...Array(5)].map((_, index) => {
            const fullStars = Math.floor(product.star);
            const isHalfStar = product.star % 1 !== 0 && index === fullStars;
            return isHalfStar ? (
              <IoIosStarHalf key={index} className="text-yellow-400 text-xl" />
            ) : (
              <IoIosStar
                key={index}
                className={`text-xl ${
                  index < fullStars ? "text-yellow-400" : "text-gray-400"
                }`}
              />
            );
          })}
        </div>
        {/* Giảm giá */}
        <div className="text-sm text-[#158857] font-semibold">
          <span>{product.percent}% Off</span>
        </div>
      </div>
    </div>
  );
}
