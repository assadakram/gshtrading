"use client";
import React from "react";
import Image from "next/image";
import call from "../../../public/Frame 17.svg";
import Submit from "../Button/Submit";

const ContectUs = () => {
  return (
    <div
      id="contect-us"
      className="flex max-w-screen-lg mx-auto  flex-col md:flex-row items-center justify-between md:px-8 py-10 bg-white font-lexend"
    >
      
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h4 className="text-purple-600 font-bold text-sm uppercase ">
          Get A Quote
        </h4>
        <h2 className="text-3xl font-bold md:text-3xl my-2 uppercase leading-tight">
          Request a Free Quote!
        </h2>
        <p className="text-base md:mt-4 font-light leading-7 md:max-w-sm text-wrap ">
  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
  diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
  lorem sit clita duo justo erat amet.
</p>

        <div className="flex items-center gap-3 mt-6 justify-center md:justify-start">
          <Image src={call} alt="call" width={60} height={60} />
          <div className="flex flex-col gap-1">
            <p className="text-purple-600 text-sm font-medium">
              Call for any query!
            </p>
            <p className="text-xl font-semibold">+1 (229) 555-0109</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 bg-white p-6 shadow-[0_0px_10px_rgba(0,_0,_0,_0.3)] rounded-lg">
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              type="text"
              placeholder="Name"
              className="border border-black p-2 h-10 focus:outline-none focus:ring-2 focus:ring-purple-600 "
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-black p-2 h-10 focus:outline-none focus:ring-2 focus:ring-purple-600 "
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-black p-2 h-10 focus:outline-none focus:ring-2 focus:ring-purple-600 "
            />
            <select className="border border-black p-2 h-10 focus:outline-none focus:ring-2 focus:ring-purple-600 ">
              <option>Select a Freight</option>
              <option>Freight 1</option>
              <option>Freight 2</option>
            </select>
          </div>
          <textarea
            placeholder="Message"
            className="border border-black p-2 h-24 w-full focus:outline-none focus:ring-2 focus:ring-purple-600  resize-none"
          ></textarea>
            <Submit/>
        </form>
      </div>
    </div>
  );
};

export default ContectUs;
