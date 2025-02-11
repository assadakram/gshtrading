import {
  AboutUs,
  ClientReview,
  ContactUs,
  Features,
  Services,
  Shipment,
  HeroSection,
} from "@/components";

export const sectionsConfig = [
  {
    id: "home",
    component: <HeroSection />,
    className: "animate-section transition-all duration-500",
    visibleClass: "opacity-100",
    hiddenClass: "opacity-0",
  },
  {
    id: "about",
    component: <AboutUs />,
    className: "animate-section transition-transform duration-500",
    visibleClass: "translate-y-0",
    hiddenClass: "translate-y-7 opacity-0",
  },
  {
    id: "shipment",
    component: <Shipment />,
    className: "animate-section transition-transform duration-500",
    visibleClass: "translate-y-0 opacity-100",
    hiddenClass: "translate-y-7 opacity-0",
  },
  {
    id: "product",
    component: <Services />,
    className: "animate-section transition-transform duration-500 mt-10",
    visibleClass: "translate-y-0 opacity-100",
    hiddenClass: "translate-y-7 opacity-0",
  },
  {
    id: "career",
    component: <Features />,
    className: "animate-section transition-transform duration-500 mt-10",
    visibleClass: "translate-y-0 opacity-100",
    hiddenClass: "translate-y-2 opacity-0",
  },
  {
    id: "contact",
    component: <ContactUs />,
    className: "animate-section px-4 transition-transform duration-500",
    visibleClass: "translate-y-0 opacity-100",
    hiddenClass: "translate-y-7 opacity-0",
  },
  {
    id: "reviews",
    component: <ClientReview />,
    className: "animate-section transition-transform duration-500",
    visibleClass: "translate-y-0 opacity-100",
    hiddenClass: "translate-y-10 opacity-0",
  },
];
