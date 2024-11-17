"use client";

import LottieAnimation from "@/modules/LottieAnimation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Results: React.FC = () => {
  const [name, setName] = useState<string | null>("");
  const router = useRouter();

  useEffect(() => {
    const name = localStorage.getItem("result");
    setName(name);
  }, []);

  const handleClick = () => {
    localStorage.removeItem("result");
    setTimeout(() => {
      router.push("/");
    }, 5000);
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <div className="flex justify-center mt-6">
          <LottieAnimation />
        </div>
        <div className="flex flex-col justify-between h-screen pb-10">
          <div>
            <div className="text-light-heading text-center text-xl px-10 mt-8">
              Thanks, {name} Now, it’s time to get a reality check. 
            </div>
            <div className="pt-5 text-light-heading text-center text-xl">
              This will take 2-3 minutes. 
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-white text-dark px-32 py-3 rounded-xl font-Sohne-normal"
              onClick={handleClick}
            >
              Getting Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
