import React from "react";
import chatbot from "../../Images/chatbot.svg";
import { Navigate, useNavigate } from "react-router-dom";

const Ai = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-5xl font-sans text-blue-300 mt-16  font-medium items-center">
        What Mind{" "}
        <strong className="text-orange-600 font-sans font-medium">
          UNLEASHED
        </strong>{" "}
        offers
      </div>
      <div className="flex flex-row py-6 justify-center">
        <div className="w-3/4 flex flex-col">
          <h1 className="text-3xl text-blue-300 px-28 ml-8  pt-6 mb-8">
            Your 24/7 Ally:{" "}
            <strong className="font-sans font-medium text-blue-700">
              AI-Powered
            </strong>{" "}
            Support
          </h1>
          <ul className="custom-list w-2/3 text-lg text-justify text-white ml-28">
            <li>
              <strong className="text-xl text-pink-600 font-sans font-medium">
                AI-Powered Chatbot:
              </strong>{" "}
              Engage with our cutting-edge AI chatbot, designed to provide
              immediate support and responses sourced directly from{" "}
              <strong className="font-medium text-2xl text-orange-600">
                Google Gemini's
              </strong>{" "}
              vast knowledge base.
            </li>
            <li>
              <strong className="text-xl text-pink-600 font-sans font-medium">
                Accessible 24/7:
              </strong>{" "}
              Round-the-clock support ensures you always have a listening ear,
              offering comfort and assistance through your mental health
              journey.
            </li>
            <li>
              <strong className="text-xl text-pink-600 font-sans font-medium">
                Confidential and Secure:
              </strong>{" "}
              Conversations with our AI chatbot are kept private, offering a
              safe space to express yourself freely and securely.
            </li>
          </ul>
          <button
            onClick={() => navigate("/resources")}
            className=" bg-pink-700 mt-8 w-48 h-12 ml-32 text-white text- justify-center text- rounded-lg hover:bg-pink-700/30 transition duration-150 ease-in-out"
          >
            Explore Resources
          </button>
        </div>

        <div className="py-16 ">
          <img
            src={chatbot}
            alt="chatbot"
            className="h-5/6 w-4/5 bounce-animation"
          />
        </div>
      </div>
    </div>
  );
};

export default Ai;
