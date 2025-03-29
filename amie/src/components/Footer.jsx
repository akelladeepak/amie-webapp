import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-blue py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stay in contact section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h3 className="text-xl font-semibold mb-4 md:mb-0 text-soft-white">
            Stay in contact
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-light-blue px-4 py-2 rounded-l-md focus:outline-none text-soft-white"
            />
            <button className="bg-light-blue text-soft-white px-6 py-2 rounded-r-md hover:bg-mid-blue transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-soft-white">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className=" hover:text-light-blue">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue">
                  Terms &amp; Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Bookings</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-light-blue">
                  Book a demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue">
                  Demo Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-light-blue">
                  Exercises
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue">
                  Journaling
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-light-blue">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue">
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
