"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div
        className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="px-6 py-12 mt-10 text-center md:px-12 lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="flex flex-col-reverse items-center gap-12 lg:grid-cols-2 lg:flex-row">
            <div className="w-2/4 mt-12 lg:mt-0">
              <h1 className="mt-6 text-2xl font-bold md:mt-0 md:text-5xl">
                Hi, I&#39;m Yashwant Gawande!
              </h1>
              <p className="mt-4 mb-6 text-lg md:text-2xl">
                I&#39;m a{" "}
                <span className="font-semibold text-purple-500">
                  Full-stack developer{" "}
                </span>
                based in India,Working towards creating software that makes life
                easier and more meaningful.
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
            <div className="w-2/4 mb-12 lg:mb-0">
              <Image
                src="/assets/hero-work.svg"
                alt=""
                width={600}
                height={600}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
