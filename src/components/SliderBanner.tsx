"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import slider1 from "../../public/images/slider1.svg";
import slider2 from "../../public/images/slider2.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { ReactNode, ReactElement } from "react";

interface SliderProps {
  children: ReactNode;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  prevArrow?: ReactElement;
  nextArrow?: ReactElement;
}
type CustomArrowProps = {
  onClick?: () => void;
};

export default function SliderBanner() {
  const Slider = dynamic<SliderProps>(
    () => import("react-slick").then((mod) => mod.default),
    { ssr: false }
  );
  const images = [slider1, slider2];

  const PrevArrow = ({ onClick }: CustomArrowProps) => (
    <button
      className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#BD3A3A] text-white w-10 h-10 flex items-center justify-center rounded-full hover:opacity-70 cursor-pointer z-10"
      onClick={onClick}
      aria-label="Back Button"
    >
      <FaChevronLeft className="w-5 h-5" />
    </button>
  );

  const NextArrow = ({ onClick }: CustomArrowProps) => (
    <button
      className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#BD3A3A] text-white w-10 h-10 flex items-center justify-center rounded-full hover:opacity-70 cursor-pointer z-10"
      onClick={onClick}
      aria-label="Next Button"
    >
      <FaChevronRight className="w-5 h-5" />
    </button>
  );

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative max-w-[1440px] mx-auto">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="!flex justify-center items-center">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={1440}
              height={400}
              layout="fixed"
              quality={75}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
