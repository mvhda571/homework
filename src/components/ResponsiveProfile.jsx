import React from "react";
import profile from "../assets/profile.jpg";
export default function ProfileCard() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-green-500 md:bg-blue-500 dark:bg-black flex items-center justify-center p-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
          <img
            src={profile}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-purple-500"
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Muslima Sunnatova
          </h1>
          <p className="text-purple-600 dark:text-purple-400 mt-2">
            Frontend Developer
          </p>

          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}