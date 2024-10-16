"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { VscRobot } from "react-icons/vsc";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center text-xl font-semibold">
            <VscRobot size={24} className="text-yellow-400 mr-2" /> NextBot
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="mt-4 px-4">
          <a
            href="#"
            className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded-md"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded-md"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded-md"
          >
            Services
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded-md"
          >
            Contact
          </a>
        </nav>
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out z-10 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {children}
        {!isOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 left-4 p-3 rounded-full shadow-md hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-in-out z-50"
          >
            <VscRobot size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SideBar;
