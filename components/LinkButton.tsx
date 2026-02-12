import React from 'react';
import { ButtonLink } from '../types';

interface LinkButtonProps {
  link: ButtonLink;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full mb-4 overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      
      <div className="relative flex items-center justify-between px-6 py-4">
        <span className="flex-1 text-center font-medium text-white tracking-wide group-hover:font-semibold transition-all">
          {link.iconClass && <i className={`${link.iconClass} mr-2`}></i>}
          {link.title}
        </span>
        
        {/* Subtle arrow icon that appears on hover */}
        <span className="absolute right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white">
          <i className="fas fa-chevron-right text-sm"></i>
        </span>
      </div>
    </a>
  );
};

export default LinkButton;