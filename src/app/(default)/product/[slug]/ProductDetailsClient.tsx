"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { notFound } from "next/navigation";
import { products, Product } from "@/data/MockProduct";
import {
  FaHeart,
  FaRegHeart,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import Link from "next/link";
import ProductComponent from "@/components/ProductComponent";

interface ProductDetailsClientProps {
  slug: string;
}

export default function ProductDetailsClient({
  slug,
}: ProductDetailsClientProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Create refs for both sliders
  const mainSliderRef = useRef<InstanceType<typeof Slider> | null>(null);
  const thumbSliderRef = useRef<InstanceType<typeof Slider> | null>(null);

  useEffect(() => {
    setLoading(true);
    const foundProduct = products.find((p) => p.slug === slug);
    setProduct(foundProduct || null);
    if (foundProduct) setMainImage(foundProduct.images.main);
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    if (
      product &&
      product.images.gallery &&
      product.images.gallery.length > 0
    ) {
      setMainImage(product.images.gallery[currentSlide]);
    }
  }, [currentSlide, product]);

  if (loading) return <div>Đang tải...</div>;
  if (!product) return notFound();

  let images = [product.images.main, ...(product.images.gallery || [])];
  if (images.length < 5) {
    images = [...images, ...images];
  }

  const mainSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, next: number) => {
      setCurrentSlide(next);
      if (thumbSliderRef.current) {
        thumbSliderRef.current.slickGoTo(next);
      }
    },
  };

  const thumbSliderSettings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (_: number, next: number) => {
      setCurrentSlide(next);
      if (mainSliderRef.current) {
        mainSliderRef.current.slickGoTo(next);
      }
    },
  };

  const handleThumbnailClick = (img: string, index: number) => {
    setMainImage(img);
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(index);
    }
  };

  console.log("mainImage", mainImage);
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row gap-10">
        <div className="w-full max-w-lg">
          <div className="w-full max-w-lg">
            <div className="relative w-fu">
              <Slider ref={mainSliderRef} {...mainSliderSettings}>
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="!flex justify-center outline-none"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - Hình ảnh ${index + 1}`}
                      width={350}
                      height={325}
                      className="object-cover border"
                      priority={index === 0}
                      quality={100}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="mt-3">
              <Slider ref={thumbSliderRef} {...thumbSliderSettings}>
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="cursor-pointer px-1"
                    onClick={() => handleThumbnailClick(img, index)}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - Hình thu nhỏ ${index + 1}`}
                      width={80}
                      height={80}
                      className={`w-20 h-20 object-cover border-2 rounded cursor-pointer ${
                        currentSlide === index
                          ? "border-[#BD3A3A]"
                          : "border-gray-200"
                      }`}
                      quality={100}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="w-full">
          <header>
            <h1 className="text-2xl font-bold">{product.name}</h1>
          </header>

          <div className="flex items-center mt-4">
            <meta itemProp="price" content={product.price.toString()} />
            <meta itemProp="priceCurrency" content="VND" />
            <p className="text-xl font-bold text-primary mr-4">
              {product.price.toLocaleString()}₫
            </p>
            <p className="text-md text-[#9ca3af] line-through mr-4">
            {(Math.round(product.price / (1 - product.percent / 100) / 1000) * 1000).toLocaleString()}₫
            </p>
            <p className="text-md font-semibold text-[#158857]">
              {product.percent}% Off
            </p>
          </div>

          {product.sizes && product.sizes.length > 0 && (
            <>
              <p className="text-lg font-medium my-3">Chọn kích thước</p>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`p-2 border rounded ${
                      selectedOptions === size
                        ? "text-black border-2 border-[#BD3A3A]"
                        : ""
                    }`}
                    onClick={() => setSelectedOptions(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </>
          )}
          {product.colors && product.colors.length > 0 && (
            <>
              <p className="text-lg font-medium my-3">Chọn màu sắc</p>
              <div className="grid grid-cols-5 gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`p-2 border rounded ${
                      selectedOptions === color
                        ? "text-black border-2 border-[#BD3A3A]"
                        : ""
                    }`}
                    onClick={() => setSelectedOptions(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </>
          )}

          <div className="flex items-center mt-5">
            <div className="inline-flex items-center border border-gray-400">
              <button
                className="px-4 py-2"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Giảm số lượng"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="w-12 text-center"
                readOnly
                aria-label="Số lượng sản phẩm"
              />
              <button
                className="px-4 py-2"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Tăng số lượng"
              >
                +
              </button>
            </div>
            <div
              className="flex items-center cursor-pointer ml-4"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? (
                <FaHeart
                  className="text-red-500 text-xl mx-2"
                  aria-label="Đã thêm vào yêu thích"
                />
              ) : (
                <FaRegHeart
                  className="text-xl mx-2"
                  aria-label="Thêm vào yêu thích"
                />
              )}
              <p>Yêu thích</p>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              className="p-3 border bg-white border-black w-full rounded hover:bg-black hover:text-white cursor-pointer"
              aria-label="Thêm vào giỏ hàng"
            >
              Thêm vào giỏ hàng
            </button>
            <button
              className="p-3 bg-primary hover:opacity-80 text-white w-full rounded cursor-pointer"
              aria-label="Mua ngay"
            >
              Mua ngay
            </button>
          </div>

          <div className="border-t-2 border-gray-200 w-full my-8"></div>
          <div
            onClick={() => setIsDetailsVisible(!isDetailsVisible)}
            className="cursor-pointer text-2xl font-semibold flex items-center justify-between"
          >
            Chi tiết sản phẩm{" "}
            {isDetailsVisible ? (
              <FaChevronUp aria-label="Thu gọn" />
            ) : (
              <FaChevronDown aria-label="Mở rộng" />
            )}
          </div>
          <div
            className={`mt-4 transition-all duration-300 ${
              isDetailsVisible ? "" : "max-h-0 overflow-hidden"
            }`}
          >
            <p className="text-justify" itemProp="description">
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <div>
        <section>
        <h2
          id="related-posts-title"
          className="text-4xl pacifico font-medium text-primary text-center my-5"
        >
          Sản phẩm tương tự
        </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 5).map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/product/${relatedProduct.slug}`}
              >
                <ProductComponent product={relatedProduct} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
