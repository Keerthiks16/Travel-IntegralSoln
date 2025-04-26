import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CheckCircle2, Clock } from "lucide-react";

const AccommodationCard = ({ accommodation }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-lg overflow-hidden ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-md`}
    >
      {/* IMAGE with Rating Badge */}
      <div className="relative">
        <img
          src={accommodation.image}
          alt={accommodation.name}
          className="w-full h-48 object-cover"
        />
        {/* Rating Badge */}
        <div className="absolute bottom-2 left-2 bg-blue-800 text-white px-3 py-1 rounded-md flex items-center">
          <span className="text-xs mr-1">★</span>
          <span className="text-sm mr-1">{accommodation.rating}</span>
          <span className="text-sm">Very Good</span>
        </div>
      </div>

      {/* DETAILS */}
      <div className="p-4">
        {/* Hotel Name */}
        <h3
          className={`text-xl font-semibold mb-3 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {accommodation.name}
        </h3>

        {/* Check In/Out */}
        <div className="mb-3">
          <p
            className={`text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Check in: {accommodation.checkIn}
          </p>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Check out: {accommodation.checkOut}
          </p>
        </div>

        {/* Nights and Status */}
        <div className="flex justify-between items-center">
          <p
            className={`text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {accommodation.nights} Nights
          </p>
          <div className="flex items-center">
            {accommodation.confirmed ? (
              <>
                <CheckCircle2 className="text-green-500 w-5 h-5 mr-1" />
                <span className="text-green-500 text-sm">Confirmed</span>
              </>
            ) : (
              <>
                <Clock className="text-orange-500 w-5 h-5 mr-1" />
                <span className="text-orange-500 text-sm">Pending</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;
