import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Dialog } from "@headlessui/react"; // install if not installed: npm install @headlessui/react

const Profile = () => {
  const { darkMode } = useContext(ThemeContext);

  // Store profile info in a state
  const [profile, setProfile] = useState({
    name: "John Doe",
    title: "Travel Enthusiast 🌍",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    dob: "12 March 1995",
    nationality: "Indian",
    airport: "Mumbai (BOM)",
    style: "Adventure Travel",
    languages: "English, Hindi",
    trips: 12,
    countries: 8,
    nextTrip: "Switzerland 🇨🇭",
  });

  const [isOpen, setIsOpen] = useState(false); // Popup visibility
  const [editProfile, setEditProfile] = useState(profile); // Temporary state for editing

  const openModal = () => {
    setEditProfile(profile);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handleConfirm = () => {
    setProfile(editProfile);
    closeModal();
  };

  const handleChange = (e) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`min-h-screen py-10 px-6 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-md ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Header */}
        <div
          className={`p-6 flex flex-col items-center ${
            darkMode
              ? "bg-gradient-to-r from-indigo-700 to-blue-700"
              : "bg-gradient-to-r from-indigo-500 to-blue-600"
          }`}
        >
          <img
            src="https://avatar.iran.liara.run/public/boy?name=John+Doe"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
          <h2
            className={`mt-4 text-2xl font-bold ${
              darkMode ? "" : "text-white"
            }`}
          >
            {profile.name}
          </h2>
          <p className={`text-sm ${darkMode ? "" : "text-white"}`}>
            {profile.title}
          </p>
          <button
            onClick={openModal}
            className="mt-4 px-4 py-2 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Edit Profile
          </button>
        </div>

        {/* Profile Details */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Email:</span> {profile.email}
              </li>
              <li>
                <span className="font-medium">Phone:</span> {profile.phone}
              </li>
              <li>
                <span className="font-medium">Date of Birth:</span>{" "}
                {profile.dob}
              </li>
              <li>
                <span className="font-medium">Nationality:</span>{" "}
                {profile.nationality}
              </li>
              <li>
                <span className="font-medium">Preferred Airport:</span>{" "}
                {profile.airport}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Travel Preferences</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Favorite Style:</span>{" "}
                {profile.style}
              </li>
              <li>
                <span className="font-medium">Languages:</span>{" "}
                {profile.languages}
              </li>
              <li>
                <span className="font-medium">Trips Completed:</span>{" "}
                {profile.trips}
              </li>
              <li>
                <span className="font-medium">Countries Visited:</span>{" "}
                {profile.countries}
              </li>
              <li>
                <span className="font-medium">Next Trip:</span>{" "}
                {profile.nextTrip}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`p-4 text-center text-xs ${
            darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-50 text-gray-500"
          }`}
        >
          Last updated: 27 April 2025
        </div>
      </div>

      {/* Modal for Editing */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel
            className={`w-full max-w-md rounded-2xl p-6 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <Dialog.Title className="text-lg font-bold mb-4">
              Edit Profile
            </Dialog.Title>

            <div className="space-y-3 text-sm">
              {[
                { label: "Name", name: "name" },
                { label: "Title", name: "title" },
                { label: "Email", name: "email" },
                { label: "Phone", name: "phone" },
                { label: "Date of Birth", name: "dob" },
                { label: "Nationality", name: "nationality" },
                { label: "Preferred Airport", name: "airport" },
                { label: "Favorite Style", name: "style" },
                { label: "Languages", name: "languages" },
                { label: "Trips Completed", name: "trips" },
                { label: "Countries Visited", name: "countries" },
                { label: "Next Trip", name: "nextTrip" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="font-medium">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    value={editProfile[field.name]}
                    onChange={handleChange}
                    className="p-2 rounded-md border border-gray-300 mt-1 text-black"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-md bg-gray-400 hover:bg-gray-500 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Confirm
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Profile;
