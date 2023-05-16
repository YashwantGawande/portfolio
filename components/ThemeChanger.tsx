import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center">
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg cursor-pointer group bg-gradient-to-br from-primary-purple to-secondary-pink group-hover:from-primary-purple group-hover:to-secondary-pink hover:text-white dark:text-white  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          {" "}
          <span className="sr-only">Light Mode</span>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <RiSunLine size={22}/>
          </span>
          {/* <Image src="/assets/sun.svg" alt="light-mode" height={25} width={25} /> */}
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg cursor-pointer group bg-gradient-to-br from-primary-purple to-secondary-pink group-hover:from-primary-purple group-hover:to-secondary-pink hover:text-white dark:text-white  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          {" "}
          <span className="sr-only">Dark Mode</span>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <RiMoonFill size={22}/>
          </span>
          {/* <Image src="/assets/moon.svg" alt="dark-mode" height={25} width={25} /> */}
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
