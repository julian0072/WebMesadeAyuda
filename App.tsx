
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AccessGrid from './components/AccessGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [view, setView] = useState<'access' | 'guides'>('access');

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header onViewChange={setView} currentView={view} />
      
      <main className="flex-grow px-8 py-8 lg:py-16">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 xl:grid-cols-[1fr_1.8fr] gap-16 lg:gap-24 items-start">
          <Hero />
          <AccessGrid view={view} onViewChange={setView} />
        </div>
      </main>
      
      <Footer />

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-10 right-10 z-50">
        <button 
          onClick={() => window.open('https://api.whatsapp.com/send?phone=5491153199939', '_blank')}
          className="flex items-center gap-3 bg-white dark:bg-white border border-black/10 dark:border-white/10 px-4 py-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-200 transition-all group shadow-xl origin-bottom-right"
        >
          {/* Logo de WhatsApp */}
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.271.608-1.445.159-.175.348-.218.463-.218.116 0 .232.001.334.005.109.004.254-.041.398.305.144.346.491 1.2.534 1.288.043.087.072.188.014.305-.058.116-.087.188-.174.289l-.261.305c-.087.101-.178.21-.076.386.101.176.45.743.966 1.204.665.594 1.226.778 1.4.865.174.087.275.072.377-.043.101-.116.434-.506.549-.68.116-.174.232-.145.39-.087.159.058 1.012.477 1.186.564.174.087.289.13.332.202.043.073.043.419-.101.824z" 
              fill="#25D366" 
            />
            <circle cx="12" cy="12" r="11" stroke="#25D366" strokeWidth="2"/>
          </svg>
          <span className="text-[10px] font-black uppercase tracking-widest text-black">Soporte WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default App;
