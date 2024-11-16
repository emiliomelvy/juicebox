"use client";

import React, { useState } from "react";
import LottieAnimation from "@/modules/LottieAnimation";
import Input from "../components/ui/Input";

const MultistepForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");

  const validateFirstName = (value: string) => {
    if (!value) return "First name is required.";
    if (value.length < 2) return "First name must be at least 2 characters.";
    return null;
  };

  const handleClick = () => {
    console.log("handle click");
  };

  return (
    <section className="text-white py-10">
      <div className="flex flex-col justify-between h-screen">
        <div>
          <div className="flex justify-center mt-6">
            <LottieAnimation />
          </div>
          <div className="text-light-heading text-center text-xl px-10 mt-8">
            Let’s start with the basics. Type in your first name.
          </div>
        </div>
        <Input
          placeholder="First name"
          value={firstName}
          onChange={(value) => setFirstName(value)}
          validate={validateFirstName}
          onClick={handleClick}
        />
      </div>
    </section>
  );
};

export default MultistepForm;
