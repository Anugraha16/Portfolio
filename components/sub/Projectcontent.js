import React from 'react';
import Image from 'next/image';
import { fill } from 'three/src/extras/TextureUtils.js';

const Projectcontent = ({ src, title, description }) => {
  return (
    <div className='flex-1 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform hover:scale-105 transition-transform duration-300 ease-in-out'>
      <div className='relative h-64'>
        <Image 
          src={src} 
          alt={title} 
          style={{objectFit:'cover'}} 
          priority
          width={1000}
          height={500}
          className='rounded-t-lg'
        />
      </div>
      <div className='relative p-6 bg-gradient-to-b from-[#1c0530] to-[#2a0e61]'>
        <h1 className='text-2xl font-bold text-white'>{title}</h1>
        <p className='mt-4 text-gray-300'>{description}</p>
      </div>
    </div>
  );
}

export default Projectcontent;
