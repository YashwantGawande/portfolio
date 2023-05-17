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
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="container p-4 mx-auto lg:p-8 xl:px-0 ">
      <div className="flex flex-col lg:flex-row">
        <div className="p-4 lg:w-1/2 lg:p-8">
          <h1 className="p-2 text-4xl font-bold text-center lg:p-4 xl:text-6xl">
            Projects
          </h1>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            A curated collection of my standout projects showcasing expertise in
            web development, mobile apps, and more. From stunning designs to
            seamless user experiences, each project solves unique problems using
            cutting-edge technologies. Browse brief overviews, key features, and
            interactive demos, and feel free to connect for collaboration or
            inquiries. Welcome to innovation and excellence in action!
          </p>
        </div>
        <div className="p-4 lg:w-1/2 lg:p-8">
          {PROJECTS.map((item, id) => {
            return (
              <div
                key={id}
                className="relative p-4 text-center bg-white border border-gray-200 rounded-lg shadow z-1 hover:shadow-primary-purple/50 sm:p-8 dark:bg-stone-900/30 dark:border-gray-700"
              >
                <div className="flex items-center gap-5 mb-5 text-3xl font-bold text-gray-900 dark:text-white">
                  {item.name}
                </div>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                  {item.desc}
                </p>
                <div className="flex flex-wrap">
                  {item.tech.map((tech, id) => {
                    return (
                      <span
                        key={id}
                        className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="absolute inset-0 transition-opacity duration-300 bg-center bg-cover rounded-lg opacity-0 -z-1 hover:opacity-10" style={{ backgroundImage: `url(${item.img})` }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
