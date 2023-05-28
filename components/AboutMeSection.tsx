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
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="pb-5 text-4xl font-source">Who&#39;s Yash?</h1>
          <p className="text-lg">
            Hi there 👋 My name is Yashwant Gawande. I am Full-Stack Developer
            based in india.
          </p>
          <br />
          <p className="text-lg">
            I&#39;m a Full Stack Developer experienced in creating innovative
            web applications. With expertise in both front-end and back-end
            development, I design visually appealing interfaces and ensure
            efficient data management. My goal is to deliver feature-rich web
            applications that make a lasting impression.
          </p>
          <br />
          <p className="text-lg">
            My approach to development goes beyond just writing code. I strive
            to understand the bigger picture and the problem that needs to be
            solved. By collaborating closely with clients and stakeholders, I
            can provide valuable insights and create solutions that meet their
            unique needs.
          </p>
          <br />
          <p className="text-lg">
            Thank you for visiting my portfolio website. Feel free to explore my
            projects and get in touch if you have any exciting opportunities or
            ideas to discuss. Let&#39;s create something amazing together!
          </p>
        </div>
        <div className="flex flex-col justify-center lg:w-1/2">
          <h3 className="text-2xl text-center">Contact me</h3>
          <ContactForm />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl text-center">Find Me</h3>
        <ul className="">
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
