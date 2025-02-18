"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

enum ScrollDirection {
  Up = "up",
  Down = "down",
}

const ScrollToTopArrow: React.FC = () => {
  
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(ScrollDirection.Down);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.scrollY || document.documentElement.scrollTop;
      const halfScreen = document.documentElement.scrollHeight / 3;
      setScrollDirection(currentScrollPos > halfScreen ? ScrollDirection.Up : ScrollDirection.Down);
      setIsVisible(currentScrollPos > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollDirection, setIsVisible]);

  const handleClick = (): void => {
    if (scrollDirection === ScrollDirection.Up) {
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
      className={`fixed bottom-8 right-8 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-md shadow-md transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label={`Scroll ${scrollDirection === ScrollDirection.Up ? "to top" : "to bottom"}`}
    >
      {scrollDirection === ScrollDirection.Up ? (
        <FaArrowUp />
      ) : (
        <FaArrowDown />
      )}
    </button>
  );
};

export default ScrollToTopArrow;
