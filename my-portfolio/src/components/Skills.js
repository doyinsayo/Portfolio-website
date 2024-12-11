// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="p-10 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Proficient in:</h3>
        <ul className="list-disc list-inside mt-2">
          <li>Solidity programming</li>
          <li>ERC standards (ERC-20, ERC-721, ERC-1155)</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Experience with:</h3>
        <ul className="list-disc list-inside mt-2">
          <li>Hardhat/Truffle development environments</li>
          <li>OpenZeppelin contract libraries</li>
          <li>Foundry for testing and deployment</li>
          <li>Ethers.js/Web3.js for contract interactions</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Additional Skills:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">JavaScript</div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">Python</div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">Rust</div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">React</div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">Communication</div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">Teamwork</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;