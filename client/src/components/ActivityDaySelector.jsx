import React, { useState, useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { PersonStanding } from "lucide-react";

const ActivityDaySelector = ({
  activities,
  selectedDayIndex,
  setSelectedDayIndex,
}) => {
  const { darkMode } = useContext(ThemeContext);
  const scrollRef = useRef(null);

  const days = [
    {
      day: "MON",
      date: "27",
      month: "JAN",
      fullDate: "27.01.2025",
      dayNumber: 1,
      activityCount: 3,
    },
    {
      day: "TUE",
      date: "28",
      month: "JAN",
      fullDate: "28.01.2025",
      dayNumber: 2,
      activityCount: 5,
    },
    {
      day: "WED",
      date: "29",
      month: "JAN",
      fullDate: "29.01.2025",
      dayNumber: 3,
      activityCount: 2,
    },
    {
      day: "THU",
      date: "30",
      month: "JAN",
      fullDate: "30.01.2025",
      dayNumber: 4,
      activityCount: 4,
    },
    {
      day: "FRI",
      date: "31",
      month: "JAN",
      fullDate: "31.01.2025",
      dayNumber: 5,
      activityCount: 1,
    },
    {
      day: "SAT",
      date: "1",
      month: "FEB",
      fullDate: "01.02.2025",
      dayNumber: 6,
      activityCount: 2,
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-zinc-900" : "bg-white border border-gray-200 rounded-lg"
      } text-black font-sans`}
    >
      {/* Header with title and "See all" */}
      <div className="flex justify-between items-center p-4 pb-2">
        <h2
          className={`${
            darkMode ? "text-white" : "text-black"
          } text-xl font-bold`}
        >
          Activities
        </h2>
        <span
          className={`${
            darkMode ? "text-lime-400" : "text-blue-500"
          } text-sm font-medium`}
        >
          See all
        </span>
      </div>

      {/* Day Plan and Activities count */}
      <div className="flex gap-3 px-4 mb-4">
        <div
          className={`${
            darkMode ? "bg-lime-300 text-black" : "bg-blue-600 text-white"
          } px-6 py-2 rounded-full font-bold`}
        >
          Day Plan
        </div>
        <div
          className={`${
            darkMode
              ? "border border-lime-400 text-lime-400"
              : "border border-blue-500 text-blue-500"
          } px-6 py-2 rounded-full font-bold`}
        >
          14 Activities
        </div>
      </div>

      {/* Date selector - scrollable */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto px-4 pb-4 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {days.map((day, index) => (
          <div
            key={index}
            className="flex flex-shrink-0 cursor-pointer"
            onClick={() => setSelectedDayIndex(index)}
          >
            {/* Show month indicator only for first and last date */}
            {(index === 0 || index === days.length - 1) && (
              <div
                className={`${
                  darkMode
                    ? index === 0
                      ? "bg-lime-300"
                      : "bg-gray-500"
                    : index === 0
                    ? "bg-blue-600"
                    : "bg-gray-500"
                } ${
                  darkMode ? "text-black" : "text-white"
                } flex flex-col justify-center items-center py-2 px-3 rounded-l-lg`}
              >
                <span className="font-bold text-sm rotate-90 transform origin-center">
                  {day.month}
                </span>
              </div>
            )}

            <div
              className={`${
                index === selectedDayIndex
                  ? darkMode
                    ? "bg-zinc-800 text-white"
                    : "bg-blue-600 text-white border-blue-600"
                  : index === days.length - 1
                  ? "bg-gray-500 text-white"
                  : darkMode
                  ? "bg-zinc-800 text-gray-400"
                  : "bg-gray-200 text-gray-500"
              } flex flex-col justify-center items-center py-2 px-5 ${
                index === 0 || index === days.length - 1
                  ? "rounded-r-lg"
                  : "rounded-lg"
              } ${
                !darkMode &&
                index !== selectedDayIndex &&
                index !== days.length - 1
                  ? "border border-gray-300"
                  : ""
              }`}
            >
              <span
                className={`font-semibold ${
                  index === selectedDayIndex
                    ? "text-white"
                    : darkMode
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              >
                {day.day}
              </span>
              <span className="text-2xl font-bold">{day.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Day Info Section */}
      <div className="flex items-center gap-2 px-4 pt-2 pb-4">
        <div
          className={`${
            darkMode ? "bg-lime-300 text-black" : "bg-blue-600 text-white"
          } px-4 py-1 rounded-full text-sm font-semibold`}
        >
          Day {days[selectedDayIndex].dayNumber}{" "}
          {days[selectedDayIndex].fullDate}
        </div>
        <div
          className={`${
            darkMode ? "text-lime-400" : "text-blue-500"
          } flex items-center gap-1 text-sm font-semibold`}
        >
          <span>
            <PersonStanding />
          </span>
          <span>{days[selectedDayIndex].activityCount} Activities</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityDaySelector;
