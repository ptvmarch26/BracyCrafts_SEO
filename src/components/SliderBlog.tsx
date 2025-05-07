"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import dynamic from "next/dynamic";
import { blogPosts } from "@/data/MockBlog";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlogComponent from "./BlogComponent";
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

export default function SliderBlog() {
  const Slider = dynamic<SliderProps>(
    () => import("react-slick").then((mod) => mod.default),
    { ssr: false }
  );
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
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {blogPosts.map((blog, index) => (
          <div key={index} className="flex items-center justify-center px-5">
            <BlogComponent blog={blog} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
