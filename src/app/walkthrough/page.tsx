"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Pagination } from "swiper/modules";
import { gsap } from "gsap";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

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
  const swiperRef = useRef<SwiperClass | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleSlideChange = (swiper: SwiperClass) => {
    setIsLastSlide(swiper.activeIndex === CONTENTS.length - 1);

    const descriptionElement = document.querySelector(
      `.description-${swiper.activeIndex}`
    ) as HTMLElement;

    if (descriptionElement) {
      resetText(descriptionElement);
      animateText(descriptionElement);
    }
  };

  const resetText = (element: HTMLElement) => {
    const index = parseInt(element.dataset.index || "0", 10);
    element.innerHTML = CONTENTS[index].description;
  };

  const animateText = (element: HTMLElement) => {
    const words = element.innerHTML.split(" ");
    element.innerHTML = "";

    words.forEach((word) => {
      const span = document.createElement("span");
      span.innerText = word;
      span.style.display = "inline-block";
      span.style.color = "rgba(250, 250, 250, 0.5)";
      element.appendChild(span);
      element.appendChild(document.createTextNode(" "));
    });

    gsap.fromTo(
      element.children,
      { color: "rgba(250, 250, 250, 0.5)" },
      {
        color: "rgba(250, 250, 250, 1)",
        stagger: 0.1,
        duration: 0.8,
        ease: "power1.inOut",
      }
    );
  };

  useEffect(() => {
    if (descriptionRef.current) {
      resetText(descriptionRef.current);
      animateText(descriptionRef.current);
    }
  }, []);

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
        {CONTENTS.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center pt-12">
              <Image alt="slider" src={item.img} width={146} height={155} />
            </div>
            <div
              ref={index === 0 ? descriptionRef : null}
              className={`text-2xl font-Bagoss text-center py-12 px-10 description-${index}`}
              data-index={index}
            >
              {item.description}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-12">
        {isLastSlide ? (
          <Link
            href="/multistep-form"
            className="bg-white text-dark px-32 py-4 rounded-2xl font-Sohne-normal"
          >
            Getting Started
          </Link>
        ) : (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="border-[1px] border-white/60 rounded-2xl px-32 py-4 text-light-heading font-Sohne-normal"
          >
            Continue
          </button>
        )}
      </div>
    </>
  );
};

export default Walkthrough;
