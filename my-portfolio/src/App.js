/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl">Welcome to My Portfolio</h1>
        <p className="mt-2">Blockchain Developer | Smart Contract Specialist</p>
      </header>

      <main className="p-6">
        <section>
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-2">
            I am a passionate blockchain developer with expertise in building decentralized applications and smart contracts.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Project Name</h3>
              <p>A brief description of the project.</p>
              <div className="mt-2">
                <a href="#" className="text-blue-600">GitHub Repository</a> | 
                <a href="#" className="text-blue-600"> Live Demo</a>
              </div>
            </div>
            {/* Repeat for additional projects */}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <form className="mt-4">
            <input type="text" placeholder="Your Name" className="border p-2 w-full mb-4" />
            <input type="email" placeholder="Your Email" className="border p-2 w-full mb-4" />
            <textarea placeholder="Your Message" className="border p-2 w-full mb-4" rows="4"></textarea>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
