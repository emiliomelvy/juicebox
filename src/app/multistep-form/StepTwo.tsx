"use client";

import React, { useState } from "react";
import LottieAnimation from "@/modules/LottieAnimation";
import Input from "../components/ui/Input";

interface StepTwoProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepTwo: React.FC<StepTwoProps> = ({ setStep }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (value: string) => {
    if (!value) return "Email address is required.";
    if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email address.";
    return null;
  };

  const handleClick = () => {
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
    } else {
      setError(null);
      alert("Email validated successfully!");
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <div className="flex justify-center mt-6">
          <LottieAnimation />
        </div>
        <div className="text-light-heading text-center text-xl px-10 mt-8">
          How should we contact you? Type in your email address.
        </div>
      </div>
      <Input
        placeholder="Email address"
        value={email}
        onChange={(value) => setEmail(value)}
        validate={validateEmail}
        onClick={handleClick}
      />
      {error && <div className="text-red-500 text-center mt-2">{error}</div>}
    </div>
  );
};

export default StepTwo;
