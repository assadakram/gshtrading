"use client";

import React, { useState, useEffect } from "react";
import AboutUs from "@/components/About us/AboutUs";
import ClientReview from "@/components/ClientReviews/ClientReview";
import ContectUs from "@/components/ContectUs/ContectUs";
import Features from "@/components/Features/Features";
import HeroSection from "@/components/Hero section/HeroSection";
import Services from "@/components/Services/Services";
import Shipment from "@/components/Shipments/Shipment";
import ScrollToTopArrow from "@/components/Scroll/Scroll";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [
              ...new Set([...prev, entry.target.id]),
            ]);
          }
        });
      },
      { threshold: 0.2 }
    );
    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);
  const isVisible = (id: string) => visibleSections.includes(id);
  return (
    <div className="flex flex-col gap-7 max-w-screen-xl mx-auto ">
      <div
        id="hero"
        className={`animate-section transition-all duration-500 ${
          isVisible("hero")
            ? "translate-y-0 opacity-100"
            : "translate-y-0 opacity-0"
        }`}
      >
        <HeroSection />
      </div>
      <div
        id="about"
        className={`animate-section transition-transform duration-1000  ${
          isVisible("about")
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        <AboutUs />
      </div>
      <div
        id="shipment"
        className={`animate-section transition-transform duration-1000 ${
          isVisible("shipment")
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        <Shipment />
      </div>
      <div
        id="services"
        className={`animate-section transition-transform duration-1000 mt-10 ${
          isVisible("services")
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        <Services />
      </div>
      <div
        id="features"
        className={`animate-section transition-transform duration-1000 mt-10 ${
          isVisible("features")
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        <Features />
      </div>
      <div
        id="contact"
        className={`animate-section px-4 transition-transform duration-1000 ${
          isVisible("contact")
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        <ContectUs />
      </div>
      <div
        id="reviews"
        className={`animate-section transition-transform duration-1000 ${
          isVisible("reviews")
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        <ClientReview />
      </div>
      <ScrollToTopArrow />
    </div>
  );
}
