import { CallIcon } from "@/components/SvgComponent";
import Readmore from "@/components/Button/Readmore";

const ContectUs = () => {
  return (
    <div
      id="contect-us"
      className="flex max-w-screen-lg mx-auto  flex-col md:flex-row items-center justify-between md:px-8 py-10 bg-white font-lexend"
    >
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h4 className="text-primary font-bold text-base uppercase ">
          Get A Quote
        </h4>
        <h2 className="text-3xl font-bold md:text-3xl my-2 uppercase leading-tight">
          Request a Free Quote!
        </h2>
        <p className="text-base md:mt-4 font-light leading-7 text-justify md:text-start md:max-w-sm  ">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo erat amet.
        </p>

        <div className="flex items-center gap-3 mt-6 justify-center md:justify-start">
          <CallIcon className="text-secondary" />
          <div className="flex flex-col gap-1">
            <p className="text-primary text-sm font-medium">
              Call for any query!
            </p>
            <p className="text-xl font-semibold">+1 (229) 555-0109</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 bg-white p-6 shadow-custom rounded-lg">
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              type="text"
              placeholder="Name"
              className="border border-black focus:border-white p-2 h-10 focus:outline-none focus:ring-2 focus:text-primary "
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-black focus:border-white p-2 h-10 focus:outline-none focus:ring-2 focus:text-primary "
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-black focus:border-white p-2 h-10 focus:outline-none focus:ring-2 focus:text-primary "
            />
            <select className="border border-black focus:border-white p-2 h-10 focus:outline-none focus:ring-2  ">
              <option>Select a Freight</option>
              <option>Freight 1</option>
              <option>Freight 2</option>
            </select>
          </div>
          <textarea
            placeholder="Message"
            className="border border-black focus:border-white p-2 h-24 w-full focus:outline-none focus:ring-2 focus:text-primary  resize-none"
          ></textarea>
          <Readmore className="bg-blue-500 w-full" label="Submit" />
        </form>
      </div>
    </div>
  );
};
export default ContectUs;
