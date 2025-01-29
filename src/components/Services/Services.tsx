"use client";

import { ServicesData } from "@/components/Data/ServicesData";
import Image from "next/image";
import React from "react";
import Readmore from "@/components/Button/Readmore";
const Services = () => {
  return (
    <div className="container p-4 md-p-0  font-lexend">
      <div className="flex flex-col items-center font-lexend px-2 md:px-0  gap-2 max-w-screen-md mx-auto mb-8 ">
        <span className="text-primary text-base font-semibold">
          OUR SERVICES
        </span>
        <span className="text-xl md:text-2xl font-bold text-center">
          EXPLORE OUR SERVICES
        </span>
      </div>
      <div className="grid grid-cols-1 flex-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg md:px-8 mx-auto">
        {ServicesData.map((service, index) => (
          <div
            key={index}
            className="group  border p-6 font-lexend transition-all duration-500 ease-in-out shadow-[0_0px_5px_rgba(0,_0,_0,_0.4)]  rounded-lg overflow-hidden  bg-white   hover:bg-primary"
          >
            <div className="relative mb-4 flex justify-center">
              <Image
                src={service.Image}
                alt={service.name}
                width={300}
                height={40}
                className=" object-cover"
              />
            </div>
            <div className=" flex flex-col  gap-3 mb-4 ">
              <h3 className="font-bold text-lg  md:text-lg  text-gray-800 group-hover:text-white ">
                {service.name}
              </h3>
              <p className="sm:text-sm  md:text-left font-light leading-5 group-hover:text-white  ">
                {service.discription}
              </p>
              <div className="flex justify-center md:justify-start">
                <Readmore />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
