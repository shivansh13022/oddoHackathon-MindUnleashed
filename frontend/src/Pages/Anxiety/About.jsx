import React from "react";
import about from "./images/about.png";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium font-sans text-4xl text-blue-300 mt-8 text-center">
        <strong className="text-pink-600 font-sans font-medium">Anxiety</strong>
        : A Natural Response to Life's Challenges
      </h1>
      <div className="flex mt-16 gap-32 justify-center items-center ">
        <div className="bg-gradient-to-r from-pink-500/30 to-blue-500/30 p-6 rounded-lg shadow-lg w-96 hover:shadow-lg transform hover:scale-125  duration-150 ease-in-out">
          <p className="text-white bg-transparent">
            Anxiety is a natural response to life's challenges. It is a feeling
            of fear or apprehension about what's to come. The first day of
            school, going to a job interview, or giving a speech may cause most
            people to feel fearful and nervous.
            <br />
            <strong className="text-pink-700 text-xl mt-2 bg-transparent font-sans font-medium">
              {" "}
              Anxiety is a normal and often healthy emotion. However, when a
              person regularly feels disproportionate levels of anxiety, it
              might become a medical disorder.
            </strong>
          </p>
        </div>
        <img className="w-1/3 rounded-lg" src={about} alt="About Anxiety" />
      </div>
    </div>
  );
};

export default About;
