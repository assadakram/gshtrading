import {
  DiversityIcon,
  ReviewsIcon,
  ShipmentIcon,
} from "@/components/SvgComponent";
const Shipment = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex px-4 md:px-8  flex-col md:gap-8 md:flex-row items-start md:items-center justify-between    font-lexend">
      <div className="md:w-1/2 flex flex-col gap-4 md:gap-0">
        <p className="text-primary font-bold  uppercase text-center md:text-start">
          Some Facts
        </p>
        <h1 className="text-2xl md:text-2xl font-bold mt-2 mb-4 uppercase text-center md:text-start">
          &#35;1 Place to Manage All of Your Shipments
        </h1>
        <p className="md:text-lg font-light md:text-left text-justify md:mt-8 leading-7 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-10  md:justify-start gap-5 md:mt-10  ">
        <div className="flex flex-col items-center justify-center w-56 py-2 rounded-lg shadow-custom">
          <DiversityIcon className="text-secondary object-cover" />
          <div className="mt-4 flex gap-2 text-sm font-bold text-secondary">
            100
            <p className="text-sm font-medium text-gray-800">Happy Clients</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-56 py-2 rounded-xl shadow-custom">
          <ShipmentIcon className="text-secondary object-cover" />
          <div className=" flex gap-2 mt-4 text-sm font-bold text-secondary">
            10
            <p className="text-sm font-medium text-gray-800">
              Complete Shipments
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-56 py-2 bg-white rounded-lg shadow-custom">
          <ReviewsIcon className="text-secondary object-cover" />
          <div className="flex mt-4 gap-2 text-sm font-bold text-secondary-500 text-secondary">
            4
            <p className="text-sm font-medium text-gray-800">
              Customer Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shipment;
