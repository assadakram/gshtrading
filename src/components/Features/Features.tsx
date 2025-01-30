import {
  DeployedIcon,
  ServicesIcon,
  SupportIcon,
  WorldIcon,
} from "@/components/SvgComponent";

const Features = () => {
  return (
    <section
      id="Features"
      className="md:flex px-4 md:px-0 gap-6 md:gap-x-16 font-lexend"
    >
      <ServicesIcon className="md:w-6/12 w-full" />
      <div className="flex flex-col gap-4 mt-10 md:mt-0 max-w-md text-center md:text-start">
        <span className="text-base leading-4 text-primary font-bold text-center md:text-start">
          OUR FEATURES
        </span>
        <span className="uppercase md:text-2xl font-bold md:leading-7">
          We Are Trusted Logistics Company Since 1990
        </span>
        <div className="flex flex-wrap gap-5 md:mt-4 justify-center md:justify-start">
          <div className="flex flex-col items-center justify-center w-56 md:w-52 py-3 md:gap-3 gap-2 rounded-lg shadow-custom">
            <WorldIcon className="text-secondary object-cover" />
            <div>
              <p className="text-sm font-light">Worldwide Service</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-56 md:w-52 py-3 rounded-xl md:gap-3 gap-2 shadow-custom">
            <DeployedIcon className="text-secondary object-cover" />
            <div>
              <p className="text-sm font-light">On Time Delivery</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-56 md:w-52 md:gap-3 gap-2 py-3 bg-white rounded-lg shadow-custom">
            <SupportIcon className="text-secondary object-contain" />
            <div>
              <p className="text-sm font-light">24/7 Telephone Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
