import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  Calendar,
  Users,
  ActivitySquare,
  ChevronUp,
  Clock,
  Notebook,
} from "lucide-react";

const TripCard = ({ tripData }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="relative rounded-xl overflow-hidden mt-2 shadow-lg">
      {/* Background Image */}
      <div className="relative h-80">
        <img
          src={tripData.image || "/api/placeholder/400/300"}
          alt={tripData.destination}
          className="w-full h-full object-cover"
        />

        {/* Blur overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-black/30 backdrop-blur-md"></div>

        {/* Trip Info - Top Left */}
        <div className="absolute top-4 left-4 text-white">
          <h3 className="text-5xl w-9 tracking-widest font-extrabold">
            {tripData.destination}
          </h3>
          <p className="text-sm mt-1 text-gray-200">{tripData.dates}</p>
        </div>

        {/* Trip Stats - Bottom Left */}
        <div className="absolute bottom-4 left-4 flex space-x-6">
          {/* Days */}
          <div className="flex items-center">
            <div className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <Clock className="text-lime-300" strokeWidth={2} size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">
                {tripData.days} Days
              </span>
              <span className="text-xs text-gray-300">Duration</span>
            </div>
          </div>

          {/* Group Size */}
          <div className="flex items-center">
            <div className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <Users className="text-lime-300" strokeWidth={2} size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">
                4 (2M,2F)
              </span>
              <span className="text-xs text-gray-300">Group Size</span>
            </div>
          </div>

          {/* Activities */}
          <div className="flex items-center">
            <div className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <Notebook className="text-lime-300" strokeWidth={2} size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">14</span>
              <span className="text-xs text-gray-300">Activities</span>
            </div>
          </div>
        </div>

        {/* Expand arrow top right */}
        <div className="absolute top-3 right-3 bg-black/40 rounded-full p-1">
          <ChevronUp size={20} color="white" />
        </div>
      </div>
    </div>
  );
};

export default TripCard;
