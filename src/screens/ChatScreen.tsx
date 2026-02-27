import { useState } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hi Alex! I am your Aegis AI assistant. I can help you find company policies, IT support, or general knowledge. What do you need help with today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      { id: Date.now(), type: "user", text: input },
    ];
    setMessages(newMessages);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "bot",
          text: "I can help with that. Based on the Aegis Employee Handbook (Section 4.2), employees are eligible for up to $500 annually for home office equipment. Would you like me to open a reimbursement request for you?",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 p-4 pt-12 flex items-center gap-3 shadow-sm z-10">
        <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
          <Bot size={20} className="text-brand-primary" />
        </div>
        <div>
          <h1 className="font-bold text-gray-900 flex items-center gap-1">
            Aegis AI <Sparkles size={14} className="text-brand-accent" />
          </h1>
          <p className="text-xs text-gray-500">Company Knowledge Assistant</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        <div className="text-center text-xs text-gray-400 my-4">
          Today, 9:41 AM
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.type === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === "user" ? "bg-gray-200" : "bg-brand-primary text-white"}`}
            >
              {msg.type === "user" ? (
                <User size={16} className="text-gray-600" />
              ) : (
                <Bot size={16} />
              )}
            </div>
            <div
              className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                msg.type === "user"
                  ? "bg-brand-primary text-white rounded-tr-none"
                  : "bg-white border border-gray-100 text-gray-800 shadow-sm rounded-tl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Prompts */}
      <div className="p-3 bg-gray-50 flex gap-2 overflow-x-auto scrollbar-hide">
        <PromptPill text="IT Helpdesk" />
        <PromptPill text="PTO Policy" />
        <PromptPill text="Benefits Enrollment" />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100 pb-24">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1 pl-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <button
            onClick={handleSend}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${input.trim() ? "bg-brand-primary text-white" : "bg-gray-200 text-gray-400"}`}
          >
            <Send size={18} className={input.trim() ? "ml-1" : ""} />
          </button>
        </div>
      </div>
    </div>
  );
}

function PromptPill({ text }: { text: string }) {
  return (
    <button className="whitespace-nowrap px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-brand-primary shadow-sm hover:bg-gray-50">
      {text}
    </button>
  );
}
