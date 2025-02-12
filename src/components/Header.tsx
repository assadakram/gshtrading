"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "@/components/SvgComponent";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#product" },
  { name: "Career", href: "#career" },
  { name: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleNavClick = (href:string, name:string) => {
    setActiveLink(name);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach(({ name, href }) => {
        const section = document.querySelector(href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveLink(name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveLink]);

  return (
    <header className="bg-white font-lexend py-4 text-lexend border-b border-black sticky top-0 z-50">
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
        <nav className="hidden md:flex md:items-center md:space-x-8 text-xs font-lexend font-normal uppercase">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`relative transition-all duration-500 ${
                activeLink === name ? "text-black" : "text-gray-400"
              }`}
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
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-90  flex items-center justify-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav className="flex flex-col items-center space-y-7 text-white text-lg font-lexend uppercase">
            {navLinks.map(({ name, href }) => (
              <button
                key={name}
                onClick={() => handleNavClick(href, name)}
                className="relative transition-all duration-300 text-white uppercase"
              >
                {name}
                <span
                  className={`absolute bottom-0 left-0 h-[4px] w-full transition-all duration-300 ${
                    activeLink === name ? "bg-secondary" : "bg-transparent"
                  }`}
                ></span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;