import React from "react";
import Image from "next/image";
import Arrow from "@public/arrow_circle_right.svg";

const Button = () => {
  return (
    <div className="relative inline-block md:mt-3">
      <div className="group relative inline-block">
        <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform duration-200 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:scale-105"></div>
        <button className="relative bg-primary text-white font-medium text-sm uppercase px-4 py-2 flex items-center justify-center space-x-2 transition-transform duration-200 transform group-hover:scale-105">
          <span className="tracking-wider">Read More</span>
          <Image src={Arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};
export default Button;
