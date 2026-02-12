import React from 'react';
import { SocialLink } from '../types';

interface SocialIconsProps {
  links: SocialLink[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ links }) => {
  return (
    <div className="flex justify-center gap-6 mb-8 w-full">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300 drop-shadow-lg"
          aria-label={link.platform}
        >
          <i className={`${link.iconClass} text-2xl`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;