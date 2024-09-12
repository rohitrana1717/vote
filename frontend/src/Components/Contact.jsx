import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../Components/style.css";

export const Contact = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-6 flex justify-between items-center z-50 shadow-lg text-lg">
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-white py-3 px-6 hover:bg-purple-700 transition-transform duration-300 transform hover:scale-110 rounded-lg text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white py-3 px-6 hover:bg-purple-700 transition-transform duration-300 transform hover:scale-110 rounded-lg text-xl">
              About
            </Link>
          </li>
          <li>
            <Link to="/working" className="text-white py-3 px-6 hover:bg-purple-700 transition-transform duration-300 transform hover:scale-110 rounded-lg text-xl">
              Working
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white py-3 px-6 hover:bg-purple-700 transition-transform duration-300 transform hover:scale-110 rounded-lg text-xl">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/candidate" className="text-white py-3 px-6 hover:bg-purple-700 transition-transform duration-300 transform hover:scale-110 rounded-lg text-xl">
              Candidates
            </Link>
          </li>
        </ul>
      </nav>

      {/* Adjusting the margin top to prevent overlap with the navbar */}
      <div className="mt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white py-20 px-8 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-opacity duration-1000">
            Contact Us
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-500">
            We'd love to hear from you! Please fill out the form below to reach
            out to us.
          </p>
        </div>

        {/* Contact Form Section */}
        <section className="py-12 px-8 bg-white text-gray-800 animate-fade-in-up">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Get in Touch
            </h2>
            <div className="max-w-xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your message"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Address and Contact Details Section */}
        <section className="py-12 px-8 bg-gray-100 text-gray-800 animate-fade-in-up">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our Address
            </h2>
            <p className="text-lg md:text-xl mb-4 text-center">
              1234 Voting Lane, Democracy City, DC 56789, USA
            </p>
            <p className="text-lg md:text-xl mb-4 text-center">
              Email: contact@votingplatform.com
            </p>
            <p className="text-lg md:text-xl mb-4 text-center">
              Phone: +1 234 567 8900
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 px-8 animate-fade-in-up">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Find Us Here
            </h2>
            <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg overflow-hidden">
              <p className="text-center py-24 text-lg text-gray-700">
                [Map Placeholder]
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-6 mt-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
            {/* Quick Links */}
            <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
              <Link
                to="/"
                className="hover:underline transition-all duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:underline transition-all duration-200"
              >
                About
              </Link>
              <Link
                to="/working"
                className="hover:underline transition-all duration-200"
              >
                Working
              </Link>
              <Link
                to="/candidate"
                className="hover:underline transition-all duration-200"
              >
                Candidate
              </Link>
              <Link
                to="/contact"
                className="hover:underline transition-all duration-200"
              >
                Contact
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-600 transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
