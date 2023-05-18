"use client";
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import ThemeChanger from "./ThemeChanger";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="w-full">
      <nav className="container px-8 mx-auto md:flex md:items-center xl:px-0">
        <div className="flex items-center justify-between w-full py-3 md:py-5 md:block">
          <Link to="home">
            <div className="container flex items-center space-x-2 cursor-pointer">
              <h2 className="text-2xl font-bold">Yash</h2>
            </div>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>

        <div
          className={`md:flex md:pb-0 md:mt-0 absolute md:static w-[87%] ${
            navbar ? "flex" : "hidden"
          }`}
        >
          <div className="items-center justify-center w-full p-5 space-y-8 bg-white bg-opacity-50 rounded-lg backdrop-blur-md drop-shadow-lg md:bg-transparent md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  to={item.page}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`w-full flex cursor-pointer items-center justify-start md:justify-center bg-clip-text font-semibold hover:text-transparent bg-gradient-to-r from-primary-purple to-secondary-pink`}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
              );
            })}
            <ThemeChanger />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
