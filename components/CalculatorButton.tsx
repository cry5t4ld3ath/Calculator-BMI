import React from "react";

interface CalculatorButtonProps {
   onClick: () => void
}
 
const CalculatorButton: React.FC<CalculatorButtonProps> = ({ onClick }) => {
   return ( 
      <div>
         <button 
         onClick={onClick}
         className="bg-stone-600 text-white p-5 rounded-2xl hover:bg-red-950 transition-all duration-300"
         >claculator BMI</button>
      </div>
    );
};
 
export default CalculatorButton;