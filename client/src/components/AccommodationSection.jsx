import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AccommodationCard from "./AccommodationCard";

const AccommodationSection = ({ accommodations }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2
          className={`text-lg font-medium ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Accommodation
        </h2>
        <span
          className={`text-xs cursor-pointer ${
            darkMode ? "text-lime-300" : "text-blue-500"
          }`}
        >
          See all
        </span>
      </div>

      {/* SCROLLABLE CARDS */}
      <div className="flex overflow-x-auto gap-x-4 pb-2">
        {accommodations.map((accommodation) => (
          <AccommodationCard
            key={accommodation.id}
            accommodation={accommodation}
          />
        ))}
      </div>
    </div>
  );
};

export default AccommodationSection;
