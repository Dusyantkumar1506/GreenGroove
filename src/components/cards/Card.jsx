import React from "react";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg font-protest">
      <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <button className="mt-4 bg-lime-400 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
          View Product
        </button>
      </div>
    </div>
  );
};

export default Card;
