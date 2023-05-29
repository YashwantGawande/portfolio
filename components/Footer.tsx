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
    <footer className="font-sans">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium md:justify-start">
          <span className="text-xl">Yash</span>
        </a>

        <ul className="inline-flex justify-center gap-4 mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
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
