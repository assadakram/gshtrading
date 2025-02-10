"use client";

import useVisibleSections from "@/components/custom hooks/useVisibleSections";
import ScrollToTopArrow from "@/components/scroll/Index";
import { sectionsConfig } from "@/components/data/sectionsDisplay";

export default function Home() {
  const { getVisibleSection } = useVisibleSections();

  return (
    <div className="flex flex-col gap-7 max-w-screen-xl mx-auto">
      {sectionsConfig.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className={`${section.className} ${
            getVisibleSection(section.id) ? section.visibleClass : section.hiddenClass
          }`}
        >
          {section.component}
        </div>
      ))}
      <ScrollToTopArrow />
    </div>
  );
}
