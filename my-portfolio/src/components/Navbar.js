// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Doyinsayo</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;