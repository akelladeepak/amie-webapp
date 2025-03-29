import React from 'react';
import meditation from '../assets/meditate.png';
import '../assets/styles.css';

const Hero = () => {
  return (
    <section className="bg-light-blue py-20 z-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center mt-0 lg:mt-8">
        {/* Left Column: Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark-blue">
            Gain tools to control<br />
            your mindfulness
          </h1>
          <p className="text-lg md:text-xl mb-6 text-dark-blue">
            Feel like your best self. Learn the tools<br />
            to gain emotional balance and peace.
          </p>
          <button className="bg-dark-blue text-soft-white px-6 py-3 rounded-3xl shadow hover:bg-green transition-colors">
            Request Demo
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={meditation}
            alt="Meditation illustration"
            className="w-full"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
