import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="about-me">
      <footer className="w-full text-gray-200 py-6 px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section: Copyright */}
        <div className="text-gray-400 text-base mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Anugraha. All rights reserved.
        </div>

        {/* Center Section: Email */}
        <a
          href="mailto:mifwebchain@gmail.com"
          className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-lg mb-4 sm:mb-0"
        >
          <FaEnvelope className="w-6 h-6 mr-2" />
          <span className="text-lg">anugrahaaa1216@gmail.com</span>
        </a>

        {/* Right Section: Phone */}
        <a
          href="tel:+917904756887"
          className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-lg"
        >
          <FaPhoneAlt className="w-6 h-6 mr-2" />
          <span className="text-lg">+91 7904756887</span>
        </a>
      </footer>
    </section>
  );
};

export default Footer;
