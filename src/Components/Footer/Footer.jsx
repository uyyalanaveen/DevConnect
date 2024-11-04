// src/components/Footer.jsx
import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Title */}
        <div className="text-lg font-bold mb-4 md:mb-0">
          DevConnect
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <a href="/" className="hover:text-white">Home</a>
          <a href="about" className="hover:text-white">About</a>
          <a href="contact" className="hover:text-white">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-white" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-white" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} DevConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

