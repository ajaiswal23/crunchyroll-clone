import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { BsBookmark } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";


import AccountMenu from "@/components/AccountMenu";
import MobileMenu from "@/components/MobileMenu";
import NavbarItem from "@/components/NavbarItem";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="fixed z-40 w-full ">
      <div className="px-4 lg:px-16 py-6 flex flex-row items-center transition duration-500 bg-crunchy-nav-color ">
        {/* hamgurger menu */}
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 cursor-pointer relative"
        >
          <RxHamburgerMenu
            className={`w-4 mr-4 text-white fill-white transition ${
              showMobileMenu ? "rotate-90" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        {/* hamgurger menu end */}

        <Image src="/assets/images/Crunchyroll.png" height={20} width={150} alt="Logo" />

        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Browse" active />
          <NavbarItem label="Manga" />
          <NavbarItem label="Games" />
          <NavbarItem label="Store" />
          <NavbarItem label="News" />
        </div>

        {/* right side of navbar */}
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition hidden lg:flex">
            <SlMagnifier className="w-6" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition ">
            <BsBookmark className="w-6" />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-full overflow-hidden">
              <Image src="/assets/images/one-piece-chopper-3.png" height={40} width={40} alt="" />
            </div>
            <FaAngleDown
              className={`w-4 text-white fill-white md:mr-4 transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
