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
    <div>
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="p-2 bg-slate-100 rounded-xl"
        >
          <RiSunLine size={25} color="black" />
          {/* <Image src="/assets/sun.svg" alt="light-mode" height={25} width={25} /> */}
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="p-2 bg-slate-100 rounded-xl"
        >
          <RiMoonFill size={25} color="black" />
          {/* <Image src="/assets/moon.svg" alt="dark-mode" height={25} width={25} /> */}
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
