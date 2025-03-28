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
    <section className="bg-[#0A9396] py-20 h-screen relative overflow-clip">
      <div className='bg-[#a8dadc] w-full h-24 rounded-[50%] absolute -top-12'></div>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#f1faee]">How can we help?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 bg-[#f1faee] text-[#1d3557] rounded-md hover:shadow transition-shadow"
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
