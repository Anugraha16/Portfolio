"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Herocontenet = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 mt-20 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-4 md:gap-5 justify-center m-auto text-center lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
          <h1 className="Welcome-text text-[13px] whitespace-nowrap">
            Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[90%] md:max-w-[600px] w-auto h-auto mx-auto lg:mx-0"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">ANUGRAHA</span>
          Software Developer
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-gray-400 my-3 md:my-5 max-w-[90%] md:max-w-[600px] mx-auto lg:mx-0"
        >
          I&apos;m a Computer Science Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px] md:max-w-[200px] mx-auto lg:mx-0"
        >
          Learn More!
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-8 lg:mt-0"
      >
        <Image
          src="/mainIConsdark.svg"
          alt="Work-Icon"
          height={500}
          width={500}
          priority
          className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-auto h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default Herocontenet;
