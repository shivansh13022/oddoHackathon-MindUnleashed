import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Links = () => {
  return (
    <div className="text-center mt-20">
      <p className="mb-16 text-xl px-28 text-blue-300">
        <strong className="text-5xl  font-sans font-medium text-orange">
          Mind
        </strong>
        <strong className="text-5xl mb-4  font-sans font-medium text-orange-600">
          UNLEASHED
        </strong>{" "}
        <br />
        provides you various features to help you on your coping journey.
      </p>

      <div className="flex justify-center gap-10">
        {/* Community Card */}
        <div className="bg-gradient-to-r from-pink-500/30 to-blue-500/30 p-6 rounded-lg shadow-lg max-w-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl text-pink-600 bg-transparent font-semibold mb-4">
            Community Forum
          </h2>
          <p className="text-white mb-6 bg-transparent">
            See and talk to people who have coped up and share your feelings,
            engage to reduce stress.
          </p>
          <Link
            to="/community"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Visit Community
          </Link>
        </div>

        {/* Resources Card */}
        <div className="bg-gradient-to-r from-blue-500/30 to-pink-500/30 p-6 rounded-lg shadow-lg max-w-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl text-blue-500 font-semibold bg-transparent mb-4">
            Resources
          </h2>
          <p className="text-white mb-6 bg-transparent">
            Explore{" "}
            <strong className="text-orange-600 bg-transparent font-sans font-medium">
              live blogs
            </strong>
            ,
            <strong className="text-orange-600 bg-transparent font-sans font-medium">
              {" "}
              AI chatbot{" "}
            </strong>{" "}
            support to ask anything, and{" "}
            <strong className="text-orange-600 bg-transparent font-sans font-medium">
              relaxing musics
            </strong>
            to help you unwind.
          </p>
          <Link
            to="/resources"
            className="inline-block bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition duration-150 ease-in-out"
          >
            Explore Resources
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;
