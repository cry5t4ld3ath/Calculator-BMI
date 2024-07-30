import React from "react";

interface InputFormProps {
   label: string;
   value: number;
   onChange: (value: number) => void
}
 
const InputForm: React.FC<InputFormProps> = ({ label , onChange }) => {


   return ( 
      <div className="flex items-center">
         <label className="text-white mx-5">{label}</label>
         <input 
         type="number" 
         onChange={(e) => onChange(parseFloat(e.target.value))} 
         className="bg-stone-600 text-gray-300 text-[2rem] rounded-2xl px-5 no-spinner placeholder:text-gray-300"
         placeholder="0"
         />
      </div>
    );
}
 
export default InputForm;