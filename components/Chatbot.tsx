
import React, { useState, useRef, useEffect } from 'react';
import { getChatbotResponse } from '../services/geminiService';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! Welcome to Total Wireless Lebanon. How can I help you today?", isUser: false }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setLoading(true);

    const response = await getChatbotResponse(userMessage);
    setMessages(prev => [...prev, { text: response, isUser: false }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 sm:w-96 h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden ring-1 ring-black/5">
          <div className="bg-[#ed0000] p-5 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-black italic text-lg tracking-tighter">total <span className="text-[10px] not-italic tracking-widest uppercase">support</span></span>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-white/20 hover:bg-white/40 p-1 rounded-full transition-colors w-7 h-7 flex items-center justify-center">
              <i className="fas fa-times text-xs"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  msg.isUser ? 'bg-[#ed0000] text-white rounded-tr-none' : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl px-4 py-3 space-x-1 flex shadow-sm">
                  <div className="w-1.5 h-1.5 bg-[#ed0000] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#ed0000] rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-[#ed0000] rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about phones or plans..."
                className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#ed0000] focus:border-transparent"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-[#ed0000] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition-all disabled:opacity-50"
              >
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#ed0000] text-white rounded-full shadow-xl hover:bg-red-700 transition-all transform hover:scale-110 flex items-center justify-center ring-4 ring-white"
        >
          <i className="fas fa-comment-dots text-2xl"></i>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
