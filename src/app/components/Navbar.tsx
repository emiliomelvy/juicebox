"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar: React.FC = () => {
  const path = usePathname();

  const handleReRender = () => {
    window.location.href = "/walkthrough";
  };

  return (
    <>
      <div className="flex justify-between">
        {path !== "/" ? (
          <Link href="/">
            <Image
              src="/arrow-left.png"
              alt="arrow-left"
              width={46}
              height={46}
            />
          </Link>
        ) : (
          <div className="w-[46px]" />
        )}

        <div className="flex items-center">
          <Image
            src="/juicebox-logo.png"
            alt="juicebox-logo"
            width={123}
            height={29}
          />
        </div>
        <Image
          src="/refresh.png"
          alt="refresh"
          width={46}
          height={46}
          onClick={handleReRender}
        />
      </div>
    </>
  );
};

export default Navbar;
