"use client"
import React from 'react'
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';


const SkillContent = ({ src, width, height, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const imageVariants={
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    const animationDelay=0.3

    return (
        <motion.div ref={ref} initial="hidden" variants={imageVariants} animate={inView ?"visible":"hidden"} custom={index} transition={{delay:index*animationDelay}}>
            <Image src={src} width={width} height={height} priority
  className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-auto h-auto" alt='skill image'/>
        </motion.div>

    );
}

export default SkillContent
