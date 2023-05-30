import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
interface Links {
  // name: string;
  icon: React.ReactElement;
  href: string;
}
const LINKS: Array<Links> = [
  {
    //   name: "twitter",
    icon: <BsTwitter />,
    href: "https://twitter.com/yash1t_gawande",
  },
  {
    //   name: "linkedin",
    icon: <BsLinkedin />,
    href: "https://github.com/YashwantGawande",
  },
  {
    //   name: "github",
    icon: <BsGithub />,
    href: "https://github.com/YashwantGawande",
  },
];

const Footer = () => {
  return (
    <footer className="font-sans border-t-2 bg-white/50 dark:bg-stone-900/50">
      <div className="container flex items-center justify-between p-5 mx-auto">
        <a className="font-medium">
          <span className="text-xl">Yash</span>
        </a>

        <ul className="flex gap-4">
          {LINKS.map((item, id) => {
            return (
              <li key={id} className="flex items-center gap-1">
                <a href={item.href} target="_blank" rel="noopener">
                  <span>{item.icon}</span>
                  {/* {item.name} */}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
