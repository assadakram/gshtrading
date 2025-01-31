"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Animation {
  className: string;
}
const ScrollToTopArrow: React.FC<Animation> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setIsVisible(scrollPosition > 300 || scrollPosition < maxScroll - 300);
      setScrollDirection(scrollPosition < maxScroll - 300 ? "down" : "up");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (): void => {
    if (scrollDirection === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 right-8  ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }  bg-primary text-white w-12 h-12 flex items-center justify-center rounded-md shadow-md transition-all duration-300 ${className}`}
      aria-label={`Scroll ${
        scrollDirection === "up" ? "to top" : "to bottom"
      } `}
    >
      {scrollDirection === "up" ? (
        <FaArrowUp className="w-5 h-5" />
      ) : (
        <FaArrowDown className="w-5 h-5" />
      )}
    </button>
  );
};

export default ScrollToTopArrow;
