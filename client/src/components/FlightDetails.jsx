import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import flight from "../assets/images/flight1.png";

const FlightDetails = ({ flightData }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="relative p-4 rounded-2xl overflow-hidden bg-[#2D3DF7] text-white shadow-lg mb-6">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Flight Details</h2>
          <p className="text-sm mt-1 opacity-90">
            {flightData.date}, {flightData.time}
          </p>
        </div>

        <button className="text-xs font-semibold text-lime-300 hover:underline">
          See all
        </button>
      </div>

      {/* Flight Route */}
      <div className="mt-8 flex items-center space-x-4">
        {/* Departure */}
        <div className="flex flex-col items-start">
          <span className="text-2xl font-extrabold">
            {flightData.departure}
          </span>
          <span className="text-sm opacity-90">
            {flightData.departureFullName}
          </span>
        </div>

        {/* Arrow */}
        <div className="text-3xl">→</div>

        {/* Arrival */}
        <div className="flex flex-col items-start">
          <span className="text-2xl font-extrabold">{flightData.arrival}</span>
          <span className="text-sm opacity-90">
            {flightData.arrivalFullName}
          </span>
        </div>
      </div>

      {/* Plane Image */}
      <img
        src={flight} // Make sure this path matches your public folder or assets
        alt="Plane"
        className="absolute bottom-0 right-0 w-44 object-contain h-42"
      />
    </div>
  );
};

export default FlightDetails;
