"use client";

import React from "react";

import Button from "../Button/Button";
import { Transport } from "../../../public/SvgComponent";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row  mt-12 md:mt-0 items-center md:justify-between max-w-screen-lg mx-auto bg-white px-4 md:px-8">
      <div className="flex flex-col  space-y-4 font-lexend max-w-md ">
        <span className="text-purpleCustom font-medium text-sm uppercase">
          Transport & Logistics Solutions
        </span>
        <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl text-gray-900 md:leading-snug leading-tight ">
          RIGHT PRICE AT RIGHT PLACE.
          OUR CORE VALUES ARE TRUST, TALENT AND PASSION
        </h1>
        <p className="text-orange font-bold uppercase max-w-sm ">
          We are transforming challenges into success.
        </p>
        <div className="flex justify-center md:justify-start">
        
        <Button  />
        </div>
      </div>
      <div className="flex justify-end">
        <Transport className="text-purpleCustom object-cover"/>
        {/* <Image
          src={transport}
          alt="Transport illustration"
          width={400}
          height={500}
          className="object-cover  "
        /> */}
      </div>
    </div>
  );
};

export default HeroSection;