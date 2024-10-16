"use client";
import React, { useState } from "react";
import { useChat } from "ai/react";
import { IoSend } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import { FaUser, FaRobot } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import Suggestions from "./Suggestions";
import Header from "./Header";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "Tell me a joke",
    "Explain AI in simple terms",
    "What are the latest trends in web development?",
    "How do I choose a programming language to learn?",
    "Explain AI in simple terms",
    "Can you explain the basics of blockchain technology?",
    "What is responsive web design?",
    "How can I optimize the performance of a web application?",
  ];

  const handleSuggestionClick = (suggestion) => {
    handleInputChange({ target: { value: suggestion } });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleMessageSubmit();
    }
  };

  const handleMessageSubmit = async () => {
    setLoading(true);
    setTimeout(async () => {
      await handleSubmit();
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col h-screen max-w-6xl mx-auto px-4 md:px-6 py-4 z-20">
      <Header title="NextBot" model="llama3-8b-8192" />
      <div className="flex-grow overflow-y-auto bg-white bg-opacity-15 backdrop-blur-md p-4 mb-4 rounded-lg shadow-2xl">
        <div className="flex flex-col space-y-4">
          {messages.length ? (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "user" ? (
                  <FaUser className="text-blue-500 mt-1 mr-2" />
                ) : (
                  <FaRobot className="text-gray-500 mt-1 mr-2" />
                )}
                <div
                  className={`p-3 rounded-lg max-w-xl shadow-md text-justify ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-white self-end"
                      : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-50 text-gray-800 self-start"
                  }`}
                >
                  <ReactMarkdown className="text-base text-md leading-relaxed">
                    {message.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <Suggestions
                suggestions={suggestions}
                onSuggestionClick={handleSuggestionClick}
              />
            </div>
          )}

          {loading && (
            <div className="flex items-center space-x-2">
              <FaRobot className="text-gray-500" />
              <div className="flex items-center p-3 rounded-lg max-w-xl shadow-md bg-gradient-to-r from-gray-100 via-gray-200 to-gray-50 text-gray-800">
                <ImSpinner2 className="animate-spin text-blue-500 mr-2" />
                <span>Thinking...</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center p-3 bg-white bg-opacity-15 backdrop-blur-md rounded-3xl shadow-2xl">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          placeholder="Type your message..."
          disabled={loading}
        />
        <button
          onClick={handleMessageSubmit}
          className="ml-2 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200 ease-in-out"
          disabled={loading}
        >
          <IoSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
