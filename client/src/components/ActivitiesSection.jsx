import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ActivityDaySelector from "./ActivityDaySelector";
import ActivityCard from "./ActivityCard";

const ActivitiesSection = ({ activities }) => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const selectedDay = activities[selectedDayIndex];

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2
          className={`text-lg font-medium ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Activities
        </h2>
        <span
          className={`text-xs ${darkMode ? "text-lime-300" : "text-blue-500"}`}
        >
          See all
        </span>
      </div>

      <ActivityDaySelector
        activities={activities}
        selectedDayIndex={selectedDayIndex}
        setSelectedDayIndex={setSelectedDayIndex}
      />

      <div
        className={`mt-4 space-y-3 p-2  ${
          darkMode ? "border-2 rounded-xl border-lime-300" : ""
        }`}
      >
        {selectedDay.items.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesSection;
