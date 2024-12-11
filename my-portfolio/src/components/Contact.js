// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <form className="mt-4">
        <input type="text" placeholder="Your Name" className="border p-2 w-full mb-4 bg-gray-700 text-white" />
        <input type="email" placeholder="Your Email" className="border p-2 w-full mb-4 bg-gray-700 text-white" />
        <textarea placeholder="Your Message" className="border p-2 w-full mb-4 bg-gray-700 text-white" rows="4"></textarea>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;