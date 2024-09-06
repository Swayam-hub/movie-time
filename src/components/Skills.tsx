"use client";
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }: any) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl mt-64 w-full text-center uppercase mb-4">Skills</h2>
      <div className=" h-[100vh] relative bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm flex items-center justify-center">
        {/*  */}

        <motion.div
          className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Node" x="15vw" y="-12vw" />
        <Skill name="Github" x="32vw" y="-5vw" />
        <Skill name="NestJS" x="0vw" y="-20vw" />
        <Skill name="Redux" x="-25vw" y="18vw" />
        <Skill name="MongoDB" x="-15vw" y="21vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
        <Skill name="Typescript" x="18vw" y="18vw" />
        <Skill name="ExpressJS" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
