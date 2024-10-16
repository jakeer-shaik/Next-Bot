import React from "react";
import { VscRobot } from "react-icons/vsc";
import { FaCog } from "react-icons/fa";

const ModelInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex items-center mb-4">
        <VscRobot size={40} className="text-blue-500 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">NextBot</h1>
      </div>
      <div className="mb-4 text-center flex justify-center items-center">
        <p className="text-lg font-semibold mr-2">Model:</p>{"     "}
        <p className="text-xl font-medium text-red-500">llama3-8b-8192</p>
      </div>
      <div className="text-center flex justify-center items-center">
        <FaCog size={24} className="text-gray-500 animate-spin" />
        <p className="text-sm text-gray-600">
          Explore our suggestions below to get started:
        </p>
      </div>
    </div>
  );
};

export default ModelInfo;
