"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
const MultistepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <section className="text-white py-10">
      {step === 1 && <StepOne setStep={setStep} />}
      {step === 2 && <StepTwo />}
    </section>
  );
};

export default MultistepForm;
