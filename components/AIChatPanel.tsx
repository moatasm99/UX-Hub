
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { askUXAI } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatPanel: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  // Initialize with a function to get the current translation at mount
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    { role: 'assistant', content: t('chat.assistant_welcome') }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Update the initial message if it hasn't been modified (optional, but nice)
  useEffect(() => {
    if (messages.length === 1 && messages[0].role === 'assistant') {
      // We could update it, but it might be confusing if user typed. 
      // Let's just start with the correct language greeting on mount/reload.
      // Actually, if language changes, we might want to inject a new greeting?
      // Let's keep it simple.
    }
  }, [i18n.language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      // Pass language context to AI if possible, or just expect it to reply in same language
      const response = await askUXAI(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error." }]);
    }
    setIsLoading(false);
  };

  const isRtl = i18n.dir() === 'rtl';

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start">
      {isOpen && (
        <div className="glass-card w-80 md:w-96 h-[450px] mb-4 rounded-2xl flex flex-col overflow-hidden shadow-2xl border-blue-500/30 bg-white dark:bg-slate-900 origin-bottom-left animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤖</span>
              <span className="font-bold">{t('chat.title')}</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">✕</button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-900/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none'
                  }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-200 dark:bg-slate-700 p-3 rounded-2xl rounded-bl-none animate-pulse text-slate-500 dark:text-slate-400 text-xs">
                  {t('chat.thinking')}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-slate-800/80 flex gap-2 border-t border-slate-200 dark:border-slate-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t('chat.user_placeholder')}
              className="flex-grow bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-slate-100"
            />
            <button
              onClick={handleSend}
              className={`bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-500 transition ${isRtl ? 'rotate-180' : ''}`}
            >
              🚀
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-indigo-600 to-blue-600 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform active:scale-95 border border-white/10 text-white"
      >
        {isOpen ? '💬' : '🤖'}
      </button>
    </div>
  );
};

export default AIChatPanel;
