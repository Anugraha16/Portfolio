import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="about-me">
      <footer className="w-full text-gray-200 py-6 flex justify-between items-center px-4">
        {/* Left Section: Copyright */}
        <div className="text-gray-400 text-base">
          &copy; {new Date().getFullYear()} Anugraha. All rights reserved.
        </div>

        {/* Center Section: Email */}
        <a
          href="mailto:mifwebchain@gmail.com"
          className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-lg"
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
