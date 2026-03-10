
import React from 'react';
import { ACCESS_CHANNELS, GUIDE_CHANNELS } from '../constants';

interface AccessGridProps {
  view: 'access' | 'guides';
  onViewChange: (view: 'access' | 'guides') => void;
}

const CustomIcon: React.FC<{ id: string }> = ({ id }) => {
  // Clase base para el efecto de brillo en el SVG
  const transitionClasses = "transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,217,0,0.5)]";

  // SIGAF: Color negro en light, amarillo en dark
  if (id === 'sigaf-sys') {
    return (
      <svg viewBox="0 0 100 100" className={`w-10 h-10 shrink-0 ${transitionClasses}`}>
        <circle cx="50" cy="50" r="48" className="fill-transparent transition-colors duration-300" />
        <path 
          d="M30 75 C 30 45, 50 35, 75 35 L 75 20 L 95 45 L 75 70 L 75 55 C 55 55, 45 60, 40 75 Z" 
          className="fill-black dark:fill-primary/70 group-hover:fill-primary transition-colors duration-300" 
        />
      </svg>
    );
  }
  
  // SIGAF Web: Color negro en light, amarillo en dark
  if (id === 'sigaf-web') {
    return (
      <svg viewBox="0 0 100 100" className={`w-10 h-10 shrink-0 ${transitionClasses}`}>
        <circle cx="50" cy="50" r="48" fill="none" className="stroke-black dark:stroke-primary/70 group-hover:stroke-primary transition-colors duration-300" strokeWidth="4" />
        <path 
          d="M30 75 C 30 45, 50 35, 75 35 L 75 20 L 95 45 L 75 70 L 75 55 C 55 55, 45 60, 40 75 Z" 
          className="fill-black dark:fill-primary/70 group-hover:fill-primary transition-colors duration-300" 
        />
      </svg>
    );
  }

  // SIAL: Color negro en light, amarillo en dark
  if (id === 'sial') {
    return (
      <svg viewBox="0 0 100 100" className={`w-10 h-10 shrink-0 ${transitionClasses}`}>
        <rect x="5" y="5" width="90" height="90" rx="15" className="fill-transparent transition-colors duration-300" />
        <text 
          x="50" 
          y="75" 
          fontSize="75" 
          fontWeight="900" 
          className="fill-black dark:fill-primary/70 group-hover:fill-primary transition-colors duration-300" 
          textAnchor="middle" 
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          4
        </text>
      </svg>
    );
  }

  // SADE: Logo Original estilizado (S de dos piezas)
  if (id === 'sade') {
    return (
      <svg viewBox="0 0 100 100" className={`w-10 h-10 shrink-0 ${transitionClasses}`}>
        <g className="fill-black dark:fill-primary/70 group-hover:fill-primary transition-colors duration-300">
           {/* Pieza Superior Derecha con bordes redondeados */}
           <path d="M 46 15 H 79 Q 85 15 85 21 V 54 Q 85 60 79 60 H 71 Q 65 60 65 54 V 41 Q 65 35 59 35 H 46 Q 40 35 40 29 V 21 Q 40 15 46 15 Z" />
           {/* Pieza Inferior Izquierda con bordes redondeados */}
           <path d="M 54 85 H 21 Q 15 85 15 79 V 46 Q 15 40 21 40 H 29 Q 35 40 35 46 V 59 Q 35 65 41 65 H 54 Q 60 65 60 71 V 79 Q 60 85 54 85 Z" />
        </g>
      </svg>
    );
  }

  // ISC: Color negro en light, amarillo en dark
  if (id === 'isc') {
    return (
      <svg viewBox="0 0 100 100" className={`w-10 h-10 shrink-0 ${transitionClasses}`}>
        <text 
          x="50" 
          y="68" 
          fontSize="42" 
          fontWeight="900" 
          fontStyle="italic"
          className="fill-black dark:fill-primary/70 group-hover:fill-primary transition-colors duration-300" 
          textAnchor="middle" 
          style={{ fontFamily: 'sans-serif' }}
        >
          ISC
        </text>
      </svg>
    );
  }

  // BADA: Solo letras BA, ajustadas hacia abajo
  if (id === 'bada') {
    return (
      <svg viewBox="0 0 100 100" className={`w-10 h-10 shrink-0 ${transitionClasses}`}>
        <text 
          x="50" 
          y="75" 
          fontSize="56" 
          fontWeight="900" 
          className="fill-black dark:fill-primary/70 group-hover:fill-primary transition-colors duration-300" 
          textAnchor="middle" 
          style={{ fontFamily: 'Arial Black, sans-serif' }}
        >
          BA
        </text>
      </svg>
    );
  }

  return null;
};

const AccessGrid: React.FC<AccessGridProps> = ({ view, onViewChange }) => {
  const isCustom = (id: string) => ['sigaf-sys', 'sigaf-web', 'sial', 'sade', 'isc', 'bada'].includes(id);
  const items = view === 'access' ? ACCESS_CHANNELS : GUIDE_CHANNELS;

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center mb-12">
        <h3 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.2em] text-text-base text-center w-full px-4">
          {view === 'access' ? (
            <>Canales de <span className="text-primary font-bold">Acceso</span></>
          ) : (
            <>Guias e <span className="text-primary font-bold">Instructivos</span></>
          )}
        </h3>
        {view === 'guides' && (
          <button 
            onClick={() => onViewChange('access')}
            className="mt-4 text-[10px] font-black uppercase tracking-widest text-primary hover:text-text-base transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Volver a Canales
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-6 w-full px-4 lg:px-0 max-w-xl mx-auto">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="group cursor-pointer w-full transition-transform active:scale-95"
            onClick={() => item.url && window.open(item.url, '_blank')}
          >
            <div className="flex flex-col items-center justify-center text-center gap-1 p-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-bg-card hover:border-primary transition-all duration-300 shadow-sm dark:shadow-none min-h-[85px]">
              
              {isCustom(item.id) ? (
                <CustomIcon id={item.id} />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,217,0,0.5)] shrink-0 overflow-hidden">
                  <span className="material-symbols-outlined text-black dark:text-primary/70 text-3xl group-hover:text-primary transition-all duration-300">
                    {item.icon}
                  </span>
                </div>
              )}

              <h4 className="text-[13px] md:text-sm font-bold uppercase tracking-wide text-text-base opacity-80 group-hover:opacity-100 transition-colors leading-tight">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessGrid;
