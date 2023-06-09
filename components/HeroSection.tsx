"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { Particles } from "./Particle";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="container mx-auto xl:px-0">
      <Particles
        className="absolute inset-0 -z-10"
        color={"#8642e3"}
        quantity={100}
      />
      <div className="flex flex-col-reverse justify-center h-screen lg:flex-row">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="text-4xl text-center font-source md:text-6xl lg:text-left"
            >
              Hi, I&#39;m Yash
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.75,
              }}
              className="py-5 text-gray-800 md:text-xl dark:text-gray-100 "
            >
              I&#39;m a{" "}
              <span className="font-black text-transparent animate-text bg-gradient-to-r from-primary-purple via-secondary-pink to-purple-800 bg-clip-text">
                Full-Stack Developer
              </span>{" "}
              focused on creating practical solutions that improve people&#39;s
              lives. My approach is grounded in solving real-world problems and
              building user-friendly software that&#39;s both functional and
              simple. I stay up-to-date with the latest technologies to ensure
              my work is cutting edge and meaningful.
            </motion.p>
            <div className="flex items-center gap-2">
              <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.9,
                }}
              >
                <Link
                  to="projects"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="py-3 mb-2 mr-2 text-sm font-medium text-center text-white rounded-lg shadow-lg cursor-pointer bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 px-7"
                >
                  {/* {"<Code />"} */}
                  Projects
                </Link>
              </motion.button>
              <motion.a
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 1.15,
                }}
                href="https://github.com/YashwantGawande"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-100"
              >
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span className="text-sm"> View on Github</span>
                {/* <span>Github</span> */}
              </motion.a>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="p-5 flex items-center justify-center self-center md:w-[80%] lg:w-[50%]"
        >
          <Image
            src="/assets/hero-work.svg"
            width={616}
            height={617}
            style={{ objectFit: "cover" }}
            alt="Hero Illustration"
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
