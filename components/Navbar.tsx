"use client";
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";
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
            <button className="container flex items-center space-x-2">
              <h2 className="text-2xl font-bold">Yash</h2>
            </button>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={30}  /> : <IoMdMenu size={30}/>}
            </button>
          </div>
        </div>

        <div
          className={`mt-8 md:flex md:pb-0 md:mt-0 ${
            navbar ? "flex" : "hidden"
          }`}
        >
          <div className="items-start justify-center w-full p-5 space-y-8 rounded-lg bg-stone-900/30 md:bg-transparent md:flex md:space-x-6 md:space-y-0">
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
                  className={`flex w-full cursor-pointer items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-primary-purple to-secondary-pink group-hover:from-primary-purple group-hover:to-secondary-pink hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink dark:focus:ring-purple-800`}
                  onClick={() => setNavbar(!navbar)}
                >
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {item.label}
                  </span>
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
