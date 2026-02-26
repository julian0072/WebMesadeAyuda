
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onViewChange: (view: 'access' | 'guides') => void;
  currentView: 'access' | 'guides';
}

const Header: React.FC<HeaderProps> = ({ onViewChange, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sincronizar estado inicial con la clase del HTML
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <header className="w-full border-b border-primary/40 px-6 py-4 md:px-8 md:py-6 backdrop-blur-md sticky top-0 z-50 bg-bg-main/90 transition-colors duration-300">
      <nav className="mx-auto flex flex-col max-w-[1600px]">
        {/* Main Row / Mobile Header */}
        <div className="flex items-center justify-between w-full">
          
            {/* Logo Brand Block */}
            <div 
              className="flex flex-col items-center md:items-start md:flex-row md:gap-8 cursor-pointer group"
              onClick={() => onViewChange('access')}
            >
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-xl font-bold uppercase tracking-[0.15em] text-text-base whitespace-nowrap group-hover:text-primary transition-colors">Soporte MJGGC</h2>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">GCBA</span>
              </div>
              
              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-6 border-l border-white/10 dark:border-white/10 pl-8 h-10">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewChange('guides');
                  }}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${currentView === 'guides' ? 'text-text-base' : 'text-primary hover:text-text-base'}`}
                >
                  Instructivos
                </button>
              </div>
            </div>

          {/* Desktop Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-[0.15em] text-primary">
            <div className="flex items-center gap-6 pr-8 border-r border-white/10">
              <a className="hover:text-text-base transition-colors" href="https://google.com" target="_blank">Google</a>
              <a className="hover:text-text-base transition-colors" href="https://outlook.office.com/mail/" target="_blank">Mail</a>
              <a className="hover:text-text-base transition-colors" href="https://cas.buenosaires.gob.ar/acceso/login/login.zul?service=http://eut.gcba.gob.ar/gedo-web" target="_blank">SADE</a>
              <a className="hover:text-text-base transition-colors" href="https://sigaf.gcba.gob.ar/" target="_blank">SIGAF</a>
              <a className="hover:text-text-base transition-colors" href="https://web.whatsapp.com/" target="_blank">Whatsapp</a>
            </div>

            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-full hover:bg-white/5 transition-all text-text-base"
              title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              <span className="material-symbols-outlined text-2xl">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>

          {/* Mobile Actions Button & Theme */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 text-text-base"
            >
              <span className="material-symbols-outlined text-2xl">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-primary"
              aria-label="Menu"
            >
              <span className="material-symbols-outlined text-4xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center gap-8 py-10 animate-in fade-in slide-in-from-top-4 duration-300">
            {/* Mobile Actions */}
            <div className="flex flex-col items-center gap-4 w-full px-4">
              <button 
                onClick={() => {
                  onViewChange('guides');
                  setIsMenuOpen(false);
                }}
                className={`text-base font-bold uppercase tracking-widest w-fit px-12 py-4 rounded-full border border-black/10 dark:border-white/10 transition-all ${currentView === 'guides' ? 'bg-primary text-black' : 'text-text-base bg-white/5 dark:bg-white/5'}`}
              >
                Instructivos
              </button>
            </div>
            
            <div className="h-px w-20 bg-primary/20"></div>

            {/* Mobile Links */}
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              <a className="hover:text-text-base transition-colors" href="https://google.com" target="_blank">Google</a>
              <a className="hover:text-text-base transition-colors" href="https://outlook.office.com/mail/" target="_blank">Mail</a>
              <a className="hover:text-text-base transition-colors" href="https://cas.buenosaires.gob.ar/acceso/login/login.zul?service=http://eut.gcba.gob.ar/gedo-web" target="_blank">SADE</a>
              <a className="hover:text-text-base transition-colors" href="https://sigaf.gcba.gob.ar/" target="_blank">SIGAF</a>
              <a className="hover:text-text-base transition-colors" href="https://web.whatsapp.com/" target="_blank">Whatsapp</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
