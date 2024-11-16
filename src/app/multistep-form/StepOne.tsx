"use client";

import React, { useState } from "react";
import LottieAnimation from "@/modules/LottieAnimation";
import Input from "../components/ui/Input";

interface StepOneProps {
  setStep: React.Dispatch<React.SetStateAction<number>>; // Function to update the step
}

const StepOne: React.FC<StepOneProps> = ({ setStep }) => {
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validateFirstName = (value: string) => {
    if (!value) return "First name is required.";
    if (value.length < 2) return "First name must be at least 2 characters.";
    return null;
  };

  const handleClick = () => {
    const validationError = validateFirstName(firstName);
    if (validationError) {
      setError(validationError);
    } else {
      setError(null);
      setStep(2);
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <div className="flex justify-center mt-6">
          <LottieAnimation />
        </div>
        <div className="text-light-heading text-center text-xl px-10 mt-8">
          Let’s start with the basics. Type in your first name.
        </div>
      </div>
      <div>
        <Input
          placeholder="First name"
          value={firstName}
          onChange={(value) => setFirstName(value)}
          validate={validateFirstName}
          onClick={handleClick}
        />
        {error && <div className="text-red-500 text-center mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default StepOne;
