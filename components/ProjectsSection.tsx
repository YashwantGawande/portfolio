"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
  {
    name: "Ai blog app",
    img: "/assets/ai-1.jpg",
    desc: "Introducing an AI-powered blog app that revolutionizes content creation. Harnessing the power of artificial intelligence, this app generates high-quality blog articles effortlessly, saving you time and effort. ",
    tech: ["React", "Next.js", "Tailwind css"],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="container">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        className="p-2 my-4 text-4xl text-center font-source lg:p-4 md:text-6xl lg:text-8xl"
      >
        Projects
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
        className="grid justify-center grid-rows-1 mx-auto mt-4 lg:grid-cols-2 lg:p-8 xl:px-0"
      >
        <div>
          <div className="lg:sticky top-16">
            <div className="flex justify-center w-full h-auto">
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
        </div>
        <div className="">
          {PROJECTS.map((item, id) => {
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
                key={id}
                className="relative p-4 m-5 text-center bg-white border border-gray-200 rounded-lg shadow z-1 hover:shadow-primary-purple/50 sm:p-8 dark:bg-stone-900/30 dark:border-gray-700"
              >
                <div className="mb-5 text-3xl text-left font-source">
                  {item.name}
                </div>
                <p className="mb-5 text-left text-gray-800 dark:text-gray-100">
                  {item.desc}
                </p>
                <div className="flex flex-wrap">
                  {item.tech.map((tech, id) => {
                    return (
                      <span
                        key={id}
                        className="dark:bg-primary-purple bg-secondary-pink font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
