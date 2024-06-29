import React from "react";

// Dummy data for counselors
const counselorsData = [
  {
    name: "Dr. John Doe",
    title: "Anxiety Specialist",
    phoneNumber: "+1234567890",
    whatsappNumber: "+1234567890",
  },
  {
    name: "Dr. Jane Smith",
    title: "Depression Counselor",
    phoneNumber: "+1987654321",
    whatsappNumber: "+1987654321",
  },
  {
    name: "Dr. Sarah Lee",
    title: "Family Therapist",
    phoneNumber: "+1122334455",
    whatsappNumber: "+1122334455",
  },
  {
    name: "Dr. Michael Brown",
    title: "Substance Abuse Counselor",
    phoneNumber: "+1654321876",
    whatsappNumber: "+1654321876",
  },
  {
    name: "Dr. Emily Clark",
    title: "Relationship Counselor",
    phoneNumber: "+1789456123",
    whatsappNumber: "+1789456123",
  },
];
const phoneNumber = "+1234567890"; // Replace with a valid phone number

const handleCall = () => {
  window.open(`tel:${phoneNumber}`);
};

const handleWhatsapp = () => {
  window.open(`https://wa.me/${phoneNumber}`);
};

const Sup = () => {
  return (
    <div className="mt-16">
      <div>
        <h1 className="text-7xl text-center text-blue-300 mb-8">
          <strong className="text-orange-600 font-medium text-7xl">
            Counseling
          </strong>{" "}
          And Support
        </h1>
      </div>

      <div className="grid grid-cols-2 text-blue-500 md:grid-cols-1 lg:grid-cols-3 p-10 gap-4 ">
        {counselorsData.map((counselorsData) => (
          <div
            key={counselorsData.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg  hover:shadow-lg transform hover:scale-105 duration-150 ease-in-out"
          >
            <h2 className="text-5xl bg-inherit font-semibold mb-4">
              {counselorsData.name}
            </h2>
            <h2 className="text-xl text-pink-600 bg-inherit font-bold mb-6">
              {counselorsData.title}
            </h2>
            <div className="bg-inherit flex flex-row justify-between">
              <button
                className="inline-block bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition duration-150 ease-in-out"
                onClick={handleCall}
              >
                Call Now
              </button>
              <button
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out"
                onClick={handleWhatsapp}
              >
                Send Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sup;
