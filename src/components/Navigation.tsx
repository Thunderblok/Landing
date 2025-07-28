import React from 'react';
import ThunderbitHex from './ThunderbitHex';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-purple-600/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <ThunderbitHex size={32} />
            <div className="font-mono">
              <div className="text-purple-400 font-bold text-lg neon-text">OKO</div>
              <div className="text-purple-300 text-xs">HOLDING CORP</div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:neon-text">
              ABOUT
            </a>
            <a href="#vision" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:neon-text">
              VISION
            </a>
            <a href="#technology" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:neon-text">
              TECHNOLOGY
            </a>
            <a href="#team" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:neon-text">
              TEAM
            </a>
            <a href="#join" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:neon-text">
              JOIN US
            </a>
          </div>
          
          {/* CTA Button */}
          <button className="glitch-btn">
            INVEST ⬢
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
