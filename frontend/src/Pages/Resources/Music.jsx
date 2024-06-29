import React, { useState } from "react";
import relax from "./resourceimages/relax.jpg";
import run from "./resourceimages/run.jpg";
import study from "./resourceimages/study.jpg";
import workout from "./resourceimages/workout.jpg";
import sleeping from "./resourceimages/sleeping.jpg";
import music1 from "./resourcemusic/Beautiful_Dream.mp3";
import music2 from "./resourcemusic/Calm-and-Peaceful.mp3";
import music3 from "./resourcemusic/Moon-Boat.mp3";
import music4 from "./resourcemusic/Dissipate.mp3";
import music5 from "./resourcemusic/reverie.mp3";
import music6 from "./resourcemusic/Snowdrops.mp3";
import music7 from "./resourcemusic/Powerful.mp3";

const categories = [
  { id: 1, name: "Relaxing", image: relax },
  { id: 2, name: "Running", image: run },

  { id: 3, name: "Workout", image: workout },
  { id: 4, name: "Study", image: study },
  { id: 5, name: "Sleeping", image: sleeping },
];

const songs = [
  { id: 1, category: "Running", title: "Run For Your Life", audio: music1 },
  { id: 2, category: "Running", title: "Moon-Boat", audio: music3 },
  { id: 3, category: "Running", title: "Snowdrops", audio: music4 },
  { id: 4, category: "Running", title: "reverie", audio: music5 },
  { id: 5, category: "Relaxing", title: "Beautiful_Dream", audio: music1 },
  { id: 6, category: "Relaxing", title: "Calm-and-Peaceful", audio: music2 },
  { id: 7, category: "Relaxing", title: "Moon-Boat", audio: music3 },
  { id: 8, category: "Relaxing", title: "Snowdrops", audio: music4 },
  { id: 9, category: "Relaxing", title: "reverie", audio: music5 },
  { id: 10, category: "Relaxing", title: "Dissipate", audio: music6 },
  { id: 11, category: "Workout", title: "Pump It Up", audio: music1 },
  { id: 12, category: "Workout", title: "Powerful", audio: music7 },
  { id: 13, category: "Study", title: "Focus Enhancer", audio: music1 },
  { id: 14, category: "Sleeping", title: "Deep Sleep", audio: music1 },
  { id: 15, category: "Sleeping", title: "Moon-Boat", audio: music3 },
  { id: 16, category: "Sleeping", title: "Snowdrops", audio: music4 },
];

const Music = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // If selectedCategory is null, show all songs. Otherwise, filter by category.
  const filteredSongs = selectedCategory
    ? songs.filter((song) => song.category === selectedCategory)
    : songs;

  return (
    <div className="px-8 py-4">
      <h1 className="text-4xl text-center text-blue-300 mb-8">
        <strong className="text-orange-600 font-medium text-4xl">
          UNLEASH
        </strong>{" "}
        Your Mind: Explore Our Curated Music Therapy Collection
      </h1>
      {/* Button to Show All Songs */}

      <div className="flex justify-center flex-wrap gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="text-center p-4 transition duration-800 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            onClick={() => setSelectedCategory(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
            <p className="mt-2 text-pink-600">{category.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        {/* Displaying the heading dynamically based on whether all songs are shown or a specific category is selected */}
        <div className="w-3/4 mx-auto">
          <h2 className="text-2xl text-blue-300 mb-4">
            {selectedCategory ? `Songs for ${selectedCategory}` : "All Songs"}
          </h2>
          <ul>
            {filteredSongs.length > 0 ? (
              filteredSongs.map((song) => (
                <li key={song.id} className="mb-4">
                  <p className="text-lg text-pink-600">{song.title}</p>
                  <audio
                    controls
                    src={song.audio}
                    className="mt-2 w-full text-white"
                  >
                    Your browser does not support the audio element.
                  </audio>
                </li>
              ))
            ) : (
              <p>No songs available.</p>
            )}
          </ul>
        </div>
        <div className="flex justify-center mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            onClick={() => setSelectedCategory(null)}
          >
            View All Music
          </button>
        </div>
      </div>
    </div>
  );
};

export default Music;
