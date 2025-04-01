"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlogComponent from "@/components/BlogComponent";
import { blogs } from "@/data/MockBlog";

export default function BlogSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="container mx-auto relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {blogs.map((blog, index) => (
            <div key={index} className="flex-[0_0_33.3333%]">
              <BlogComponent blog={blog} />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Arrows */}
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#BD3A3A] text-white w-10 h-10 flex items-center justify-center rounded-full hover:opacity-70 cursor-pointer"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        disabled={!emblaApi}
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>

      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#BD3A3A] text-white w-10 h-10 flex items-center justify-center rounded-full hover:opacity-70 cursor-pointer"
        onClick={() => emblaApi && emblaApi.scrollNext()}
        disabled={!emblaApi}
      >
        <FaChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
