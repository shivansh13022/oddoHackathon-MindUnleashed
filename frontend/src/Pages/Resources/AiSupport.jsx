import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ai from "./ai.png"; // Make sure this path is correct

const AiSupport = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [aiimg, setAiimg] = useState(true);
  const endOfMessagesRef = useRef(null);
  const chatBoxRef = useRef(null); // Reference to the chatbox container

  // Adjusted scrollToBottom to manually set scrollTop
  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getCurrentTimestamp = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    setAiimg(false);

    const newMessage = {
      text: userInput,
      sender: "user",
      timestamp: getCurrentTimestamp(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        prompt: userInput,
      });
      const botMessage = {
        text: response.data.generatedText,
        sender: "bot",
        timestamp: getCurrentTimestamp(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-10 mt-16">
      {/* AI Support Description */}
      <div className="w-1/2 ml-20">
        <h1 className="text-4xl font-medium text-blue-300 font-sans mb-4">
          Your 24/7 Ally: AI-Powered Support
        </h1>
        <p className="text-white">
          Introducing our AI Support system, enhanced by the cutting-edge
          technology. Designed to offer immediate, insightful assistance, our AI
          platform is an ever-present resource for guidance, information, or
          simply a conversation. Engage with our sophisticated AI for prompt,
          precise responses tailored to your needs.
        </p>
        <ul className="custom-list text-white py-4 w-2/3">
          <li>
            <strong className="text-xl" style={{ color: "#E91E63" }}>
              Instant Assistance
            </strong>
          </li>
          <li>
            <strong className="text-xl" style={{ color: "#E91E63" }}>
              Wide Range of Topics
            </strong>
          </li>
          <li>
            <strong className="text-xl" style={{ color: "#E91E63" }}>
              Interactive Experience
            </strong>
          </li>
        </ul>
        <p className="text-xl" style={{ color: "#E91E63" }}>
          Simply type your question in the chat box on the right and receive an
          immediate response from our AI.
        </p>
      </div>
      {/* Chat Interface */}
      <div className="w-2/3 flex flex-col mr-24 mt-2">
        <div
          ref={chatBoxRef}
          className="chatbox border-2 border-gray-300 p-4 h-80 w-auto overflow-auto shadow rounded-lg"
        >
          {aiimg && (
            <img
              src={ai}
              alt="ai"
              className="bounce-animation ml-60 h-64 w-44"
            />
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message my-2 p-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-600 text-white ml-auto"
                  : "bg-pink-500 text-gray-200 mr-auto"
              }`}
              style={{ maxWidth: "75%", wordBreak: "break-word" }}
            >
              {message.text}
              <br />
              <div
                className="text-right text-xs mt-1 bg-inherit"
                style={{ color: message.sender === "user" ? "black" : "black" }}
              >
                {message.timestamp}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="loading-skeleton my-2 p-2 rounded-lg bg-pink-300 w-3/4 h-12 animate-pulse"></div>
          )}
          <div ref={endOfMessagesRef} />
        </div>
        <form onSubmit={sendMessage} className="mt-4 flex">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-grow border p-2 mr-2 rounded-lg focus:outline-none focus:ring-2 text-white focus:ring-blue-700"
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiSupport;
