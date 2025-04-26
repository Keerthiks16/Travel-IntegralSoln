import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = ({ name }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`flex justify-between items-center p-4 ${
        darkMode ? "bg-gradient-to-br from-gray-900 to-black" : "bg-white"
      }`}
    >
      <div>
        <h1 className="text-xl font-bold">Hello {name}!</h1>
        <p className="text-sm text-gray-500">Ready for the trip?</p>
      </div>
      <button
        onClick={toggleTheme}
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          darkMode ? "bg-orange-500" : "bg-orange-500"
        }`}
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
    </header>
  );
};

export default Header;
