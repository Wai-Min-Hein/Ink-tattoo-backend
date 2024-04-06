import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";
import { SiViber } from "react-icons/si";

import logo from "/images/golden-logo.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const {pathname} = useLocation()
  
  const noFooterPage = pathname.includes('/login') ||  pathname.includes('/admin')

  
  return (
    <footer className={`mt-10 px-4 md:px-0 md:container md:mx-auto ${noFooterPage? 'hidden': 'block'}`}>
      <div className="flex justify-center">
        <img src={logo} className="w-1/6 h-auto object-cover" alt="" />
      </div>

      <ul className="flex items-center justify-center gap-x-12 gap-y-4 flex-1 flex-wrap mx-auto text-lg font-[500] my-6">
        <Link to={"/"}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link to={"/team"}>
          <li className="cursor-pointer">Team</li>
        </Link>
        <Link to={"/about"}>
          <li className="cursor-pointer">About Us</li>
        </Link>

        <Link to={"/services"}>
          <li className="cursor-pointer">Services</li>
        </Link>

        <Link to={"/blogs"}>
          <li className="cursor-pointer">Blogs</li>
        </Link>

        <Link to={"/contact"}>
          <li className="cursor-pointer">Contact</li>
        </Link>
      </ul>

      <div className="mb-6">
        <p className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto text-center text-lg font-normal capitalize tracking-wide">
          Join our community of tattoo enthusiasts and become a part of
          something bigger than just ink on skin.
        </p>
      </div>

      <div className="flex gap-4 justify-center mb-6">
        <FaFacebook className="cursor-pointer" size={24} />
        <FaInstagram className="cursor-pointer" size={24} />
        <SiViber className="cursor-pointer" size={24} />
        <FaTelegram className="cursor-pointer" size={24} />
      </div>

      <div className=" container mx-auto flex items-center justify-between border-t border-white py-8">
        <div className="text-center w-full">
          <h6 className="text-lg font-normal capitalize tracking-wide">Designed by Ink Studio. @2024 All rights reserved</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
