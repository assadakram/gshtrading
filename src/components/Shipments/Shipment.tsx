import React from "react";
import Image from "next/image";
import diversity from "../../../public/diversity_2.svg"
import shipment from "../../../public/package_2.svg"
import review from "../../../public/rate_review.svg"

const Shipment = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex px-4 md:px-8  flex-col md:gap-8 md:flex-row items-start md:items-center justify-between   font-lexend">
      <div className="md:w-1/2">
        <p className="text-orange-500 font-bold uppercase text-orange">Some Facts</p>
        <h1 className="text-2xl md:text-2xl font-bold mt-2 mb-4 uppercase">
        &#35;1 Place to Manage All of Your Shipments
        </h1>
        <p className="md:text-lg font-light md:text-left text-justify md:mt-8 leading-7 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-10  md:justify-start  gap-5 md:mt-20  ">
      
      <div className="flex flex-col items-center justify-center  w-56 py-2 rounded-lg shadow-[0_0px_10px_rgba(0,_0,_0,_0.3)]">
      <Image
        src={diversity}
        alt="diversity"
        />
        <div className="mt-4 flex gap-2 text-sm font-bold text-orange">100
        <p className="text-sm font-medium text-gray-800">Happy Clients</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-56 py-2 rounded-xl shadow-[0_0px_10px_rgba(0,_0,_0,_0.3)]">
      <Image
        src={shipment}
        alt="shipment"
        />
        <div className=" flex gap-2 mt-4 text-sm font-bold text-orange">10
        <p className="text-sm font-medium text-gray-800">Complete Shipments</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-56 py-2 bg-white rounded-lg shadow-[0_0px_10px_rgba(0,_0,_0,_0.3)]">
      <Image
        src={review}
        alt="review"
        />
        <div className="flex mt-4 gap-2 text-sm font-bold text-orange-500 text-orange">4
        <p className="text-sm font-medium text-gray-800">Customer Reviews</p>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Shipment;
