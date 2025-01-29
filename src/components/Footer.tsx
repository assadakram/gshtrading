"use client";

import React from "react";
import { FaArrowUp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CallMe, Distance, Mail } from "@/components/SvgComponent";
const Footer = () => {
  return (
    <footer className="bg-black font-lexend py-8  ">
      <div className="max-w-screen-lg mx-auto px-8 gap-10 text-white flex flex-col md:flex-row justify-between">
        <div className="uppercase ">
          <h3 className="font-bold text-lg mb-4">ADDRESS</h3>
          <ul className="md:space-y-7 text-sm space-y-3 ">
            <li className="flex items-center gap-2">
              <Distance className="text-primary" />
              <span>
                2464 Royal Ln. Mesa, <br /> New Jersey 45463
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CallMe className="text-primary" />
              <span>(229) 555-0109</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-primary" />
              <span className="lowercase">saad.hk46@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="uppercase">
          <h3 className="font-bold text-lg mb-4">PRODUCTS</h3>
          <ul className="space-y-2 md:text-sm text-sm md:leading-5">
            <li>Agriculture Chemicals</li>
            <li>Industrial Chemicals</li>
            <li>Pigments</li>
            <li>Lubricant</li>
            <li>Detergent</li>
            <li>Tyres</li>
          </ul>
        </div>
        <div className="uppercase">
          <h3 className="font-bold text-lg mb-4 ">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="">
          <h3 className="font-bold text-lg mb-4  whitespace-pre-line">
            NEWSLETTER
          </h3>
          <p className=" mb-4  text-sm ">
            Duis aute irure dolor in reprehenderit in <br /> voluptate velit
            esse cillum dolore eu fugiat <br />
            nulla pariatur.
          </p>
          <div className="flex">
            <form className="flex  items-center border border-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 p-2 bg-black text-white placeholder-white outline-none"
              />
            </form>
            <button
              type="submit"
              className="bg-primary px-4 py-2 -mx-1.5 hover:bg-primary transition font-extrabold"
            >
              <FaArrowUp className="w-4 h-5 rotate-90" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto text-center text-white border-t border-gray-700 mt-10 pt-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p>© 2024 Lorem Ipsum. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <FaFacebook className="cursor-pointer text-primary" />
            <FaInstagram className="cursor-pointer text-primary" />
            <FaLinkedin className="cursor-pointer text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
