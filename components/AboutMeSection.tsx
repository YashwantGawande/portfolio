"use client";
import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <section id="about" className="container p-5 mt-4 rounded-lg">
      <div className="">
        <div className="text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            className="py-5 text-4xl md:text-6xl font-source"
          >
            Who&#39;s Yash?
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            className="text-lg md:text-xl"
          >
            Hi there 👋 My name is Yashwant Gawande. I am Full-Stack Developer
            based in india.
          </motion.p>
          <br />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            className="text-lg md:text-xl"
          >
            I&#39;m a Full Stack Developer experienced in creating innovative
            web applications. With expertise in both front-end and back-end
            development, I design visually appealing interfaces and ensure
            efficient data management. My goal is to deliver feature-rich web
            applications that make a lasting impression.
          </motion.p>
          <br />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            className="text-lg md:text-xl"
          >
            My approach to development goes beyond just writing code. I strive
            to understand the bigger picture and the problem that needs to be
            solved. By collaborating closely with clients and stakeholders, I
            can provide valuable insights and create solutions that meet their
            unique needs.
          </motion.p>
          <br />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            className="text-lg md:text-xl"
          >
            Thank you for visiting my portfolio website. Feel free to explore my
            projects and get in touch if you have any exciting opportunities or
            ideas to discuss. Let&#39;s create something amazing together!
          </motion.p>
        </div>
        <motion.hr
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className="mt-10"
        />
        <div className="flex flex-col justify-center my-5">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            className="py-5 text-2xl text-center md:text-4xl"
          >
            Contact me
          </motion.h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
