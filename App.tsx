import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import SocialIcons from './components/SocialIcons';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import { PROFILE_DATA, SOCIAL_LINKS, BUTTON_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 animate-gradient-xy">
      
      {/* Background overlay for texture (optional noise) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Main Glassmorphism Card */}
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden p-8 z-10">
        
        {/* Decorative background glow inside the card */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative z-10">
          <ProfileHeader data={PROFILE_DATA} />
          
          <SocialIcons links={SOCIAL_LINKS} />
          
          <div className="flex flex-col w-full">
            {BUTTON_LINKS.map((link, index) => (
              <LinkButton key={index} link={link} />
            ))}
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;