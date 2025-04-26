import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import TripCard from "../components/TripCard";
import FlightDetails from "../components/FlightDetails";
import AccommodationSection from "../components/AccommodationSection";
import ActivitiesSection from "../components/ActivitiesSection";

// Import data from separate files
import tripData from "../data/tripData";
import flightData from "../data/flightData";
import accommodations from "../data/accommodationsData";
import activities from "../data/activitiesData";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-md mx-auto pb-6">
        <Header name="Chhavi" />

        <main className="px-4">
          <div className="my-4">
            <h2
              className={`text-lg font-medium ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Your Upcoming Trip
            </h2>
            <TripCard tripData={tripData} />
          </div>

          <div className="my-4">
            <FlightDetails flightData={flightData} />
          </div>

          <div className="my-4">
            <AccommodationSection accommodations={accommodations} />
          </div>

          <div className="my-4">
            <ActivitiesSection activities={activities} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
