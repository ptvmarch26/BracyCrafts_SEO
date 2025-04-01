"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { notFound } from "next/navigation";
import { products, Product } from "@/data/MockProduct"; // Import từ file của bạn
import {
  FaHeart,
  FaRegHeart,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

interface ProductDetailsProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  const [slug, setSlug] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const mainSliderRef = useRef<InstanceType<typeof Slider> | null>(null);
  const thumbSliderRef = useRef<InstanceType<typeof Slider> | null>(null);

  // Xử lý Promise params khi component được tạo
  useEffect(() => {
    async function resolveParams() {
      try {
        const resolvedParams = await params;
        setSlug(resolvedParams.slug);
      } catch (error) {
        console.error("Lỗi khi xử lý tham số:", error);
      }
    }

    resolveParams();
  }, [params]);

  // Tải dữ liệu sản phẩm khi có slug
  useEffect(() => {
    async function loadProduct() {
      if (!slug) return;

      setLoading(true);
      const foundProduct = products.find((p) => p.slug === slug);
      setProduct(foundProduct || null); // Chuyển undefined thành null
      setLoading(false);
    }

    loadProduct();
  }, [slug]);

  // Hiển thị trạng thái đang tải
  if (loading) {
    return <div>Đang tải...</div>;
  }

  // Hiển thị thông báo không tìm thấy
  if (!product) return notFound();

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (_currentSlide: number, nextSlide: number) =>
      setCurrentIndex(nextSlide),
  };

  const thumbSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(5, product.images.gallery?.length || 1),
    slidesToScroll: 1,
    // nextArrow: <NextComponent />,
    // prevArrow: <BackComponent />,
  };

  const handleThumbClick = (index: number) => {
    setCurrentIndex(index);
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:p-10 gap-10">
      {/* Hình ảnh sản phẩm */}
      <div className="w-full lg:w-[400px]">
        <Slider {...mainSliderSettings} ref={mainSliderRef}>
          <div>
            <Image
              src={product.images.main}
              alt={product.alt}
              width={500}
              height={500}
              className="w-full h-[500px] object-cover border"
            />
          </div>
          {product.images.gallery?.map((img, index) => (
            <div key={index}>
              <Image
                src={img}
                alt={`Product ${index}`}
                width={500}
                height={500}
                className="w-full h-[500px] object-cover border"
              />
            </div>
          ))}
        </Slider>

        {/* Thumbnail Slider */}
        {product.images.gallery && (
          <div className="mt-2 hidden lg:block">
            <Slider {...thumbSliderSettings} ref={thumbSliderRef}>
              {[product.images.main, ...(product.images.gallery || [])].map(
                (img, index) => (
                  <div
                    key={index}
                    onClick={() => handleThumbClick(index)}
                    className="cursor-pointer"
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index}`}
                      width={100}
                      height={100}
                      className={`w-full h-20 object-cover border-2 ${
                        index === currentIndex
                          ? "border-black"
                          : "border-transparent"
                      }`}
                    />
                  </div>
                )
              )}
            </Slider>
          </div>
        )}
      </div>

      {/* Thông tin sản phẩm */}
      <div className="w-full">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="flex items-center mt-4">
          <p className="text-xl font-bold text-[#ba2b20] mr-4">
            {product.newPrice.toLocaleString()}₫
          </p>
          <p className="text-md text-[#9ca3af] line-through mr-4">
            {product.oldPrice.toLocaleString()}₫
          </p>
          <p className="text-md font-semibold text-[#158857]">
            {product.percent}% Off
          </p>
        </div>

        {/* Chọn màu hoặc size */}
        {product.sizes ? (
          <>
            <p className="text-base font-medium my-3">Chọn kích thước</p>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`p-2 border rounded ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </>
        ) : product.colors ? (
          <>
            <p className="text-base font-medium my-3">Chọn màu</p>
            <div className="grid grid-cols-4 gap-2">
              {product.colors.map((color) => (
                <button key={color} className="p-2 border rounded">
                  {color}
                </button>
              ))}
            </div>
          </>
        ) : null}

        {/* Số lượng sản phẩm */}
        <p className="text-base font-medium my-3">Số lượng</p>
        <div className="flex items-center">
          <div className="inline-flex items-center border border-[#a1a8af]">
            <button
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              className="w-12 text-center"
              readOnly
            />
            <button
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <div
            className="flex items-center cursor-pointer ml-4"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? (
              <FaHeart className="text-red-500 text-xl mx-2" />
            ) : (
              <FaRegHeart className="text-xl mx-2" />
            )}
            <p>Yêu thích</p>
          </div>
        </div>

        {/* Nút mua hàng */}
        <div className="flex gap-2 mt-4">
          <button className="p-3 border border-[#a1a8af] bg-white hover:border-black w-full rounded">
            Thêm vào giỏ hàng
          </button>
          <button className="p-3 bg-black hover:opacity-80 text-white w-full rounded">
            Mua ngay
          </button>
        </div>

        {/* Chi tiết sản phẩm */}
        <div className="border-t-2 border-gray-200 w-full my-8"></div>
        <div
          onClick={() => setIsDetailsVisible(!isDetailsVisible)}
          className="cursor-pointer text-xl font-medium flex items-center justify-between"
        >
          Chi tiết sản phẩm{" "}
          {isDetailsVisible ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <div
          className={`mt-4 transition-all duration-500 ${
            isDetailsVisible ? "max-h-96" : "max-h-0 overflow-hidden"
          }`}
        >
          <p className="text-justify">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
