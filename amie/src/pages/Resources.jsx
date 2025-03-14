import React from 'react';
import { Link } from 'react-router-dom';

function Resources() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">
        Emotional Skills & Resources
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
        <Link
          to="/coming-soon"
          className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Meditation
          </h2>
          <p className="text-gray-500 text-center">
            Learn mindfulness techniques for emotional balance
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Start Practice
          </button>
        </Link>
        <Link
          to="/coming-soon"
          className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Breathing Exercises
          </h2>
          <p className="text-gray-500 text-center">
            Simple breathing techniques for stress relief
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Begin Exercise
          </button>
        </Link>
        <Link
          to="/coming-soon"
          className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Journaling
          </h2>
          <p className="text-gray-500 text-center">
            Express your thoughts and feelings through writing
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Open Journal
          </button>
        </Link>
        <Link
          to="/mood-tracker"
          className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Mood Tracking
          </h2>
          <p className="text-gray-500 text-center">
            Monitor and understand your emotional patterns
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Track Mood
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Resources;
