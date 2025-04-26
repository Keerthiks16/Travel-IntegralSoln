import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Onboarding = () => {
  const { darkMode } = useContext(ThemeContext);
  const [destination, setDestination] = useState("");
  const [companion, setCompanion] = useState("");
  const [duration, setDuration] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleContinue = () => {
    console.log({
      destination,
      companion,
      duration,
    });
    // Add your navigation logic here, e.g., navigate to the next screen
  };

  const handleCompanionSelect = (selected) => {
    setCompanion(selected);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black" : "bg-gray-50"
      } flex flex-col p-6`}
    >
      {/* Header */}
      <div className="mb-6">
        <h1
          className={`text-2xl font-bold mb-1 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Plan Your Journey, Your Way!
        </h1>
        <p
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Let's create your personalised travel experience
        </p>
      </div>

      {/* Destination Input */}
      <div className="mb-6">
        <label
          className={`block mb-2 text-sm font-medium ${
            darkMode ? "text-white" : "text-gray-700"
          }`}
        >
          Where would you like to go?
        </label>
        <div
          className={`flex items-center ${
            darkMode ? "bg-zinc-800" : "bg-white"
          } rounded-lg border ${
            darkMode ? "border-zinc-700" : "border-gray-300"
          } px-3 py-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 mr-2 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={`w-full bg-transparent focus:outline-none ${
              darkMode
                ? "text-white placeholder-gray-500"
                : "text-gray-800 placeholder-gray-400"
            }`}
          />
        </div>
      </div>

      {/* Duration Dropdown */}
      <div className="mb-6">
        <label
          className={`block mb-2 text-sm font-medium ${
            darkMode ? "text-white" : "text-gray-700"
          }`}
        >
          How long will you stay?
        </label>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className={`flex items-center justify-between w-full ${
              darkMode
                ? "bg-zinc-800 text-white border-zinc-700"
                : "bg-white text-gray-800 border-gray-300"
            } border rounded-lg px-3 py-2`}
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 mr-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{duration || "Select Duration"}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div
              className={`absolute z-10 w-full mt-1 ${
                darkMode
                  ? "bg-zinc-800 border-zinc-700"
                  : "bg-white border-gray-300"
              } border rounded-lg shadow-lg`}
            >
              {["Weekend Getaway", "1 Week", "2 Weeks", "Longer Stay"].map(
                (option) => (
                  <div
                    key={option}
                    className={`px-4 py-2 cursor-pointer ${
                      darkMode
                        ? "hover:bg-zinc-700 text-white"
                        : "hover:bg-gray-100 text-gray-800"
                    }`}
                    onClick={() => {
                      setDuration(option);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {option}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Travel Companions */}
      <div className="mb-10">
        <label
          className={`block mb-2 text-sm font-medium ${
            darkMode ? "text-white" : "text-gray-700"
          }`}
        >
          Who are you traveling with?
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleCompanionSelect("Solo")}
            className={`flex items-center justify-center py-3 px-4 rounded-lg ${
              companion === "Solo"
                ? darkMode
                  ? "bg-blue-600 text-white"
                  : "bg-blue-600 text-white"
                : darkMode
                ? "bg-zinc-800 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Solo
          </button>

          <button
            onClick={() => handleCompanionSelect("Couple")}
            className={`flex items-center justify-center py-3 px-4 rounded-lg ${
              companion === "Couple"
                ? darkMode
                  ? "bg-blue-600 text-white"
                  : "bg-blue-600 text-white"
                : darkMode
                ? "bg-zinc-800 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm8 0a3 3 0 11-6 0 3 3 0 016 0zm-4.07 11c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            Couple
          </button>

          <button
            onClick={() => handleCompanionSelect("Family")}
            className={`flex items-center justify-center py-3 px-4 rounded-lg ${
              companion === "Family"
                ? darkMode
                  ? "bg-blue-600 text-white"
                  : "bg-blue-600 text-white"
                : darkMode
                ? "bg-zinc-800 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-4 7a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zm10 10v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Family
          </button>

          <button
            onClick={() => handleCompanionSelect("Friends")}
            className={`flex items-center justify-center py-3 px-4 rounded-lg ${
              companion === "Friends"
                ? darkMode
                  ? "bg-blue-600 text-white"
                  : "bg-blue-600 text-white"
                : darkMode
                ? "bg-zinc-800 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-4 7a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zm10 10v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Friends
          </button>
        </div>
      </div>

      {/* Continue Button - Positioned higher with padding-bottom */}
      <div className="pb-4">
        <button
          onClick={handleContinue}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
