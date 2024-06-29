import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import UpcomingWebinars from "./UpcomingWebinars";
import "./Calender.css";
import Wtop from "./Wtop";

const Webinar = () => {
  const [webinarDates, setWebinarDates] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().slice(0, 10), // Initialize with today's date
    time: new Date().toTimeString().slice(0, 5), // Initialize with current time
    topic: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateTimeString = `${formData.date}T${formData.time}`;
    const webinarDate = {
      topic: formData.topic,
      date: new Date(dateTimeString),
    };
    setWebinarDates([...webinarDates, webinarDate]);
    handleClose();
  };

  const tileClassName = ({ date, view }) => {
    if (
      view === "month" &&
      webinarDates.find(
        (d) => new Date(d.date).toDateString() === date.toDateString()
      )
    ) {
      return "bg-pink-500 text-white rounded-full"; // Highlight with pink color
    }
    return null;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-dark-blue text-white ">
      <div>
        <Wtop />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600 transition"
        onClick={handleClickOpen}
      >
        Host a Webinar
      </button>
      <Calendar
        className="w-full text-lg calendar-custom"
        tileClassName={tileClassName}
      />

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-inherit p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4 text-dark-blue">
              Host a Webinar
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Topic
                </label>
                <input
                  type="text"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-600 transition"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                  Host
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Upcoming Webinars Section */}
      <div className="mt-8">
        <UpcomingWebinars webinars={webinarDates} />
      </div>
    </div>
  );
};

export default Webinar;
