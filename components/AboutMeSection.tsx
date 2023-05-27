"use client";
import React from "react";
import ContactForm from "./ContactForm";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

interface Links {
  name: string;
  icon: React.ReactElement;
  href: string;
}
const LINKS: Array<Links> = [
  {
    name: "twitter",
    icon: <BsTwitter />,
    href: "https://twitter.com/yash1t_gawande",
  },
  {
    name: "linkedin",
    icon: <BsLinkedin />,
    href: "https://github.com/YashwantGawande",
  },
  {
    name: "github",
    icon: <BsGithub />,
    href: "https://github.com/YashwantGawande",
  },
];
const AboutMeSection = () => {
  return (
    <section id="about" className="container h-screen p-5 mt-4 rounded-lg">
      <div className="flex flex-col gap-5">
        <div className="lg:w-1/2 ">
          <h1 className="pb-5 text-4xl font-source">Who&#39;s Yash?</h1>
          <p className="text-lg">
            Hi there 👋 My name is Yashwant Gawande. I am Full-Stack Developer
            based in india. 
          </p>
        </div>
        <div>another content</div>
      </div>
      <div className="flex flex-col gap-5 my-5">
        <h3 className="text-2xl text-center">Contact me</h3>
        <ContactForm />
      </div>
      <div className="py-5">
        <h3 className="text-2xl">Find Me</h3>
        <ul>
          {LINKS.map((item, id) => {
            return (
              <li key={id} className="flex items-center gap-2">
                <a href={item.href} target="_blank" rel="noopener">
                  {item.name}
                </a>
                {item.icon}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AboutMeSection;
