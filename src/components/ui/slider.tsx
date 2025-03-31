"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import slider1 from "../../../public/images/slider1.svg";
import slider2 from "../../../public/images/slider2.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slides = [slider1, slider2, slider1];

  // Cập nhật index khi thay đổi slide
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
    <div className="container max-w-[1440px] mx-auto relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((image, index) => (
            <div key={index} className="flex-[0_0_100%]">
              <Image src={image} alt={`Slide ${index + 1}`} sizes="100%" />
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

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-5 h-5 rounded-full cursor-pointer ${
              selectedIndex === index ? "bg-[#BD3A3A]" : "bg-gray-300"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            disabled={!emblaApi}
          />
        ))}
      </div>
    </div>
  );
}
