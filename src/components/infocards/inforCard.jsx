import React from "react";

const InfoCard = ({ icon, title, description, description2 }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg font-protest">
      <div className="p-4">
        <div className="text-lime-400 mb-2">{icon}</div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 mb-4  ">{description}</p>
        <p className="text-gray-500">{description2}</p>
      </div>
    </div>
  );
};

export default InfoCard;
