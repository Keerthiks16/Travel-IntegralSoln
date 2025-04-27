import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { destinations } from "../data/destinationData";
import {
  Search,
  Plane,
  CalendarDays,
  Users,
  Hotel,
  MapPin,
  Activity,
  PlusCircle,
  Trash,
  Save,
} from "lucide-react";

const Create = () => {
  const { darkMode } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [travelPlan, setTravelPlan] = useState({
    city: "",
    dates: "",
    duration: "",
    groupSize: "",
    people: { male: 0, female: 0 },
    flight: { from: "", to: "" },
    accommodations: [],
    activities: [],
  });

  // Handle search input changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredDestinations([]);
    } else {
      const filtered = destinations.filter((dest) =>
        dest.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredDestinations(filtered);
    }
  }, [searchQuery]);

  // Select a destination from search results
  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
    setTravelPlan({
      ...travelPlan,
      city: destination.city,
      accommodations: [],
      activities: [],
    });
    setSearchQuery(""); // Clear search after selection
    setFilteredDestinations([]);
  };

  // Add accommodation to plan
  const handleAddAccommodation = (accommodation) => {
    if (
      !travelPlan.accommodations.some((acc) => acc.name === accommodation.name)
    ) {
      setTravelPlan({
        ...travelPlan,
        accommodations: [...travelPlan.accommodations, accommodation],
      });
    }
  };

  // Remove accommodation from plan
  const handleRemoveAccommodation = (accommodation) => {
    setTravelPlan({
      ...travelPlan,
      accommodations: travelPlan.accommodations.filter(
        (acc) => acc.name !== accommodation.name
      ),
    });
  };

  // Add activity to plan
  const handleAddActivity = (activity) => {
    if (!travelPlan.activities.some((act) => act.name === activity.name)) {
      setTravelPlan({
        ...travelPlan,
        activities: [...travelPlan.activities, activity],
      });
    }
  };

  // Remove activity from plan
  const handleRemoveActivity = (activity) => {
    setTravelPlan({
      ...travelPlan,
      activities: travelPlan.activities.filter(
        (act) => act.name !== activity.name
      ),
    });
  };

  // Handle input changes for travel plan
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setTravelPlan({
        ...travelPlan,
        [parent]: {
          ...travelPlan[parent],
          [child]: value,
        },
      });
    } else {
      setTravelPlan({
        ...travelPlan,
        [name]: value,
      });
    }
  };

  // Handle people count changes
  const handlePeopleChange = (type, value) => {
    if (value >= 0) {
      setTravelPlan({
        ...travelPlan,
        people: {
          ...travelPlan.people,
          [type]: parseInt(value),
        },
      });
    }
  };

  // Save travel plan
  const handleSavePlan = () => {
    console.log("Saving travel plan:", travelPlan);
    // Here you'd typically send this data to your backend
    alert("Travel plan saved successfully!");
  };

  return (
    <div
      className={`min-h-screen p-8 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-4xl font-extrabold mb-6">Create Your Travel Plan</h1>

      {/* Search Destination */}
      <div className="mb-8">
        <div className="relative">
          <div
            className={`flex items-center p-4 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-md`}
          >
            <Search
              className={`mr-2 ${darkMode ? "text-lime-300" : "text-blue-400"}`}
              size={20}
            />
            <input
              type="text"
              placeholder="Search for a destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-transparent outline-none ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            />
          </div>

          {filteredDestinations.length > 0 && (
            <div
              className={`absolute left-0 right-0 mt-2 rounded-lg shadow-lg overflow-hidden z-10 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {filteredDestinations.map((dest, index) => (
                <div
                  key={index}
                  className={`p-4 flex items-center cursor-pointer ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleSelectDestination(dest)}
                >
                  <MapPin
                    className={`mr-2 ${
                      darkMode ? "text-lime-300" : "text-blue-400"
                    }`}
                    size={16}
                  />
                  <span>{dest.city}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Plan Creation Form */}
      <div
        className={`rounded-2xl shadow-lg p-6 mb-8 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Trip Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Destination */}
          <div>
            <label className="block text-sm mb-2">Destination</label>
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } flex items-center`}
            >
              <MapPin
                className={`mr-2 ${
                  darkMode ? "text-lime-300" : "text-blue-400"
                }`}
                size={16}
              />
              <input
                type="text"
                name="city"
                value={travelPlan.city}
                onChange={handleInputChange}
                placeholder="Where to?"
                className="bg-transparent outline-none w-full"
                disabled={!!selectedDestination}
              />
            </div>
          </div>

          {/* Dates */}
          <div>
            <label className="block text-sm mb-2">Dates</label>
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } flex items-center`}
            >
              <CalendarDays
                className={`mr-2 ${
                  darkMode ? "text-lime-300" : "text-blue-400"
                }`}
                size={16}
              />
              <input
                type="text"
                name="dates"
                value={travelPlan.dates}
                onChange={handleInputChange}
                placeholder="DD.MM.YYYY - DD.MM.YYYY"
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm mb-2">Duration</label>
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } flex items-center`}
            >
              <CalendarDays
                className={`mr-2 ${
                  darkMode ? "text-lime-300" : "text-blue-400"
                }`}
                size={16}
              />
              <input
                type="text"
                name="duration"
                value={travelPlan.duration}
                onChange={handleInputChange}
                placeholder="7 Days"
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>

          {/* Group Size */}
          <div>
            <label className="block text-sm mb-2">Group Size</label>
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } flex items-center`}
            >
              <Users
                className={`mr-2 ${
                  darkMode ? "text-lime-300" : "text-blue-400"
                }`}
                size={16}
              />
              <input
                type="text"
                name="groupSize"
                value={travelPlan.groupSize}
                onChange={handleInputChange}
                placeholder="Solo, Couple, Family, Friends"
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>

          {/* People */}
          <div>
            <label className="block text-sm mb-2">People</label>
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } flex items-center`}
            >
              <div className="flex items-center mr-4">
                <span className="mr-2">Male:</span>
                <input
                  type="number"
                  value={travelPlan.people.male}
                  onChange={(e) => handlePeopleChange("male", e.target.value)}
                  className={`w-16 p-1 rounded ${
                    darkMode ? "bg-gray-600" : "bg-gray-100"
                  } text-center`}
                  min="0"
                />
              </div>
              <div className="flex items-center">
                <span className="mr-2">Female:</span>
                <input
                  type="number"
                  value={travelPlan.people.female}
                  onChange={(e) => handlePeopleChange("female", e.target.value)}
                  className={`w-16 p-1 rounded ${
                    darkMode ? "bg-gray-600" : "bg-gray-100"
                  } text-center`}
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Flight */}
          <div className="md:col-span-2">
            <label className="block text-sm mb-2">Flight</label>
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } flex items-center flex-wrap gap-4`}
            >
              <div className="flex items-center flex-1">
                <span className="mr-2">From:</span>
                <input
                  type="text"
                  name="flight.from"
                  value={travelPlan.flight.from}
                  onChange={handleInputChange}
                  placeholder="Origin"
                  className="bg-transparent outline-none flex-1"
                />
              </div>
              <Plane
                className={`${darkMode ? "text-lime-300" : "text-blue-400"}`}
                size={16}
              />
              <div className="flex items-center flex-1">
                <span className="mr-2">To:</span>
                <input
                  type="text"
                  name="flight.to"
                  value={travelPlan.flight.to}
                  onChange={handleInputChange}
                  placeholder="Destination"
                  className="bg-transparent outline-none flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodations */}
      {selectedDestination && (
        <div
          className={`rounded-2xl shadow-lg p-6 mb-8 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Suggested Accommodations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedDestination.accommodations.map((accommodation, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } flex justify-between items-center`}
              >
                <div>
                  <div className="flex items-center">
                    <Hotel
                      className={`mr-2 ${
                        darkMode ? "text-lime-300" : "text-blue-400"
                      }`}
                      size={16}
                    />
                    <h3 className="font-bold">{accommodation.name}</h3>
                  </div>
                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Rating: {accommodation.rating}
                  </p>
                </div>

                {travelPlan.accommodations.some(
                  (acc) => acc.name === accommodation.name
                ) ? (
                  <button
                    onClick={() => handleRemoveAccommodation(accommodation)}
                    className={`p-2 rounded-full ${
                      darkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                    }`}
                  >
                    <Trash className="text-red-500" size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddAccommodation(accommodation)}
                    className={`p-2 rounded-full ${
                      darkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                    }`}
                  >
                    <PlusCircle
                      className={`${
                        darkMode ? "text-lime-300" : "text-blue-400"
                      }`}
                      size={16}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>

          {travelPlan.accommodations.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">
                Selected Accommodations:
              </h3>
              <div className="space-y-2">
                {travelPlan.accommodations.map((acc, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } flex justify-between items-center`}
                  >
                    <span>{acc.name}</span>
                    <button
                      onClick={() => handleRemoveAccommodation(acc)}
                      className={`p-1 rounded-full ${
                        darkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                      }`}
                    >
                      <Trash className="text-red-500" size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Activities */}
      {selectedDestination && (
        <div
          className={`rounded-2xl shadow-lg p-6 mb-8 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Suggested Activities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedDestination.activities.map((activity, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } flex justify-between items-center`}
              >
                <div>
                  <div className="flex items-center">
                    <Activity
                      className={`mr-2 ${
                        darkMode ? "text-lime-300" : "text-blue-400"
                      }`}
                      size={16}
                    />
                    <h3 className="font-bold">{activity.name}</h3>
                  </div>
                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {activity.timing} · {activity.duration}
                  </p>
                </div>

                {travelPlan.activities.some(
                  (act) => act.name === activity.name
                ) ? (
                  <button
                    onClick={() => handleRemoveActivity(activity)}
                    className={`p-2 rounded-full ${
                      darkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                    }`}
                  >
                    <Trash className="text-red-500" size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddActivity(activity)}
                    className={`p-2 rounded-full ${
                      darkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                    }`}
                  >
                    <PlusCircle
                      className={`${
                        darkMode ? "text-lime-300" : "text-blue-400"
                      }`}
                      size={16}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>

          {travelPlan.activities.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">
                Selected Activities:
              </h3>
              <div className="space-y-2">
                {travelPlan.activities.map((act, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } flex justify-between items-center`}
                  >
                    <span>{act.name}</span>
                    <button
                      onClick={() => handleRemoveActivity(act)}
                      className={`p-1 rounded-full ${
                        darkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                      }`}
                    >
                      <Trash className="text-red-500" size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Save Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSavePlan}
          className={`px-8 py-3 rounded-lg font-bold flex items-center ${
            darkMode
              ? "bg-lime-600 hover:bg-lime-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          <Save className="mr-2" size={20} />
          Save Travel Plan
        </button>
      </div>
    </div>
  );
};

export default Create;
