"use client"

import { useState } from "react";
import { ServicesData } from "@/components/Data/ServicesData";
import Image from "next/image";
import Readmore from "@/components/Button";

const Services = () => {
  const [services] = useState(ServicesData);

  return (
    <div className="p-4 md-p-0 font-lexend">
      <div className="flex flex-col items-center font-lexend px-2 md:px-0 gap-2 max-w-screen-md mx-auto mb-8 ">
        <span className="text-primary text-base font-semibold">
          OUR SERVICES
        </span>
        <span className="text-xl md:text-2xl font-bold text-center">
          EXPLORE OUR SERVICES
        </span>
      </div>
      <div className="grid grid-cols-1 flex-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg md:px-8 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 font-lexend transition-all duration-700 ease-in-out shadow-custom rounded-lg hover:bg-primary hover:text-white"
          >
            <div className="relative mb-4 flex justify-center">
              <Image
                src={service.Image}
                alt={service.name}
                width={300}
                height={40}
                className="object-cover w-full transform transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-3 mb-4 ">
              <h3 className="font-bold text-lg md:text-lg ">{service.name}</h3>
              <p className="sm:text-sm md:text-left font-light leading-5">
                {service.description}
              </p>
              <div className="flex justify-center mt-6 md:mt-0 md:justify-start">
                <Readmore className="bg-secondary group-hover:bg-secondary" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
