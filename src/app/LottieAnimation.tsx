"use client";

import { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../../public/JB2G_Lottie.json";

const LottieAnimation = () => {
  useEffect(() => {
    const container = document.getElementById("lottie-container");
    if (container) {
      const animationInstance = lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        animationInstance.destroy();
      };
    }
  }, []);

  return <div id="lottie-container" style={{ width: 400, height: 400 }}></div>;
};

export default LottieAnimation;
