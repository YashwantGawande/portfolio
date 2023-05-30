"use client";
import Image from "next/image";
import React from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoNodejs,
} from "react-icons/io";
import {
  SiTypescript,
  SiReact,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Tilt from "react-parallax-tilt";
import "@/styles/ParallaxEffectGlareScale.css";

interface SkillItem {
  skill: string;
  icon: React.ReactElement;
}

const SKILL_ITEMS: Array<SkillItem> = [
  {
    skill: "HTML",
    icon: <IoLogoHtml5 />,
  },
  {
    skill: "CSS",
    icon: <IoLogoCss3 />,
  },
  {
    skill: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    skill: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    skill: "React",
    icon: <SiReact />,
  },
  {
    skill: "Next.js",
    icon: <TbBrandNextjs />,
  },
  {
    skill: "Mongodb",
    icon: <SiMongodb />,
  },
  {
    skill: "MySQL",
    icon: <SiMysql />,
  },
  { skill: "Tailwind CSS", icon: <SiTailwindcss /> },
  { skill: "GitHub", icon: <IoLogoGithub /> },
  { skill: "Node.js", icon: <IoLogoNodejs /> },
];

const SkillSection = () => {
  return (
    <section id="skills" className="container">
      <h1 className="p-2 my-4 text-4xl text-center font-source lg:p-4 md:text-6xl lg:text-8xl">
        Skills
      </h1>
      <div className="flex flex-col p-5 mx-auto lg:items-center lg:p-8 xl:px-0 lg:flex-row">
        <div className="lg:w-1/2">
          <div className="flex justify-center w-full h-auto">
            <Image
              src="/assets/engineer.svg"
              width={616}
              height={617}
              style={{ objectFit: "cover" }}
              alt="Hero Illustration"
              priority={false}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center p-4 h-min lg:w-1/2">
          {SKILL_ITEMS.map((item, id) => {
            return (
              <Tilt
                className="p-4 text-base text-center bg-white border border-gray-200 shadow cursor-default xl:p-5 xl:text-lg parallax-effect-glare-scale hover:shadow-primary-purple/50 dark:bg-stone-900/30 dark:border-gray-700"
                glareEnable={true}
                glareMaxOpacity={0.8}
                glareColor="#ffffff"
                glarePosition="bottom"
                // glareBorderRadius="8px"
                key={id}
              >
                <div className="inner-element">
                  <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
                    {item.icon}
                    {item.skill}
                  </div>
                  {/* <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
              {item.desc}
            </p> */}
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
