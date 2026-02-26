
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8 pt-2 items-center md:items-start text-center md:text-left">
      <div>
        <h1 className="text-5xl font-extralight tracking-tight text-text-base md:text-6xl lg:text-7xl leading-[1.1]">
          Soporte <span className="text-primary/90">Técnico</span><br/>
          Mesa de Ayuda
        </h1>
        <div className="mt-8 h-px w-20 bg-primary/40 mx-auto md:mx-0"></div>
      </div>
      
      <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium tracking-widest text-text-base uppercase">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
          Atención 8 a 18hs
        </span>
      </div>

      <div className="flex flex-col gap-10 pt-8 border-t border-black/5 dark:border-white/5 w-full">
        {/* Uspallata Block */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-primary font-black text-base tracking-widest uppercase">Uspallata</h3>
          <div className="space-y-2">
            <p className="text-text-base text-2xl font-medium md:text-3xl opacity-90">(5411) 5091-7610/7963</p>
            <div>
              <span className="text-gray-500 dark:text-gray-500 text-xs font-bold uppercase tracking-widest block mb-1">Dirección</span>
              <p className="text-text-base opacity-70 text-base font-light leading-tight">Uspallata 3160, 1er Subsuelo. CABA.</p>
            </div>
          </div>
        </div>

        {/* Lezama Block */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-primary font-black text-base tracking-widest uppercase">Lezama</h3>
          <div className="space-y-2">
            <p className="text-text-base text-2xl font-medium md:text-3xl opacity-90">(5411) 5030-9100/9400 - int. 5135/5136</p>
            <div>
              <span className="text-gray-500 dark:text-gray-500 text-xs font-bold uppercase tracking-widest block mb-1">Dirección</span>
              <p className="text-text-base opacity-70 text-base font-light leading-tight">Av. Martín García 346, 5to. piso, CABA.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;