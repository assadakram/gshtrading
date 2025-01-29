import React from "react";
import Image from "next/image";
import Arrow from "../../../public/arrow_circle_right.svg"

const Submit = () => {
  return (
    <div className="relative inline-blockn md:mt-3">
     
      <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 "></div>

      <button className="relative bg-primary text-white font-normal text-sm uppercase px-4 py-2  flex items-center w-full justify-center space-x-2 hover:translate-y-0 hover:translate-x-0 transition-transform duration-200">
        <span>Submit</span>
        <Image
         src={Arrow}
         alt="Arrow"
         />
      </button>
    </div>
  );
};

export default Submit;
