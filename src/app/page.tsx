"use client";

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        ".gradient-shape",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        ".text-element",
        { opacity: 0, x: (index) => (index % 2 === 0 ? -50 : 50) },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .fromTo(
        ".main-heading",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".button",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.5"
      );
  }, []);

  return (
    <section>
      <div className="flex justify-center mt-20 relative">
        <Image
          src="/home-vector.png"
          alt="home vector"
          width={274}
          height={290}
          className="gradient-shape"
        />
        <div className="absolute inset-0 flex flex-col justify-between px-10">
          <p className="text-element text-left text-white text-sm">
            WA businesses feel confident about future growth
          </p>
          <p className="text-element text-white text-right text-sm">
            AI can’t replace creativity
          </p>
          <p className="text-element text-white text-sm">
            Sales measure true success
          </p>
          <p className="text-element text-white text-right text-sm">
            Human connection drives WA business
          </p>
          <p className="text-element text-white text-sm">
            The primary barrier to digital transformation is financial
            investment
          </p>
        </div>
      </div>
      <div className="text-white p-6 text-3xl text-center main-heading">
        Compare your thoughts on{" "}
        <span className="bg-gradient-to-r from-[#FABBFF] via-[#B179FF] to-[#6DDDFF] text-transparent bg-clip-text">
          technology
        </span>{" "}
        with current industry opinions.
      </div>
      <div className="flex justify-center my-8">
        <Link
          href="/walkthrough"
          className="bg-primary-light text-dark rounded-3xl py-5 px-20"
        >
          Get a reality check
        </Link>
      </div>
    </section>
  );
}
