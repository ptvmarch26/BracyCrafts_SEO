"use client";
import { Product } from "@/data/MockProduct";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";

interface ProductProps {
  product: Product;
}

export default function ProductComponent({ product }: ProductProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <div className="relative group text-black overflow-hidden shadow-sm hover:shadow-xl transition-transform duration-300 transform">
      <img
        src={product.src}
        alt={product.alt}
        className="w-full h-full object-cover"
      />
      <div className="p-4">
        <h4 className="text-base font-semibold line-clamp-2 min-h-[38.4px] md:min-h-[48px] mb-3">
          {product.name}
        </h4>
        <div className="flex items-center justify-between mb-2">
          <span className="text-base font-bold text-[#ba2b20]">
            {product.newPrice.toLocaleString()} đ
          </span>
          {product.oldPrice > 0 && (
            <span className="text-sm line-through text-gray-400">
              {product.oldPrice.toLocaleString()} đ
            </span>
          )}
        </div>
        {/* Hiển thị sao */}
        <div className="flex items-center">
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
        {/* Nút thêm vào giỏ & yêu thích */}
        <div className="absolute top-2 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all">
          <button className="p-2 hover:scale-105 rounded-full bg-gray-200 shadow-md">
            <HiOutlineShoppingCart className="text-xl" />
          </button>
          <button
            className="p-2 hover:scale-105 rounded-full bg-gray-200 shadow-md"
            onClick={toggleFavorite}
          >
            {isFavorite ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
