import React from "react";

const UpcomingWebinars = ({ webinars }) => {
  const handleClick = () => {
    alert("webinar not started yet");
  };
  return (
    <div className="p-6">
      <h2 className="text-7xl font-semibold mb-8 text-dark-blue">
        Upcoming Webinars
      </h2>
      {webinars.length === 0 ? (
        <p className="text-gray-500">No upcoming webinars</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {webinars.map((webinar, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md  transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-700">
                Topic: {webinar.topic}
              </h3>
              <p className="text-lg text-orange-600">
                Date: {new Date(webinar.date).toLocaleDateString()}
                <br />
                Time:{" "}
                {new Date(webinar.date).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <h1
                className="text-lg text-blue-600 cursor-pointer"
                onClick={handleClick}
              >
                Click here to join the webinar
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingWebinars;
