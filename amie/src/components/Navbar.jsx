import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/mood-selection" className="text-xl font-bold text-blue-600">
          Amie
        </Link>
        <div>
          {/* Example navigation links - you can style or reorganize as needed */}
          <Link
            to="/mood-selection"
            className={`mx-2 text-gray-700 hover:text-blue-600 ${
              location.pathname === '/mood-selection' ? 'font-bold' : ''
            }`}
          >
            Mood
          </Link>
          <Link
            to="/resources"
            className={`mx-2 text-gray-700 hover:text-blue-600 ${
              location.pathname === '/resources' ? 'font-bold' : ''
            }`}
          >
            Resources
          </Link>
          <Link
            to="/mood-tracker"
            className={`mx-2 text-gray-700 hover:text-blue-600 ${
              location.pathname === '/mood-tracker' ? 'font-bold' : ''
            }`}
          >
            Tracker
          </Link>
          <Link
            to="/record-history"
            className={`mx-2 text-gray-700 hover:text-blue-600 ${
              location.pathname === '/record-history' ? 'font-bold' : ''
            }`}
          >
            History
          </Link>
          <Link
            to="/"
            className="ml-4 text-white bg-blue-600 px-3 py-2 rounded hover:bg-blue-700"
          >
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
