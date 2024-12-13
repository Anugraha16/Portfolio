"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Projectcontent = ({ src, title, description }) => {
  return (
    <motion.div
      className='flex-1 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#1c0530]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <motion.div
        className='relative h-64'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={src}
          alt={title}
          style={{ objectFit: 'cover' }}
          priority
          width={1000}
          height={500}
          className='rounded-t-lg'
        />
      </motion.div>
      <div className='relative p-6 bg-gradient-to-b from-[#1c0530] to-[#2a0e61]'>
        <h1 className='text-2xl font-bold text-white'>{title}</h1>
        <p className='mt-4 text-gray-300'>{description}</p>
      </div>
    </motion.div>
  );
};

export default Projectcontent;
