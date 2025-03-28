import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Amie?",
    answer:
      "Amie is an emotional and mental health assistant that helps you track your moods and gain insights.",
  },
  {
    question: "What is Amie's mission?",
    answer:
      "Our mission is to empower individuals to take control of their emotional and mental well-being.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can sign up through your organization’s unique link or contact us to learn more.",
  },
  {
    question: "How do I get in contact?",
    answer:
      "You can reach us via email at contact@amie.com or by using the contact form on our website.",
  },
  {
    question: "How do I book a demo?",
    answer:
      "You can schedule a demo by clicking the 'Book a Demo' button at the top or contacting our sales team.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-transparent py-20 h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-dark-blue">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between w-full text-left text-dark-blue"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="font-bold text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-dark-blue">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
