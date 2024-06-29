import React from "react";
import star from "./images/star.png";
import triangle from "./images/triangle.png";

const Coping = () => {
  const strategies = [
    {
      title: "Mindfulness Meditation",
      description: "Focus on the present moment to reduce stress.",
    },
    {
      title: "Physical Exercise",
      description: "Regular activity to decrease anxiety symptoms.",
    },
    {
      title: "Deep Breathing Techniques",
      description: "Control breathing to calm the nervous system.",
    },
    {
      title: "Healthy Eating Habits",
      description: "Balanced diet to support mood regulation.",
    },
    {
      title: "Adequate Sleep",
      description: "Ensure 7-9 hours of quality sleep for mental well-being.",
    },
    {
      title: "Limiting Caffeine and Alcohol",
      description: "Reduce intake to decrease anxiety levels.",
    },
  ];

  return (
    <div className="mt-16 flex gap-20 justify-center items-start space-x-12">
      <div className="max-w-xl">
        {" "}
        {/* Increased width */}
        <h1 className="text-4xl text-blue-500 mb-6">Coping Strategies</h1>
        <div className="bg-gradient-to-r from-pink-500/30 to-blue-500/30 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          {strategies.map((strategy, index) => (
            <div key={index} className="mb-4 bg-transparent last:mb-0">
              <h2 className="text-xl text-pink-600 bg-transparent font-semibold mb-2">
                {strategy.title}
              </h2>
              <p className="text-white bg-transparent">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mt-28  justify-center">
        <h2 className="text-2xl text-blue-500 mb-4">Breathing Exercises</h2>
        <div className="flex  items-center mt-4 space-x-6">
          {" "}
          {/* Increased spacing */}
          <img
            src={triangle}
            alt="Triangle Breathing"
            className=" h-60 w-60 rounded-lg shadow-md"
          />
          <img
            src={star}
            alt="Star Breathing"
            className="w-60 h-60 rounded-lg shadow-md"
          />
        </div>
        <h2 className="text-2xl text-pink-600 mt-7 mb-4">
          (Try doing these Breathing Exercises ever day)
        </h2>
      </div>
    </div>
  );
};

export default Coping;
