import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stay in contact section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h3 className="text-xl font-semibold mb-4 md:mb-0">
            Stay in contact
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Terms &amp; Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Bookings</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Book a demo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Demo Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Exercises
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Journaling
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
