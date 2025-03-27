import React from 'react';

const testimonials = [
  { quote: "“This would be a testimonial”" },
  { quote: "“This would be a testimonial”" },
  { quote: "“This would be a testimonial”" },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] py-20 h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What our Members Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow">
              <p className="text-center text-lg italic">{test.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
