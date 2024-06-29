import React from "react";
import comunity from "../../Images/comunity.png";
import { useNavigate } from "react-router-dom";

const Forum = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row pt-6 ml-10 justify-center">
      <div className="w-3/4">
        <h1 className="text-3xl text-blue-300 px-24  pt-14 mb-8">
          Join Our{" "}
          <strong className="text-3xl text-orange-600 font-sans font-medium">
            Community Forum:
          </strong>{" "}
          <br />A Space for Shared Growth and Support
        </h1>
        <p className="text-white text-center text-justify text-lg items-fit px-3 ml-24 w-2/3 ">
          Welcome to our Community Forum, your new go-to space for{" "}
          <strong className=" font-sans font-medium text-blue-700">
            connecting with like-minded individuals
          </strong>{" "}
          on your journey towards better mental health and wellness. Here, you
          can{" "}
          <strong className=" font-sans font-medium text-blue-700">
            share experiences, seek advice, and find solace
          </strong>{" "}
          in the stories of others navigating similar paths. Our forum is
          designed to be a safe, respectful, and supportive environment where
          every voice is valued.
        </p>
        <button
          onClick={() => navigate("/community")}
          className=" bg-orange-600 mt-8 w-48 h-12 ml-24  text-white text- justify-center text- rounded-lg hover:bg-blue-700/30 transition duration-150 ease-in-out"
        >
          Visit Community
        </button>
      </div>

      <div className="h-auto w-6/5">
        <img src={comunity} alt="comunity" className="  w-4/5 pt-2 " />
      </div>
    </div>
  );
};

export default Forum;
