import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import sheenaIcon from "../assets/sheenaicon.png"; // ✅ Make sure path is correct

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "ai", text: "Hi! I’m your assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    const trimmedInput = input.trim();

    if (trimmedInput === "") {
      setMessages((prev) => [...prev, { type: "user", text: "" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "ai", text: "Alright, if you think of anything, just ask!" },
        ]);
      }, 500);
      return;
    }

    setMessages((prev) => [...prev, { type: "user", text: trimmedInput }]);
    setInput("");

    const lower = trimmedInput
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, " ")
      .trim();

    let aiResponse = "I'm not sure how to respond yet, but I'm learning!";

    if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
      aiResponse = "Hello! How can I help you today?";
    } else if (
      lower.includes("nothing") ||
      lower.includes("nope") ||
      lower.includes("thats all") ||
      lower.includes("im good") ||
      lower.includes("i am good") ||
      lower.includes("nothing more") ||
      lower.includes("not at this time")
    ) {
      aiResponse = "Alright, if you think of anything, just ask!";
    } else if (lower.includes("bye")) {
      aiResponse = "Goodbye! Have a great day!";
    } else if (
      lower.includes("thanks") ||
      lower.includes("thank you") ||
      lower.includes("got it") ||
      lower.includes("i got it")
    ) {
      aiResponse = "You’re welcome! Let me know if you have more questions.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "ai", text: aiResponse }]);
    }, 500);
  };

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-12 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div
        className={`w-64 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[400px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none"}
        `}
      >
        <div className="flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1.5 text-sm">
          <span>Sheena AI Assistant</span>
          <button onClick={toggleChat}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-3 flex flex-col gap-1.5 overflow-y-auto text-sm">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`px-2 py-1.5 rounded-lg inline-block max-w-[75%] break-words ${
                msg.type === "user"
                  ? "bg-blue-500 text-white self-end text-left"
                  : "bg-gray-200 text-gray-900 self-start text-left"
              }`}
            >
              {msg.text || <i>(no message)</i>}
            </div>
          ))}
          <div ref={endOfMessagesRef} />
        </div>

        {/* Input Area */}
        <div className="p-1 border-t flex">
          <input
            type="text"
            className="flex-1 border rounded-l-md px-2 py-1 text-sm text-black"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={!isOpen}
          />
          <button
            className="bg-blue-500 text-white px-3 rounded-r-md text-sm"
            onClick={handleSend}
            disabled={!isOpen}
          >
            Send
          </button>
        </div>
      </div>

      {/* Avatar Button */}
      {!isOpen && (
        <button
          className="p-0 shadow-xl hover:scale-105 transition-transform border-none bg-transparent cursor-pointer"
          onClick={toggleChat}
        >
          <img
            src={sheenaIcon}
            alt="Chat Avatar"
            className="w-25 h-25 object-contain"
            style={{
              padding: "4px",
              borderRadius: "0px",
              backgroundColor: "transparent",
            }}
          />
        </button>
      )}
    </div>
  );
};

export default AIChatWidget;