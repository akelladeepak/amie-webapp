import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      {/* Top bar: Logo, Desktop Menu, Book Demo, Mobile Hamburger */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center w-full">
        {/* Logo & Tagline on the left */}
        <div className="flex-shrink-0">
          <Link to="/">
            <h1 className="text-2xl font-bold text-blue-700">Amie</h1>
            <p className="-mt-1 text-xs text-blue-950/80">
              Emotional &amp; Mental Health Assistant
            </p>
          </Link>
        </div>

        {/* Desktop Menu: spread out the links across the middle */}
        <div className="hidden md:flex flex-1 justify-evenly items-center">
          <Link to="/learn" className="text-gray-700 hover:text-blue-600">
            Learn
          </Link>
          <Link to="/business" className="text-gray-700 hover:text-blue-600">
            For Business
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-blue-600">
            Resources
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </div>

        {/* Book a Demo button on the right */}
        <div className="hidden md:flex ml-4">
          <Link
            to="/book-demo"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Book a Demo
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
        <div className="md:hidden bg-white shadow px-4 py-2">
          <Link
            to="/learn"
            className="block text-gray-700 hover:text-blue-600 mb-2"
            onClick={() => setIsOpen(false)}
          >
            Learn
          </Link>
          <Link
            to="/business"
            className="block text-gray-700 hover:text-blue-600 mb-2"
            onClick={() => setIsOpen(false)}
          >
            For Business
          </Link>
          <Link
            to="/resources"
            className="block text-gray-700 hover:text-blue-600 mb-2"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-blue-600 mb-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/book-demo"
            className="block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default SiteNavbar;
