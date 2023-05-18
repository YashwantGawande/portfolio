"use client";
import Image from "next/image";
import React from "react";

interface Projects {
  name: string;
  img: string;
  desc: string;
  tech: Array<string>;
}

const PROJECTS: Array<Projects> = [
  {
    name: "Ai blog app",
    img: "/assets/ai-1.jpg",
    desc: "Introducing an AI-powered blog app that revolutionizes content creation. Harnessing the power of artificial intelligence, this app generates high-quality blog articles effortlessly, saving you time and effort. ",
    tech: ["React", "Next.js", "Tailwind css"],
  },
  {
    name: "Ai blog app",
    img: "/assets/ai-1.jpg",
    desc: "Introducing an AI-powered blog app that revolutionizes content creation. Harnessing the power of artificial intelligence, this app generates high-quality blog articles effortlessly, saving you time and effort. ",
    tech: ["React", "Next.js", "Tailwind css"],
  },
  {
    name: "Ai blog app",
    img: "/assets/ai-1.jpg",
    desc: "Introducing an AI-powered blog app that revolutionizes content creation. Harnessing the power of artificial intelligence, this app generates high-quality blog articles effortlessly, saving you time and effort. ",
    tech: ["React", "Next.js", "Tailwind css"],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="container p-4 mx-auto rounded-lg lg:p-8 xl:px-0 "
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center p-4 lg:w-1/2 lg:p-8">
          <h1 className="p-2 mb-4 text-2xl font-bold text-center lg:p-4 xl:text-4xl">
            Projects
          </h1>
          <div className="w-full h-auto md:w-[70%]">
            <Image
              src="/assets/app-launch.svg"
              width={616}
              height={617}
              style={{ objectFit: "cover" }}
              alt="Hero Illustration"
              priority={false}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 p-4 lg:w-1/2 lg:p-8">
          {PROJECTS.map((item, id) => {
            return (
              <div
                key={id}
                className="relative p-4 text-center bg-white border border-gray-200 rounded-lg shadow z-1 hover:shadow-primary-purple/50 sm:p-8 dark:bg-stone-900/30 dark:border-gray-700"
              >
                <div className="flex items-center gap-5 mb-5 text-3xl font-bold text-gray-900 dark:text-white">
                  {item.name}
                </div>
                <p className="mb-5 text-base text-gray-800 sm:text-lg dark:text-gray-100">
                  {item.desc}
                </p>
                <div className="flex flex-wrap">
                  {item.tech.map((tech, id) => {
                    return (
                      <span
                        key={id}
                        className="dark:bg-primary-purple bg-secondary-pink font-medium border rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div
                  className="absolute inset-0 transition-opacity duration-300 bg-center bg-cover rounded-lg opacity-0 hover:opacity-20 dark:hover:opacity-10"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
