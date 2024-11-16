"use client";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CONTENTS: { img: string; description: string }[] = [
  {
    img: "/vector.png",
    description:
      "Professionals around the world shared how they feel about technology and I’ve listened. Now it’s your turn.",
  },
  {
    img: "/vector.png",
    description:
      "I’ll ask you a handful of meaningful questions and compare your responses with people in your industry.",
  },
  {
    img: "/vector.png",
    description:
      "You’ll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!",
  },
];

const Walkthrough: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.activeIndex === CONTENTS.length - 1);
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {CONTENTS?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex justify-center pt-12">
                <Image alt="slider" src={item.img} width={146} height={155} />
              </div>
              <div className="text-white text-2xl text-center py-12 px-10">
                {item.description}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center mt-12">
        <button
          onClick={handleNext}
          className={`border-[1px] border-white/60 rounded-xl px-32 py-3  ${
            isLastSlide ? "bg-white text-dark" : "text-light-heading"
          }`}
        >
          {isLastSlide ? "Getting Started" : "Continue"}
        </button>
      </div>
    </>
  );
};

export default Walkthrough;
