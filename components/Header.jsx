// Header.js
import React from "react";

const Header = ({ title, model }) => {
  return (
    <header className="bg-[#6439FF] text-white py-4 px-6 rounded-b-lg shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex items-center">
          <span className="text-sm bg-blue-400 px-3 py-1 rounded-full shadow-sm">
            {model}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
