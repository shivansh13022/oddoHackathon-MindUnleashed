import React from "react";
import music from "../../Images/music.png";
import { Navigate, useNavigate } from "react-router-dom";

const Sounds = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center">
      <img
        src={music}
        alt="music"
        className="fit-content h-1/4 w-1/4 mt-8 ml-36"
      />

      <div className="justify-top flex flex-col">
        <h1 className="text-3xl text-blue-300 px-28  mb-8">
          Relaxing Sounds,Music and Live Blogs and Articles
        </h1>
        <p className="text-white text-center text-lg px-3 ml-32 w-2/3 ">
          Research has shown that listening to calming sounds and music can
          significantly impact our mental health.
        </p>
        <ul className="custom-list text-lg text-justify text-white ml-36 py-4 w-2/3">
          <li>
            <strong
              className="text-xl font-sans font-medium"
              style={{ color: "#E91E63" }}
            >
              Diverse Sound Library:
            </strong>{" "}
            Offers a wide range of soundscapes, from natural environments (like
            forests, oceans, and rain) to instrumental and ambient music,
            catering to diverse preferences and therapeutic needs.
          </li>

          <li>
            <strong
              className="text-xl font-sans font-medium"
              style={{ color: "#E91E63" }}
            >
              User-Friendly Interface:
            </strong>{" "}
            Designed with a simple, intuitive interface, making it easy for
            users of all ages and tech-savviness levels to navigate and find
            their perfect sound environment quickly.
          </li>
        </ul>
        <div className="text-xl ml-36 text-blue-700 text-justify font-medium font-sans w-2/3">
          Dive into a world of insights and inspiration with our latest blogs
          and articles on mental health and wellness – your gateway to
          understanding and empowerment.
        </div>
        <button
          onClick={() => navigate("/resources")}
          className=" bg-blue-800/40 mt-8 w-48 h-12 ml-36 text-white text- justify-center text- rounded-lg hover:bg-pink-700/30 transition duration-150 ease-in-out"
        >
          Explore Resources
        </button>
      </div>
    </div>
  );
};

export default Sounds;
