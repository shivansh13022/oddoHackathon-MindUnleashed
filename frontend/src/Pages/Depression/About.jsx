import React from "react";
import about from "./images/about.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium font-sans text-4xl text-blue-300 mt-8 text-center">
        <strong className="text-orange-600 font-sans font-medium">
          Depression{" "}
        </strong>
        Unveiled: Navigating Through Darkness Towards Healing"
      </h1>
      <div className="flex mt-16 gap-32 justify-center items-center ">
        <div className="bg-gradient-to-r from-pink-500/30 to-blue-500/30 p-6 rounded-lg shadow-lg w-96 hover:shadow-lg transform hover:scale-125  duration-150 ease-in-out">
          <p className="text-white bg-transparent">
            Depression is more than just a bout of the blues; it is a profound
            and pervasive condition that affects how one feels, thinks, and
            manages daily activities. This emotional disorder can manifest in
            various ways, from persistent sadness and a lack of interest in
            previously enjoyed activities to changes in sleep patterns and
            overwhelming feelings of worthlessness
            <br />
            <strong className="text-pink-700 text-xl mt-2 bg-transparent font-sans font-medium">
              {" "}
              However, it's crucial to remember that depression is not a sign of
              weakness or a character flaw. With the right support and
              treatment, individuals can overcome this challenge, rediscover
              their strength, and embark on a journey towards recovery and
              rediscovery.
            </strong>
          </p>
        </div>
        <img
          className=" rounded-lg"
          style={{ width: "400px" }}
          src={about}
          alt="About Anxiety"
        />
      </div>
    </div>
  );
};

export default About;
