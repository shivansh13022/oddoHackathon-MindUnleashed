import React from "react";

// Example data (hardcoded for demonstration)
const curatedContent = [
  {
    title: "Mindfulness Meditation",
    description: "A guided meditation session for beginners.",
    link: "https://www.youtube.com/watch?v=LhYRD0XmzOU",
  },
  {
    title: "Tips for Better Sleep",
    description: "Practical tips to improve your sleep quality.",
    link: "https://www.youtube.com/watch?v=LhYRD0XmzOU",
  },
  {
    title: "Understanding Anxiety",
    description: "Learn strategies to manage anxiety effectively.",
    link: "https://www.youtube.com/watch?v=LhYRD0XmzOU",
  },
  {
    title: "Coping with Stress",
    description: "Discover ways to cope with stress in daily life.",
    link: "https://www.youtube.com/watch?v=LhYRD0XmzOU",
  },
];

const Video = () => {
  return (
    <div className="p-16">
      <div className="flex items-center mb-8">
        <h1 className="text-5xl text-orange-700 font-medium font-sans">
          Curated Online Videos and Podcasts for More Deep Insights
        </h1>
        <div className="border-2 border-pink-600 w-2/3 h-1 bg-pink-600 ml-4"></div>
      </div>

      <div className="grid grid-cols-2 text-blue-500 md:grid-cols-1 lg:grid-cols-3 gap-4 ">
        {curatedContent.map((curatedContent) => (
          <div
            key={curatedContent.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg  hover:shadow-lg transform hover:scale-105 duration-150 ease-in-out"
          >
            <h2 className="text-3xl bg-inherit font-bold mb-2">
              {curatedContent.title}
            </h2>
            <p className="mb-4 bg-inherit text-xl" style={{ color: "#E91E63" }}>
              {curatedContent.description}{" "}
            </p>
            <a
              href={curatedContent.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 bg-inherit hover:text-blue-700 transition duration-300 ease-in-out"
              style={{ color: "#E91E63" }}
            >
              Watch
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
