"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col-reverse py-16 my-10 text-center animate-fadeIn animation-delay-2 sm:py-32 md:py-48 lg:flex-row md:space-x-4 md:text-left">
        <div className="mb-5 md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-2xl font-bold md:mt-0 md:text-5xl">
            Hi, I&#39;m Yashwant Gawande!
          </h1>
          <p className="mt-4 mb-6 text-lg md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-purple-500">
              Software Engineer{" "}
            </span>
            based in Los Angeles, CA. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <Link
            to="projects"
            className="px-6 py-3 font-semibold bg-purple-500 rounded shadow cursor-pointer text-neutral-100 hover:bg-purple-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
        <div className="flex items-center justify-center bg-white rounded-md md:mt-2 md:w-1/2">
          <Image src="/assets/hero-work.svg" alt="" width={325} height={325} style={{objectFit: "cover"}}/>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
