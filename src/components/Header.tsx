"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "@/components/SvgComponent";
const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#product" },
    { name: "Career", href: "#career" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="bg-white font-lexend py-4 border-b border-black sticky top-0 z-50">
      <div className="max-w-screen-lg mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>
        <button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <nav className="hidden md:flex md:flex-row md:items-center md:space-x-8 text-xs font-lexend font-normal uppercase">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`relative ${
                activeLink === name ? "text-black" : "text-black"
              } transition-all duration-500`}
              onClick={() => setActiveLink(name)}
            >
              {name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-full transition-all duration-300 ${
                  activeLink === name ? "bg-secondary" : "bg-transparent"
                }`}
              ></span>
            </Link>
          ))}
        </nav>
      </div>
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-60 z-30 ${
          isMenuOpen ? "flex items-center justify-center" : "hidden"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav className="flex flex-col items-center space-y-7 text-white text-lg font-lexend uppercase">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`relative ${
                activeLink === name ? "text-white" : "text-white"
              } transition-all duration-300`}
              onClick={() => {
                setActiveLink(name);
                setIsMenuOpen(false);
              }}
            >
              {name}
              <span
                className={`absolute bottom-0 left-0 h-[4px] w-full transition-all duration-300 ${
                  activeLink === name ? "bg-secondary" : "bg-transparent"
                }`}
              ></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
