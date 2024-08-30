"use client"
import React from 'react'
import { slideInFromTop } from '../../utils/motion'
import { motion } from "framer-motion";

const Skilltext = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
          variants={slideInFromTop}
          className="opacity-[0.9] mx-auto lg:mx-0"
        >
          <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            Technical  Skills
          </h1>
        </motion.div>
    </div>
  )
}

export default Skilltext
