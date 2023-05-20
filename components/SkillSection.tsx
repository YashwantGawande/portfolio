import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiReact, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Tilt from "react-parallax-tilt";

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
    skill: "Postgresql",
    icon: <SiPostgresql />,
  },
  // { skill: "Tailwind CSS", icon: "", desc: "" },
  // { skill: "GitHub", icon: "", desc: "" },
  // { skill: "Node.js", icon: "", desc: "" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="container p-4 mx-auto mt-4 bg-black rounded-lg lg:p-8 xl:px-0 bg-opacity-10"
    >
      <h1 className="p-2 mb-4 text-2xl font-bold text-center lg:p-4 xl:text-4xl">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-5 pt-4">
        {SKILL_ITEMS.map((item, id) => {
          return (
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="bottom"
              glareBorderRadius="20px"
              key={id}
            >
              <div
                
                className="p-4 text-center bg-white border border-gray-200 rounded-lg shadow hover:shadow-primary-purple/50 sm:p-8 dark:bg-stone-900/30 dark:border-gray-700"
              >
                <div className="flex items-center gap-5 text-3xl font-bold text-gray-900 dark:text-white">
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
    </section>
  );
};

export default AboutSection;
