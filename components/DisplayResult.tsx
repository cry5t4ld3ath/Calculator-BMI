import React from "react";

interface DisplayResultProps {
   bmi: number;
}



 
const DisplayResult: React.FC<DisplayResultProps> = ({ bmi }) => {

   const getColorClass = (bmi: number) : { text: string ; bg: string } => {
      if (bmi > 18.5 && bmi < 24.9) return { text: "text-green-600", bg: "bg-green-600" };
      if (bmi > 25 && bmi < 29.9) return { text: "text-yellow-500", bg: "bg-yellow-500" };
      if (bmi > 30 && bmi < 34.9) return { text: "text-orange-500", bg: "bg-orange-500" };
      if (bmi > 35) return { text: "text-red-600", bg: "bg-red-600" };
      return { text: "text-white", bg: "bg-white" };

   };


   const colorClass = getColorClass(bmi);
   const barWidth = Math.min(100, Math.max(0, (bmi / 40) * 100));


   return ( 
      <div className="text-[2rem] select-none">
         <div className={`${colorClass.text}`}>
         your bmi is: {bmi.toFixed(2)}
         </div>
         <div className="w-full h-8 bg-gray-600 rounded-full mt-2">
            <div
            className={`
               h-full w-full rounded-full transition-all duration-200 
               ${colorClass.bg}
            `}
            style={{ width: `${barWidth}%` }}
            />
         </div>
      </div>
    );
}
 
export default DisplayResult;