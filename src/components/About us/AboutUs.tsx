import { Welcome } from "@/components/SvgComponent";
import Readmore from "@/components/Button";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="flex flex-col md:flex-row max-w-screen-lg mx-auto md:gap-10 px-4 font-lexend py-10"
    >
      <div className="flex justify-center mb-6 md:mb-0 ">
        <Welcome className="text-secondary object-cover pr-6 md:pr-0 " />
      </div>
      <div className="flex flex-col space-y-4  md:max-w-md ">
        <span className="text-primary uppercase font-bold  text-center sm:text-left -mt-4 md:text-left">
          About Us
        </span>
        <span className="font-bold text-xl text-center md:text-left">
          WELCOME TO LOREM EXPORTS
        </span>
        <p className="md:text-base font-light leading-2 text-justify md:max-w-md md:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five.
        </p>
        <div className="flex justify-center md:pt-7 md:justify-start">
          <Readmore className="bg-secondary" />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
