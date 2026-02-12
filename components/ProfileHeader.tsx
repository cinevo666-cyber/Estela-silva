import React from 'react';
import { ProfileData } from '../types';

interface ProfileHeaderProps {
  data: ProfileData;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center text-center mb-6">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse blur-sm"></div>
        <img
          src={data.imageUrl}
          alt={data.name}
          className="relative w-32 h-32 rounded-full border-4 border-white/20 object-cover shadow-2xl"
        />
      </div>
      
      <h1 className="mt-4 text-2xl font-bold text-white tracking-wide drop-shadow-md">
        {data.name}
      </h1>
      
      <p className="mt-2 text-sm text-white/80 font-light tracking-wider uppercase">
        {data.title}
      </p>
    </div>
  );
};

export default ProfileHeader;