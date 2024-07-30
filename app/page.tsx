"use client"

import { useState } from "react";
import InputForm from "@/components/InputForm";
import CalculatorButton from "@/components/CalculatorButton";
import DisplayResult from "@/components/DisplayResult";


export default function Home () {


  const [wieght, setWieght] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculatorBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = wieght / (heightMeters * heightMeters);
    setBmi(bmiValue);
  };



  return (
    <div className="min-h-screen bg-black grid place-items-center">
      <div className="w-[50vw] h-[50vh] flex flex-col justify-between items-center relative">
        <h1 className="text-white text-[2rem]">BMI Calculator</h1>
        <InputForm label="weight (kg)" value={wieght} onChange={setWieght} />
        <InputForm label="height (cm)" value={height} onChange={setHeight} />
        <CalculatorButton onClick={calculatorBMI} />
        {bmi > 0 && <DisplayResult bmi={bmi} />}
      </div>
    </div>
  )
}