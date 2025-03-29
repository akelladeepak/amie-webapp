import React from 'react';
import { FaChevronRight } from "react-icons/fa";

const helpItems = [
  { title: "Log Emotions" },
  { title: "Breathing Exercises" },
  { title: "Talk to Amie" },
  { title: "Journal" },
  { title: "See Your Growth" },
  { title: "Meditate" },
];

const HelpCards = () => {
  return (
    <section className=" py-20 h-screen relative overflow-clip bg-mid-blue">
      <div className='bg-light-blue w-full h-24 rounded-[50%] absolute -top-12'></div>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 mt-8 text-soft-white">How can we help?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 bg-soft-white text-dark-blue rounded-md hover:shadow transition-shadow"
            >
              <span className="font-semibold">{item.title}</span>
              <FaChevronRight className="text-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpCards;
