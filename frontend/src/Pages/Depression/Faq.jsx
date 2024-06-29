import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does the service work?",
      answer:
        "Our service works by providing users with access to comprehensive resources, tools, and community support to help them manage their mental well-being.",
    },
    {
      question: "Is there a cost to use this service?",
      answer:
        "Our service is free for all users, but for using the community forum, you need to register and log in to your account. The community forum is a place where you can share your feelings and engage with others to reduce stress.",
    },
    {
      question: "How can I access the community forum?",
      answer:
        "The community forum can be accessed directly through our website or app. Simply register or log in to your account and navigate to the community section.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 mt-16 mb-6 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl text-blue-400 font-semibold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4 shadow">
              <h3
                className="text-lg font-medium flex justify-between text-pink-600 items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </h3>
              <div
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } mt-2 text-gray-200`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
