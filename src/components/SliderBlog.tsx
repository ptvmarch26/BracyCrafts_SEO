"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { blogPosts } from "@/data/MockBlog";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlogComponent from "./BlogComponent";

type CustomArrowProps = {
  onClick?: () => void;
};

export default function SliderBlog() {
  const PrevArrow = ({ onClick }: CustomArrowProps) => (
    <button
      className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#BD3A3A] text-white w-10 h-10 flex items-center justify-center rounded-full hover:opacity-70 cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronLeft className="w-5 h-5" />
    </button>
  );

  const NextArrow = ({ onClick }: CustomArrowProps) => (
    <button
      className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#BD3A3A] text-white w-10 h-10 flex items-center justify-center rounded-full hover:opacity-70 cursor-pointer z-10"
      onClick={onClick}
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
