import React from "react";
import types from "./images/types.png";

const Types = () => {
  const anxietyTypes = [
    {
      name: "Generalized Anxiety Disorder (GAD)",
      description:
        "Excessive anxiety and worry about various topics, events, or activities.",
    },
    {
      name: "Panic Disorder",
      description:
        "Recurrent unexpected panic attacks and persistent concern about having more attacks.",
    },
    {
      name: "Social Anxiety Disorder",
      description:
        "Intense fear of social or performance situations and negative evaluation by others.",
    },
    {
      name: "Specific Phobias",
      description:
        "Significant fear or anxiety about a specific object or situation, leading to avoidance.",
    },
    {
      name: "Obsessive-Compulsive Disorder (OCD)",
      description:
        "Recurrent unwanted thoughts (obsessions) and repetitive behaviors (compulsions).",
    },
    {
      name: "Post-Traumatic Stress Disorder (PTSD)",
      description:
        "Distress and anxiety following exposure to a traumatic event.",
    },
  ];

  return (
    <div className="mt-16">
      <div className="flex items-center gap-8 justify-center">
        <div className="border-2 border-pink-600 w-1/3 h-1 bg-pink-600 mt-8 "></div>
        <h1 className="font-medium font-sans text-4xl text-blue-300 mt-8 text-center">
          Navigating the Types of Anxiety Disorders
        </h1>
      </div>
      <div className="flex justify-center gap-20 mt-16">
        <img className="w-1/3 rounded-lg" src={types} alt="Types of Anxiety" />
        <ul className="ml-8 space-y-4 w-1/3">
          {anxietyTypes.map((type, index) => (
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

export default Types;
