import { testimonials } from "@/components/Data/ClientsData";
import Image from "next/image";
import { QuoteIcon } from "@/components/SvgComponent";

const ClientReview = () => {
  return (
    <div className="font-lexend max-w-screen-lg mx-auto md:flex md:flex-col px-4 md:px-0 md:gap-10  bg-white">
      <div className="flex flex-col items-center gap-2 md:gap-4 mb-10">
        <span className="text-lg text-secondary font-bold">TESTIMONIAL</span>
        <span className="uppercase text-3xl font-bold">Our Clients Say!</span>
      </div>
      <div className="flex flex-wrap gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col p-4 hover:shadow-custom rounded-xl max-w-xs relative transform transition-all duration-700 hover:scale-105 `}
          >
            <div className="relative flex md:mt-6 flex-row gap-4 mb-4">
              <Image
                src={testimonial.Image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h5 className="text-xl uppercase font-bold">
                  {testimonial.name}
                </h5>
                <p className="text-sm font-medium text-gray-500 uppercase">
                  {testimonial.company}
                </p>
              </div>
            </div>
            <p className="md:mb-4 text-sm font-light leading-5">
              {testimonial.message}
            </p>
            <span className="absolute right-4 -top-5 text-5xl animate-pulse ">
              <QuoteIcon className="text-secondary" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
