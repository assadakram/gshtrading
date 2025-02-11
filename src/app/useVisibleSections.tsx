"use client";

import { useState, useEffect } from "react";

const useVisibleSections = () => {
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

  const getVisibleSection = (id: string) => visibleSections.includes(id);

  return { getVisibleSection };
};
export default useVisibleSections;
