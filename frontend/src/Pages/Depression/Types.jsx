import React from "react";
import types from "./images/types.png";
import symptoms from "./images/symptoms.png";

const Types = () => {
  return (
    <div className="mt-16">
      <h1 className="font-medium font-sans text-4xl text-blue-300 mt-8 text-center">
        Types and symptoms of depression Disorders
      </h1>
      <div className="flex items-center gap-32 justify-center">
        <img className="w-1/3 rounded-lg" src={types} alt="Types of Anxiety" />
        <img
          className="w-80 mt-10 rounded-lg"
          src={symptoms}
          alt="Symptoms of Anxiety"
        />
      </div>
    </div>
  );
};

export default Types;
