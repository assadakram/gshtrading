import React from "react";
import { testimonials } from "./ClientsData";
import Image from "next/image";
import Quotes from "../../../public/faQuoteRight.svg";

const ClientReview = () => {
  return (
    <div className="font-lexend max-w-screen-lg mx-auto md:flex md:flex-col md:gap-10  bg-white">
      <div className="flex flex-col items-center gap-2 md:gap-4 mb-10">
        <span className="text-lg text-orange font-bold">TESTIMONIAL</span>
        <span className="uppercase text-3xl font-bold">Our Clients Say!</span>
      </div>
      <div className="flex flex-wrap gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col p-4 hover:shadow-[0_0px_5px_rgba(0,_0,_0,_0.4)] transition-shadow duration-700 rounded-xl max-w-xs relative animate-fade-in-up `}
          >
            <div className="relative flex md:mt-6 flex-row gap-4 mb-4">
              <Image
                src={testimonial.Image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h5 className="text-xl uppercase font-bold">
                  {testimonial.name}
                </h5>
                <p className="text-sm font-medium text-gray-500 uppercase">
                  {testimonial.company}
                </p>
              </div>
            </div>
            <p className="md:mb-4 text-sm font-light leading-5">
              {testimonial.message}
            </p>
            <span className="absolute right-4 -top-7 text-5xl animate-pulse">
              <Image src={Quotes} alt="Quotes" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
