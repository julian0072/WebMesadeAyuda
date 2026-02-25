
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-primary/40 bg-bg-main mt-auto py-12 px-8 transition-colors duration-300">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-base">
            © 2026 GOBIERNO DE LA CIUDAD AUTÓNOMA DE BUENOS AIRES
          </p>
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-text-base opacity-60">
            SUBSECRETARÍA DE COORDINACIÓN TÉCNICA, ADMINISTRATIVA Y LEGAL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;