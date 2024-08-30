import React from 'react';
import Image from 'next/image';
import { Socials } from '../../constants';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2 md:px-4">
      
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
          <Image src='/Designer1png.png' priority alt="logo" width={50} height={55} className='cursor-pointer hover:animate-slowspin w-full h-auto'/>
          <span className='font-bold ml-2 hidden md:block text-gray-300'>ANUGRAHA</span>
        </a>

        
        <div className="hidden md:flex flex-row items-center justify-between w-[500px] h-full">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-300">
            <a href="#about-me" className="cursor-pointer glow-text">
              About me
            </a>
            <a href="#skills" className="cursor-pointer glow-text">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer glow-text">
              Projects
            </a>
          </div>
        </div>

  
        <div className='flex flex-row gap-7 items-center'>
          {
            Socials.map((social) => (
              <a href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
              <Image src={social.src} alt={social.name}  priority width={24} height={24} className="w-7 h-7 max-w-md"/>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
