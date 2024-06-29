import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Harsh Baliyan",
    role: "Software Engineer",
    testimonial:
      "This app has been a game-changer in managing my daily stresses and improving my overall mental health.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Shrey Singh",
    role: "Graphic Designer",
    testimonial:
      "A fantastic resource that offers great tips and insights for coping with anxiety and depression.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Kundan Yadav",
    role: "Freelancer",
    testimonial:
      "The community and resources available have provided me with the support I needed.",
    avatar: "https://via.placeholder.com/100",
  },
];

const Testimonials = () => {
  const [activeId, setActiveId] = useState(1); // Default to the first testimonial being active

  return (
    <div className="flex justify-center items-center flex-wrap gap-6 mt-10">
      <h2 className="text-5xl font-semibold font-sans text-center text-blue-800 w-full mb-6">
        <strong className="text-pink-700 text-6xl font-sans font-semibold">
          Testimonials:
        </strong>
        What Our Users Say
      </h2>
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`bg-gradient-to-r from-pink-500/30 items-start to-blue-500/30 p-6 rounded-lg shadow-lg w-80 hover:shadow-2xl transform hover:scale-105  duration-150 ease-in-out ${
            activeId === testimonial.id ? " shadow-2xl scale-100" : ""
          }`}
          onMouseEnter={() => setActiveId(testimonial.id)}
        >
          <div className="flex flex-col bg-transparent  items-center">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold font-sans bg-transparent  text-white mb-2">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-400  bg-transparent  mb-4 italic">
              {testimonial.role}
            </p>
            <p className="bg-transparent text-orange-400 text-center">
              {testimonial.testimonial}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
