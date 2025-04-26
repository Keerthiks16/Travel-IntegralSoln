import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Search,
  Plus,
  Heart,
  UserCircle2,
  User2,
  User,
} from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const BottomTabs = () => {
  const { darkMode } = useContext(ThemeContext);
  const location = useLocation();

  const tabs = [
    { path: "/", icon: Home },
    { path: "/search", icon: Search },
    { path: "/create", icon: Plus, isCenter: true },
    { path: "/favorites", icon: Heart },
    { path: "/profile", icon: User },
  ];

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-16
      ${darkMode ? "bg-gray-900" : "bg-white"}
      border-t ${darkMode ? "border-gray-700" : "border-gray-200"}
      flex justify-around items-center z-50`}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = location.pathname === tab.path;
        const isCenter = tab.isCenter;

        return (
          <Link
            key={tab.path}
            to={tab.path}
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <div
              className={`flex items-center justify-center 
              ${isActive ? "p-2 rounded-full" : ""}
              ${
                isActive && !isCenter
                  ? darkMode
                    ? "bg-lime-600/20"
                    : "bg-blue-600/20"
                  : ""
              }
            `}
            >
              <Icon
                size={isCenter ? 30 : 20}
                className={
                  isCenter
                    ? `${darkMode ? "text-lime-400" : "text-blue-600"}`
                    : isActive
                    ? `${darkMode ? "text-lime-400" : "text-blue-600"}`
                    : darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomTabs;
