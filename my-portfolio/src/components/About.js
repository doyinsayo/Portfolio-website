// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center p-10 text-center mt-20">
      <h2 className="text-4xl font-bold">Smart Contract Developer (EVM), Problem Solver, and Curious Mind.</h2>
      <p className="mt-4 text-lg max-w-lg">
      I design and implement decentralized applications (dApps) using Solidity and advanced smart contract patterns.
      </p>
      <img src="/path/to/your/image.jpg" alt="Profile" className="mt-8 rounded-full w-32 h-32 object-cover border-4 border-gray-600" />
    </section>
  );
};

export default About;