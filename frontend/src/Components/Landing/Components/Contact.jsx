import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = true;
      hasError = true;
    }
    if (!formData.email) {
      newErrors.email = true;
      hasError = true;
    }
    if (!formData.message) {
      newErrors.message = true;
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log("Sending Data", formData); // Placeholder for actual submission logic
      setFormData({ name: "", email: "", message: "" }); // Reset form data
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000); // Hide success message after a delay
    }
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-4">
      <div className="text-4xl text-blue-700 font-sans font-semibold">
        Contact Us
      </div>
      <div className="flex flex-col gap-3 text-white">
        {/* Name input */}
        <input
          className="bg-transparent border-2 rounded-full p-2 text-white w-80 placeholder-gray-400 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-red-500 text-xs">Name is required.</p>
        )}

        {/* Email input */}
        <input
          className="bg-transparent border-2 rounded-full p-2 text-white w-80 placeholder-gray-400 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">Email is required.</p>
        )}

        {/* Message input */}
        <textarea
          className="bg-transparent border-2 rounded-lg p-2  text-white w-80 placeholder-gray-400 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 h-52" // Set a fixed height here
          name="message"
          placeholder="Write something....."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">Message is required.</p>
        )}
      </div>

      <button
        className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-full transition duration-150 ease-in-out"
        onClick={handleSubmit}
      >
        Send
      </button>
      {submitted && (
        <p className="text-green-500 mt-2">
          Sent successfully, thank you for contacting us!
        </p>
      )}
    </div>
  );
};

export default Contact;
