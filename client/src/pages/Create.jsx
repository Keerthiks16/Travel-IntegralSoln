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
    startDate: "",
    endDate: "",
    duration: "",
    groupSize: "",
    people: { male: 0, female: 0 },
    flight: { from: "", to: "" },
    accommodations: [],
    activities: [],
  });

  // Filter destinations based on search query
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

  // Handle destination selection
  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
    setTravelPlan((prev) => ({
      ...prev,
      city: destination.city,
      accommodations: [],
      activities: [],
    }));
    setSearchQuery("");
    setFilteredDestinations([]);
  };

  // Handle array operations (add/remove items)
  const handleArrayOperation = (type, operation, item) => {
    setTravelPlan((prev) => {
      const array = [...prev[type]];
      const exists = array.some((i) => i.name === item.name);

      if (operation === "add" && !exists) {
        return { ...prev, [type]: [...array, item] };
      } else if (operation === "remove") {
        return { ...prev, [type]: array.filter((i) => i.name !== item.name) };
      }
      return prev;
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setTravelPlan((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setTravelPlan((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle people count changes
  const handlePeopleChange = (type, value) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= 0) {
      setTravelPlan((prev) => ({
        ...prev,
        people: { ...prev.people, [type]: numValue },
      }));
    }
  };

  // Calculate duration when dates change
  useEffect(() => {
    if (travelPlan.startDate && travelPlan.endDate) {
      const start = new Date(travelPlan.startDate);
      const end = new Date(travelPlan.endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      setTravelPlan((prev) => ({ ...prev, duration: `${diffDays} Days` }));
    }
  }, [travelPlan.startDate, travelPlan.endDate]);

  // Save travel plan
  const handleSavePlan = () => {
    console.log("Saving travel plan:", travelPlan);
    alert("Travel plan saved successfully!");
  };

  // Common input field component
  const InputField = ({
    icon: Icon,
    name,
    value,
    placeholder,
    disabled = false,
  }) => (
    <div
      className={`p-3 rounded-lg flex items-center ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    >
      <Icon
        className={`mr-2 ${darkMode ? "text-lime-300" : "text-blue-400"}`}
        size={16}
      />
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        className="bg-transparent outline-none w-full"
      />
    </div>
  );

  // Common section component
  const Section = ({ title, children }) => (
    <div
      className={`rounded-2xl shadow-lg p-6 mb-8 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );

  // Item card component for accommodations and activities
  const ItemCard = ({ item, type, isSelected }) => (
    <div
      className={`p-4 rounded-lg flex justify-between items-center ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    >
      <div>
        <div className="flex items-center">
          {type === "accommodations" ? (
            <Hotel
              className={`mr-2 ${darkMode ? "text-lime-300" : "text-blue-400"}`}
              size={16}
            />
          ) : (
            <Activity
              className={`mr-2 ${darkMode ? "text-lime-300" : "text-blue-400"}`}
              size={16}
            />
          )}
          <h3 className="font-bold">{item.name}</h3>
        </div>
        <p
          className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {type === "accommodations"
            ? `Rating: ${item.rating}`
            : `${item.timing} · ${item.duration}`}
        </p>
      </div>
      <button
        onClick={() =>
          handleArrayOperation(type, isSelected ? "remove" : "add", item)
        }
        className={`p-2 rounded-full ${
          darkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
        }`}
      >
        {isSelected ? (
          <Trash className="text-red-500" size={16} />
        ) : (
          <PlusCircle
            className={darkMode ? "text-lime-300" : "text-blue-400"}
            size={16}
          />
        )}
      </button>
    </div>
  );

  return (
    <div
      className={`min-h-screen p-8 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-4xl font-extrabold mb-6">Create Your Travel Plan</h1>

      {/* Search Destination */}
      <div className="mb-8 relative">
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
            {filteredDestinations.map((dest) => (
              <div
                key={dest.city}
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

      {/* Trip Details Section */}
      <Section title="Trip Details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Destination */}
          <div>
            <label className="block text-sm mb-2">Destination</label>
            <InputField
              icon={MapPin}
              name="city"
              value={travelPlan.city}
              placeholder="Where to?"
              disabled={!!selectedDestination}
            />
          </div>

          {/* Dates */}
          <div>
            <label className="block text-sm mb-2">Dates</label>
            <div>
              <div className="flex-1">
                <div
                  className={`p-3 mb-2 rounded-lg flex items-center ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <CalendarDays
                    className={`mr-2 ${
                      darkMode ? "text-lime-300" : "text-blue-400"
                    }`}
                    size={16}
                  />
                  <input
                    type="date"
                    name="startDate"
                    value={travelPlan.startDate}
                    onChange={handleInputChange}
                    className="bg-transparent outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div
                  className={`p-3 rounded-lg flex items-center ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <CalendarDays
                    className={`mr-2 ${
                      darkMode ? "text-lime-300" : "text-blue-400"
                    }`}
                    size={16}
                  />
                  <input
                    type="date"
                    name="endDate"
                    value={travelPlan.endDate}
                    onChange={handleInputChange}
                    min={travelPlan.startDate}
                    className="bg-transparent outline-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm mb-2">Duration</label>
            <InputField
              icon={CalendarDays}
              name="duration"
              value={travelPlan.duration}
              placeholder="No of Days"
              disabled
            />
          </div>

          {/* Group Size */}
          <div>
            <label className="block text-sm mb-2">Group Size</label>
            <InputField
              icon={Users}
              name="groupSize"
              value={travelPlan.groupSize}
              placeholder="Solo, Couple, Family, Friends"
            />
          </div>

          {/* People */}
          <div>
            <label className="block text-sm mb-2">People</label>
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } flex items-center gap-4`}
            >
              <div className="flex items-center">
                <span className="mr-2">Male:</span>
                <input
                  type="number"
                  value={travelPlan.people.male}
                  onChange={(e) => handlePeopleChange("male", e.target.value)}
                  className={`w-12 p-1 rounded ${
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
                  className={`w-12 p-1 rounded ${
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
      </Section>

      {/* Accommodations Section */}
      {selectedDestination && (
        <Section title="Suggested Accommodations">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedDestination.accommodations.map((accommodation) => (
              <ItemCard
                key={accommodation.name}
                item={accommodation}
                type="accommodations"
                isSelected={travelPlan.accommodations.some(
                  (acc) => acc.name === accommodation.name
                )}
              />
            ))}
          </div>

          {travelPlan.accommodations.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">
                Selected Accommodations:
              </h3>
              <div className="space-y-2">
                {travelPlan.accommodations.map((acc) => (
                  <div
                    key={acc.name}
                    className={`p-3 rounded-lg ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } flex justify-between items-center`}
                  >
                    <span>{acc.name}</span>
                    <button
                      onClick={() =>
                        handleArrayOperation("accommodations", "remove", acc)
                      }
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
        </Section>
      )}

      {/* Activities Section */}
      {selectedDestination && (
        <Section title="Suggested Activities">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedDestination.activities.map((activity) => (
              <ItemCard
                key={activity.name}
                item={activity}
                type="activities"
                isSelected={travelPlan.activities.some(
                  (act) => act.name === activity.name
                )}
              />
            ))}
          </div>

          {travelPlan.activities.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">
                Selected Activities:
              </h3>
              <div className="space-y-2">
                {travelPlan.activities.map((act) => (
                  <div
                    key={act.name}
                    className={`p-3 rounded-lg ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } flex justify-between items-center`}
                  >
                    <span>{act.name}</span>
                    <button
                      onClick={() =>
                        handleArrayOperation("activities", "remove", act)
                      }
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
        </Section>
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
