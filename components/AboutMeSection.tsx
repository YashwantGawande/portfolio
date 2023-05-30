"use client";
import React from "react";
import ContactForm from "./ContactForm";

const AboutMeSection = () => {
  return (
    <section id="about" className="container p-5 mt-4 rounded-lg">
      <div className="">
        <div className="text-center">
          <h1 className="py-5 text-4xl md:text-6xl font-source">
            Who&#39;s Yash?
          </h1>
          <p className="text-lg md:text-xl">
            Hi there 👋 My name is Yashwant Gawande. I am Full-Stack Developer
            based in india.
          </p>
          <br />
          <p className="text-lg md:text-xl">
            I&#39;m a Full Stack Developer experienced in creating innovative
            web applications. With expertise in both front-end and back-end
            development, I design visually appealing interfaces and ensure
            efficient data management. My goal is to deliver feature-rich web
            applications that make a lasting impression.
          </p>
          <br />
          <p className="text-lg md:text-xl">
            My approach to development goes beyond just writing code. I strive
            to understand the bigger picture and the problem that needs to be
            solved. By collaborating closely with clients and stakeholders, I
            can provide valuable insights and create solutions that meet their
            unique needs.
          </p>
          <br />
          <p className="text-lg md:text-xl">
            Thank you for visiting my portfolio website. Feel free to explore my
            projects and get in touch if you have any exciting opportunities or
            ideas to discuss. Let&#39;s create something amazing together!
          </p>
        </div>
        <hr className="mt-10"/>
        <div className="flex flex-col justify-center my-5">
          <h3 className="py-5 text-2xl text-center md:text-4xl">
            Contact me
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
