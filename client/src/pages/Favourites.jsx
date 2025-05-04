import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { destinations } from "../data/destinationData";
import { Plane, CalendarDays, Users, Clock, Timer, Bus } from "lucide-react";

const Favourites = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen p-8 pb-20 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-4xl font-extrabold mb-6">Your Past Trips</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {destinations.map((trip, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden shadow-lg ${
              darkMode
                ? "bg-gray-800 border-2 border-lime-300"
                : "bg-white border-2 border-blue-400"
            }`}
          >
            <img
              src={trip.image}
              alt={trip.city}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">{trip.city}</h2>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {trip.dates}
              </p>

              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarDays
                    size={16}
                    className={`${
                      darkMode ? "text-lime-300" : "text-blue-400"
                    }`}
                  />
                  {trip.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users
                    size={16}
                    className={`${
                      darkMode ? "text-lime-300" : "text-blue-400"
                    }`}
                  />
                  {trip.groupSize} ({trip.people.male}M, {trip.people.female}F)
                </div>
                <div className="flex items-center gap-1">
                  <Plane
                    size={20}
                    className={`${
                      darkMode ? "text-lime-300" : "text-blue-400"
                    }`}
                  />
                  Flight: {trip.flight.from} ➡ {trip.flight.to}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Accommodation</h3>
                <div
                  className={`p-2 ${
                    darkMode
                      ? "border-2 rounded-xl border-lime-300"
                      : "border-2 rounded-xl border-blue-400"
                  }`}
                >
                  {trip.accommodations.map((hotel, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg mb-4 ${
                        idx === trip.accommodations.length - 1 ? "" : "mb-4"
                      } ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold">{hotel.name}</h4>
                          <p
                            className={`text-xs ${
                              darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            Rating: {hotel.rating}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`text-sm mt-2 ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {hotel.checkIn} → {hotel.checkOut} <br />
                        {hotel.nights} Nights
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Activities</h3>
                <div
                  className={`p-2 ${
                    darkMode
                      ? "border-2 rounded-xl border-lime-300"
                      : "border-2 rounded-xl border-blue-400"
                  }`}
                >
                  {trip.activities.map((activity, id) => (
                    <div
                      key={id}
                      className={`p-4 rounded-lg ${
                        id === trip.activities.length - 1 ? "" : "mb-2"
                      } ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                    >
                      <h4 className="font-bold">{activity.name}</h4>
                      <div
                        className={`flex flex-wrap items-center gap-2 mt-2 text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <div className="flex items-center gap-1">
                          <Clock
                            size={14}
                            className={`${
                              darkMode ? "text-lime-300" : "text-blue-400"
                            }`}
                          />
                          {activity.timing}
                        </div>
                        <div className="flex items-center gap-1">
                          <Timer
                            size={14}
                            className={`${
                              darkMode ? "text-lime-300" : "text-blue-400"
                            }`}
                          />
                          {activity.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Bus
                            size={14}
                            className={`${
                              darkMode ? "text-lime-300" : "text-blue-400"
                            }`}
                          />
                          Pickup: {activity.pickup}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
