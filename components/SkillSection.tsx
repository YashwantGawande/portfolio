import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiReact, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface SkillItem {
  skill: string;
  icon: React.ReactElement;
  desc: string;
}

const SKILL_ITEMS: Array<SkillItem> = [
  {
    skill: "HTML",
    icon: <IoLogoHtml5 />,
    desc: "HTML developer proficient in creating structured and accessible web pages using HTML. Skilled in optimizing performance and troubleshooting code for seamless web experiences. Knowledgeable in SEO principles and cross-browser compatibility.",
  },
  {
    skill: "CSS",
    icon: <IoLogoCss3 />,
    desc: "CSS developer skilled in creating visually appealing and responsive web layouts. Proficient in implementing animations, optimizing styles for performance, and ensuring cross-browser compatibility. Knowledgeable in modern CSS features and best practices for a polished user interface.",
  },
  {
    skill: "JavaScript",
    icon: <IoLogoJavascript />,
    desc: "JavaScript developer skilled in writing clean and efficient code for interactive web applications. Proficient in working with the React framework to create dynamic and interactive user experiences.Experienced in problem-solving, debugging, and optimizing performance for cross-browser compatibility.",
  },
  {
    skill: "TypeScript",
    icon: <SiTypescript />,
    desc: "TypeScript developer skilled in writing type-safe and maintainable code for robust applications. Experienced in using TypeScript with frameworks like React to leverage its static typing capabilities. Proficient in debugging, refactoring, and optimizing TypeScript code for efficient development workflows.",
  },
  {
    skill: "React",
    icon: <SiReact />,
    desc: "React developer experienced in building dynamic web applications using the React library. Proficient in creating reusable components, managing state, and implementing routing for smooth navigation. Skilled in debugging, testing, and optimizing React code for exceptional user experiences.",
  },
  {
    skill: "Next.js",
    icon: <TbBrandNextjs />,
    desc: "Next.js developer experienced in building performant web applications using the Next.js framework. Proficient in utilizing server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR) to optimize application performance. Skilled in leveraging Next.js features like automatic code splitting and dynamic routing for efficient development and seamless user experiences.",
  },
  {
    skill: "Mongodb",
    icon: <SiMongodb />,
    desc: "MongoDB developer experienced in designing and implementing efficient database solutions. Proficient in performing complex queries, optimizing performance, and integrating MongoDB with backend frameworks. Skilled in data migration and backup processes for data integrity and scalability.",
  },
  {
    skill: "Postgresql",
    icon: <SiPostgresql />,
    desc: "PostgreSQL developer experienced in designing and managing relational databases. Proficient in writing complex SQL queries and optimizing query performance. Skilled in PostgreSQL administration and ensuring data integrity for reliable applications.",
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
      <div className="flex flex-wrap justify-center gap-5 pt-4 ">
        {SKILL_ITEMS.map((item, id) => {
          return (
            <div
              key={id}
              className="lg:w-[45%] w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow hover:shadow-primary-purple/50 sm:p-8 dark:bg-stone-900/30 dark:border-gray-700"
            >
              <div className="flex items-center gap-5 mb-5 text-3xl font-bold text-gray-900 dark:text-white">
                {item.icon}
                {item.skill}
              </div>
              <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
