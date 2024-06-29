import React from "react";
import topimg from "../../Images/topimg.svg";
import "../../../../src/index.css";

const Top = () => {
  return (
    <div className="flex text-justify">
      <div className="min-h-1/2 text-justify  w-2/5 ml-36 mt-12">
        <h1 className="text-blue-500 font-sans text-5xl font-small py-4 pl-20 ">
          Mind
          <strong className="text-orange-600 font-sans font-medium">
            UNLEASHED
          </strong>
        </h1>
        <p className="text-white text-xl font-sans pt-3">
          Mind Unleashed is a comprehensive mental health companion designed to
          support individuals navigating the complexities of mental wellness.
          With dedicated sections for anxiety, depression, resources, and a
          vibrant community forum, our app offers a holistic approach to coping
          with mental health challenges. Mind Unleashed empowers you on your
          journey towards healing and self-discovery. Our mission is to provide
          a safe, accessible, and supportive environment where anyone can find
          the tools and connections needed to unleash their mind's full
          potential
        </p>
      </div>

      <div style={{ backgroundColor: "#08061C" }}>
        <img
          src={topimg}
          alt="topimg"
          className="h-88 w-96 ml-28 mt-10 pop-up-animation"
        />
      </div>
    </div>
  );
};

export default Top;
