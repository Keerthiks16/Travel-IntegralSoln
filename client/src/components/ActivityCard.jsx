import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ActivityCard = ({ activity }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex rounded-xl overflow-hidden shadow-md ${
        darkMode ? "bg-zinc-700" : "bg-white"
      }`}
    >
      {/* Left Side - Image */}
      <div className="w-2/5">
        <img
          src={activity.image || "/api/placeholder/100/100"}
          alt={activity.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-3/5 p-4 flex flex-col justify-center">
        <h3
          className={`font-semibold text-lg ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {activity.name}
        </h3>

        <div className="mt-3 space-y-1 text-sm">
          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <span className="font-semibold">Timing:</span> {activity.time}
          </p>

          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <span className="font-semibold">Duration:</span> {activity.duration}
          </p>

          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <span className="font-semibold">Pick up:</span> {activity.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
