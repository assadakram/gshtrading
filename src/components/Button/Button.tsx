import React from "react";
import Image from "next/image";
import Arrow from "../../../public/arrow_circle_right.svg"

const Button = () => {
  return (
    <div className="relative inline-block">
     
      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 "></div>

      <button className="relative bg-purpleCustom text-white font-medium text-sm uppercase px-4 py-2  flex items-center justify-center space-x-2 hover:translate-y-0 hover:translate-x-0 transition-transform duration-200">
        <span>Read More</span>
        <Image
         src={Arrow}
         alt="Arrow"
         />
      </button>
    </div>
  );
};

export default Button;
