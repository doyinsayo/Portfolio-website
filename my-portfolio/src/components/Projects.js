// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold">Project Name</h3>
          <p>A brief description of the project.</p>
          <a href="#" className="text-blue-400">View Project</a>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;