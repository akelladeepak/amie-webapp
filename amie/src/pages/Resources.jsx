import React from 'react';
import { Link } from 'react-router-dom';

function Resources() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-[28px] lg:text-5xl font-bold text-gray-700 mb-16 text-center">
        Emotional Skills & Resources
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full px-4">
        <div className="bg-[#72a7dd] shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-white mb-2">
            Meditation
          </h2>
          <p className="text-white text-center">
            Learn mindfulness techniques for emotional balance
          </p>
          <Link to="/coming-soon">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
              Start Practice
            </button>
          </Link>
        </div>
        <div className="bg-[#72a7dd] shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-white mb-2">
            Breathing Exercises
          </h2>
          <p className="text-white text-center">
            Simple breathing techniques for stress relief
          </p>
          <Link to="/coming-soon">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
              Begin Exercise
            </button>
          </Link>
        </div>
        <div className="bg-[#72a7dd] shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-white mb-2">
            Journaling
          </h2>
          <p className="text-white text-center">
            Express your thoughts and feelings through writing
          </p>
          <Link to="/coming-soon">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
              Open Journal
            </button>
          </Link>
        </div>
        <div className="bg-[#72a7dd] shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-white mb-2">
            Mood Tracking
          </h2>
          <p className="text-white text-center">
            Monitor and understand your emotional patterns
          </p>
          <Link to="/mood-tracker">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
              Track Mood
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Resources;
