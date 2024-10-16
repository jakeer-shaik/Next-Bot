"use client";
import React from "react";

const Suggestions = ({ suggestions, onSuggestionClick }) => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl md:mb-2">Suggestions:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow-sm hover:bg-blue-200 transition-colors duration-200 ease-in-out"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
