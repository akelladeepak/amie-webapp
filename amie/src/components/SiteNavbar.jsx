import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles.css';

const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f1faee] shadow">
      {/* Top bar: Logo, Desktop Menu, Book Demo, Mobile Hamburger */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center w-full">
        {/* Logo & Tagline on the left */}
        <div className="flex-shrink-0">
          <Link to="/">
            <h1 className="text-2xl logo">Amie</h1>
            <p className="-mt-1 text-xs text-blue-950/80">
              Emotional &amp; Mental Health Assistant
            </p>
          </Link>
        </div>

        {/* Desktop Menu: spread out the links across the middle */}
        <div className="hidden md:flex flex-1 justify-evenly items-center">
          <Link to="/learn" className="text-gray-700 hover:text-[#55ab98]">
            Learn
          </Link>
          <Link to="/business" className="text-gray-700 hover:text-[#55ab98]">
            For Business
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-[#55ab98]">
            Resources
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-[#55ab98]">
            About
          </Link>
        </div>

        {/* Book a Demo button on the right */}
        <div className="hidden md:flex ml-4">
          <Link
            to="/login"
            className="text-dark-blue px-4 py-2 mr-4 rounded-full hover:bg-[#55ab98] hover:text-soft-white transition-colors border border-dark-blue"
          >
            Sign in
          </Link>

          <Link
            to="/login"
            className="bg-[#1d3557] text-white px-4 py-2 rounded-full hover:bg-[#55ab98] transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Icon (shown on small screens) */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                // X icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (collapsible) */}
      {isOpen && (
        <div className="md:hidden bg-[#f1faee] px-4 py-2 text-center font-bold">
          <Link
            to="/learn"
            className="block text-gray-700 hover:text-[#55ab98] mb-4"
            onClick={() => setIsOpen(false)}
          >
            Learn
          </Link>
          <Link
            to="/business"
            className="block text-gray-700 hover:text-[#55ab98] my-4"
            onClick={() => setIsOpen(false)}
          >
            For Business
          </Link>
          <Link
            to="/resources"
            className="block text-gray-700 hover:text-[#55ab98] my-4"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-[#55ab98] my-4"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/login"
            className="block border border-[#1d3557] text-[#1d3557] hover:text-soft-white px-4 py-2 my-4 mx-auto rounded-full hover:bg-[#55ab98] w-1/4"
            onClick={() => setIsOpen(false)}
          >
            Sign in
          </Link>
          
          <Link
            to="/login"
            className="block bg-[#1d3557] text-[#f1faee] px-4 py-2 my-4 mx-auto rounded-full hover:bg-[#55ab98] w-1/4"
            onClick={() => setIsOpen(false)}
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default SiteNavbar;
