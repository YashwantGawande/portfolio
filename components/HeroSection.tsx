"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home" className="w-full max-w-[1400px]">
      <div className="flex flex-col justify-between mx-auto lg:flex-row lg:justify-around">
        <div className="flex flex-col justify-center text-center rounded-sm lg:text-left">
          <h1 className="text-2xl font-bold md:text-5xl xl:text-7xl">
            Hi, I&#39;m Yashwant Gawande!
          </h1>
          <p className="text-lg md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-purple-500">
              Full-stack developer{" "}
            </span>
            based in India,Working towards creating software that makes life
            easier and more meaningful.
          </p>
          <Link
            to="projects"
            className="px-6 py-3 font-semibold text-center bg-purple-500 rounded shadow cursor-pointer text-neutral-100 hover:bg-purple-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
        <div className="flex items-center justify-center lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src="/assets/hero-work.svg"
            alt=""
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
