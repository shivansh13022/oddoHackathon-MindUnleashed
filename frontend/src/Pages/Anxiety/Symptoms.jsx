import React from "react";
import symptoms from "./images/symptoms.png";

const Symptoms = () => {
  const symptomsTypes = [
    {
      name: "Rapid Heartbeat",
      description:
        "A common physical symptom is, characterized by an accelerated heart rate.",
    },
    {
      name: "Excessive Sweatingr",
      description: "Anxiety can trigger excessive sweating.",
    },
    {
      name: "Insomnia",
      description:
        " Difficulty staying asleep is often caused by racing thoughts ",
    },
    {
      name: "Restlessness",
      description: "A feeling of being unable to relax or calm down.",
    },
    {
      name: "Excessive Worry",
      description:
        "Persistent and overwhelming concern about various aspects of life, disproportionate to the actual likelihood or impact of feared events.",
    },
    {
      name: "Difficulty Concentrating",
      description:
        "Anxiety can disrupt focus and make it hard to pay attention or complete tasks.",
    },
  ];

  return (
    <div className="mt-16">
      <div className="flex items-center gap-8 justify-center">
        <h1 className="font-medium font-sans text-4xl text-blue-300 mt-8 text-center">
          Symptoms of Anxiety Disorders and coping up strategies
        </h1>
      </div>
      <div className="flex flex-row-reverse justify-center gap-20 mt-16">
        <img
          className="w-1/3 rounded-lg"
          src={symptoms}
          alt="Types of Anxiety"
        />
        <ul className="ml-8 space-y-4 w-1/3">
          {symptomsTypes.map((type, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <div>
                <h3 className="text-pink-600 font-semibold">{type.name}</h3>
                <p className="text-blue-300">{type.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Symptoms;
