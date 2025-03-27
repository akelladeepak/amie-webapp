import React from 'react';
import meditation from '../assets/meditation.png';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Column: Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gain tools to control<br />
            your mindfulness
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Feel like your best self. Learn the tools<br />
            to gain emotional balance and peace.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition-colors">
            Try Exercises
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={meditation}
            alt="Meditation illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
