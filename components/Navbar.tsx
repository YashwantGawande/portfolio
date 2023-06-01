"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import ThemeChanger from "./ThemeChanger";
import { motion } from "framer-motion";

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
    label: "Skills",
    page: "skills",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "About",
    page: "about",
  },
];

const Navbar = () => {
  // const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setScrolled(!isTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-10 w-full ${
        scrolled
          ? "bg-white/50 dark:bg-stone-900/50 backdrop-blur-md drop-shadow-lg"
          : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="container px-8 mx-auto md:flex md:items-center xl:px-0 font-">
        <div className="flex items-center justify-between w-full py-3 md:py-5 md:block">
          <Link to="home">
            <div className="container flex items-center space-x-2 cursor-pointer">
              <motion.h2
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="text-3xl font-extrabold"
              >
                Yash
              </motion.h2>
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
          className={`md:flex absolute md:static shadow-[0px_20px_20px_10px_#00000024] md:shadow-none  w-1/3 h-screen md:w-auto md:h-auto top-0 left-0 dark:bg-stone-900 md:dark:bg-transparent  bg-white md:bg-transparent ${
            navbar ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full p-5 space-y-8 md:flex-row md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, idx) => {
              return (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.3 + idx * 0.1,
                  }}
                >
                  <Link
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
                </motion.button>
              );
            })}
            <ThemeChanger />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
