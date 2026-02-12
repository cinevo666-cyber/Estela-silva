import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 text-center">
      <p className="text-xs text-white/40 font-light flex items-center justify-center gap-1">
        Feito com <i className="fas fa-bolt text-yellow-400"></i> Google AI Studio
      </p>
    </footer>
  );
};

export default Footer;