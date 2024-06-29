import React from "react";

const Offer = () => {
  return (
    <div className="text-justify">
      <div className="py-8">
        <div className="flex flex-row">
          <h1 className="text-5xl text-blue-300 ml-96">A compass for</h1>
          <div className="border-2 border-pink-600 w-2/6 h-0 mt-8"></div>
        </div>

        <div className="flex flex-row items-center ml-36 py-0 mt-0">
          <div className="border-2 border-pink-600 w-2/5 h-0 mt-6"></div>
          <h1 className="text-5xl text-blue-300">
            Your Mental Wellness Journey
          </h1>
        </div>
      </div>

      <div className="text-white text-xl font-sans px-40">
        <p className="text-2xl py-2">Embark on a mental wellness journey to:</p>

        <ul className="custom-list ml-6">
          <li>Discover a deeper understanding of yourself.</li>
          <li>Foster resilience against life's challenges.</li>
          <li>Unlock a more balanced and fulfilling life.</li>
        </ul>
      </div>
    </div>
  );
};

export default Offer;
