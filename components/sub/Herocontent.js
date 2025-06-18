"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const Herocontenet = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 mt-20 lg:mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-4 md:gap-5 justify-center m-auto text-center lg:text-start">
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
          I&apos;m a Computer Science Engineer with experience in Website, Mobile, and Software development.
        </motion.div>

        {/* Button with rocket icon aligned with text */}
        <div className="flex items-center justify-start mt-4 gap-3">
          <a
            href="https://drive.google.com/file/d/1qGqRRbPrDw0v7VWq9XrZ3NVLkt0EwTa6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white bg-transparent hover:bg-transparent hover:text-purple-500 py-2 px-4 rounded-full border-none transition-all duration-300"
          >
            <RocketLaunchIcon className="h-6 w-6 mr-2" />
            Download Resume
          </a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-8 lg:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Work-Icon"
          height={500}
          width={500}
          priority
          className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-auto h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Herocontenet;
