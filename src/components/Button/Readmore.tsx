import Image from "next/image";
import Arrow from "@public/arrow_circle_right.svg";
interface ReadmoreProps {
  className?: string;
  label?: string;
}
const Readmore: React.FC<ReadmoreProps> = ({ className = "", label = "Read More" }) => {
  return (
    <div className={`relative inline-block md:mt-3 ${className.includes("w-full") ? "w-full" : ""}`}>
      <div className={`group relative inline-block ${className.includes("w-full") ? "w-full" : ""}`}>
        <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform duration-200 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:scale-105"></div>
        <button  className={`relative text-white font-medium text-sm uppercase px-4 py-2 flex items-center justify-center space-x-2 transition-transform duration-200 transform group-hover:scale-105 ${className}`} >
          <span className="tracking-wider">{label}</span>
          <Image src={Arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Readmore;