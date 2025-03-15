import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/mood-selection" className="text-xl font-bold text-blue-600">
          Amie
        </Link>
        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                // X icon when menu is open
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon when menu is closed
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Desktop navigation links */}
        <div className="hidden md:flex">
          <Link
            to="/mood-selection"
            className={`mx-2 my-auto text-gray-700 hover:text-blue-600 ${
              location.pathname === '/mood-selection' ? 'font-bold' : ''
            }`}
          >
            Mood
          </Link>
          <Link
            to="/mood-tracker"
            className={`mx-2 my-auto text-gray-700 hover:text-blue-600 ${
              location.pathname === '/mood-tracker' ? 'font-bold' : ''
            }`}
          >
            Tracker
          </Link>
          <Link
            to="/record-history"
            className={`mx-2 my-auto text-gray-700 hover:text-blue-600 ${
              location.pathname === '/record-history' ? 'font-bold' : ''
            }`}
          >
            History
          </Link>
          <Link
            to="/resources"
            className={`mx-2 my-auto text-gray-700 hover:text-blue-600 ${
              location.pathname === '/resources' ? 'font-bold' : ''
            }`}
          >
            Resources
          </Link>
          <Link
            to="/"
            className="ml-4 text-white bg-blue-600 px-3 py-2 rounded hover:bg-blue-700"
          >
            Log Out
          </Link>
        </div>
      </div>
      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/mood-selection"
              className={`block text-gray-700 hover:text-blue-600 ${
                location.pathname === '/mood-selection' ? 'font-bold' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Mood
            </Link>
            <Link
              to="/mood-tracker"
              className={`block text-gray-700 hover:text-blue-600 ${
                location.pathname === '/mood-tracker' ? 'font-bold' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Tracker
            </Link>
            <Link
              to="/record-history"
              className={`block text-gray-700 hover:text-blue-600 ${
                location.pathname === '/record-history' ? 'font-bold' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              History
            </Link>
            <Link
              to="/resources"
              className={`block text-gray-700 hover:text-blue-600 ${
                location.pathname === '/resources' ? 'font-bold' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/"
              className="block mt-2 text-white bg-blue-600 px-3 py-2 rounded hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Log Out
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
