import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles.css';

const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-light-blue">
      {/* Top bar: Logo, Desktop Menu, Book Demo, Mobile Hamburger */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center w-full">
        {/* Logo & Tagline on the left */}
        <div className="flex-shrink-0">
          <Link to="/">
            <h1 className="text-2xl logo">Amie</h1>
          </Link>
        </div>

        {/* Desktop Menu: spread out the links across the middle */}
        <div className="hidden md:flex flex-1 justify-evenly items-center font-bold">
          <Link to="/learn" className="text-dark-blue hover:text-mid-blue">
            Learn
          </Link>
          <Link to="/business" className="text-dark-blue hover:text-mid-blue">
            For Business
          </Link>
          <Link to="/resources" className="text-dark-blue hover:text-mid-blue">
            Resources
          </Link>
          <Link to="/about" className="text-dark-blue hover:text-mid-blue">
            About
          </Link>
        </div>

        {/* Book a Demo button on the right */}
        <div className="hidden md:flex ml-4">
          <Link
            to="/login"
            className="text-dark-blue px-4 py-2 my-auto mr-4 rounded-full hover:bg-mid-blue hover:text-soft-white transition-colors border-2 border-mid-blue"
          >
            Sign in
          </Link>

          <Link
            to="/login"
            className="bg-dark-blue text-soft-white px-4 py-2 my-auto rounded-full hover:bg-mid-blue transition-colors border-2 border-dark-blue hover:border-mid-blue"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Icon (shown on small screens) */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-dark-blue hover:text-mid-blue focus:outline-none"
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
        <div className="md:hidden bg-light-blue px-4 py-2 text-center font-bold">
          <Link
            to="/learn"
            className="block text-dark-blue hover:text-mid-blue mb-4"
            onClick={() => setIsOpen(false)}
          >
            Learn
          </Link>
          <Link
            to="/business"
            className="block text-dark-blue hover:text-mid-blue my-4"
            onClick={() => setIsOpen(false)}
          >
            For Business
          </Link>
          <Link
            to="/resources"
            className="block text-dark-blue hover:text-mid-blue my-4"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>
          <Link
            to="/about"
            className="block text-dark-blue hover:text-mid-blue my-4"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/login"
            className="block border-2 border-mid-blue text-dark-blue hover:text-soft-white px-4 py-2 my-4 mx-auto rounded-full hover:bg-mid-blue w-1/2 lg:w-1/4"
            onClick={() => setIsOpen(false)}
          >
            Sign in
          </Link>
          
          <Link
            to="/login"
            className="block bg-dark-blue text-soft-white px-4 py-2 my-4 mx-auto rounded-full hover:bg-mid-blue w-1/2 lg:w-1/4 border-dark-blue hover:border-mid-blue"
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
