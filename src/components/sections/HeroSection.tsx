import { Transport } from "@/components/SvgComponent";
import Readmore from "@/components/button";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row md:-mt-6 items-center md:justify-between max-w-screen-lg mx-auto bg-white px-4 md:px-8">
      <div className="flex flex-col space-y-4 font-lexend max-w-md">
        <span className="text-primary font-medium text-sm uppercase">
          Transport & Logistics Solutions
        </span>
        <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl text-gray-900 md:leading-snug leading-tight">
          RIGHT PRICE AT RIGHT PLACE. OUR CORE VALUES ARE TRUST, TALENT AND
          PASSION
        </h1>
        <p className="text-secondary font-bold uppercase max-w-sm">
          We are transforming challenges into success.
        </p>
        <div className="flex justify-center md:justify-start">
          <Readmore className="bg-primary" />
        </div>
      </div>
      <div className="flex justify-end">
        <Transport className="text-primary object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;
