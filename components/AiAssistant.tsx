
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hola, soy el asistente de soporte MJGGC. ¿En qué sistema puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-24 right-10 z-50">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-bg-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
          <div className="p-4 bg-primary text-black flex justify-between items-center">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest">Asistente IA</h3>
              <p className="text-[10px] font-medium opacity-70">Soporte Digital MJGGC</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-black/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-black font-medium' 
                    : 'bg-white/5 text-gray-300 border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-bg-main/80">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu consulta aquí..."
                className="flex-grow bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary/50 transition-colors text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary text-black p-2 rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-primary border border-primary/20 px-4 py-3 rounded-full hover:scale-105 transition-all shadow-lg group"
      >
        <span className="material-symbols-outlined text-xl text-black">smart_toy</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-black">Asistente Digital</span>
      </button>
    </div>
  );
};

export default AiAssistant;
