import React from "react";
import { Link } from "react-router-dom";

const ProJectCard = ({ item }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6 flex flex-col justify-between h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeInUp animate__delay-1s">
      {/* Project Image with animation */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-md mb-4 animate__animated animate__fadeIn animate__delay-1s"
      />

      {/* Project Title with animation */}
      <h3 className="text-2xl font-semibold mb-2 text-center animate__animated animate__fadeIn animate__delay-2s">
        {item.name}
      </h3>

      {/* Project Brief Description with animation */}
      <p className="text-gray-400 mb-4 text-center animate__animated animate__fadeIn animate__delay-3s">
        {item.briefDescription}
      </p>

      {/* View Details Button with animation */}
      <div className="flex justify-center mt-auto">
        <Link
          to={`/projects/${item.id}`} // Ensure the dynamic route
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 animate__animated animate__fadeIn animate__delay-4s"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProJectCard;
