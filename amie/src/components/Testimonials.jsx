import React from 'react';

const testimonials = [
  { quote: "“This would be a testimonial”" },
  { quote: "“This would be a testimonial”" },
  { quote: "“This would be a testimonial”" },
];

const Testimonials = () => {
  return (
    <section className="bg-dark-blue py-20 h-screen relative overflow-clip">
      <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-48">
        <h2 className="text-3xl font-bold text-center mb-10 text-soft-white">
          What our Members Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-soft-white p-6 rounded-md shadow">
              <p className="text-center text-lg italic text-dark-blue">{test.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
