import { FaArrowUp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CallMeIcon, DistanceIcon, MailIcon } from "@/components/SvgComponent";
import { products, quickLinks } from "@/components/SvgComponent";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="bg-black font-lexend py-8">
      <div className="max-w-screen-lg mx-auto px-8 gap-6 text-white flex flex-col md:flex-row justify-between">
        <div className="uppercase ">
          <h3 className="font-bold text-2xl mb-4">ADDRESS</h3>
          <ul className="md:space-y-10 text-xs space-y-3">
            <li className="flex items-center gap-2">
              <DistanceIcon className="text-primary" />
              <span>
                2464 Royal Ln. Mesa, <br /> New Jersey 45463
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CallMeIcon className="text-primary" />
              <span>(229) 555-0109</span>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="text-primary" />
              <span>michael@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="uppercase">
          <h3 className="font-bold text-2xl mb-4">PRODUCTS</h3>
          <ul className="space-y-3 md:text-xs text-sm md:leading-5">
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
        <div className="uppercase">
          <h3 className="font-bold text-2xl mb-4">QUICK LINKS</h3>
          <ul className="space-y-3 text-xs">
            {quickLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-2xl mb-4whitespace-pre-line">
            NEWSLETTER
          </h3>
          <p className=" mb-4 text-xs ">
            Duis aute irure dolor in reprehenderit in <br /> voluptate velit
            esse cillum dolore eu fugiat <br />
            nulla pariatur.
          </p>
          <div className="flex">
            <form className="flexitems-center border border-white overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 p-2 bg-black text-white placeholder-white outline-none"
              />
            </form>
            <button
              type="submit"
              className="bg-primary px-4 py-2 -mx-1.5 hover:bg-primary transition font-extrabold"
            >
              <FaArrowUp className="w-4 h-5 rotate-90" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto text-center text-white border-t border-gray-700 mt-10 pt-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p>© {currentYear} Lorem Ipsum. All Rights Reserved.</p>
          <div className="flex items-center space-x-10 md:space-x-4 mt-4">
            <FaFacebook className="cursor-pointer text-primary" />
            <FaInstagram className="cursor-pointer text-primary" />
            <FaLinkedin className="cursor-pointer text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
