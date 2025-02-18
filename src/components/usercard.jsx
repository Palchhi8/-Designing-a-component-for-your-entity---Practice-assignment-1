import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "Palchhi Jain";
  const email = "jainpalchhi2k6@gmail.com";
  const phone = "+91 86192 53080";
  const address = "123 Main Street, City, Country";

  return (
    <div className="max-w-sm bg-white shadow-2xl rounded-2xl overflow-hidden border p-6 transform transition duration-300 hover:scale-105">
      <div className="flex flex-col items-center">
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-md"
        />
        <h2 className="text-xl font-bold text-gray-900 mt-4">{name}</h2>
        <p className="text-sm text-gray-500 mt-1">{email}</p>
        <p className="text-sm text-gray-500">{phone}</p>
        <p className="text-sm text-gray-500">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;
