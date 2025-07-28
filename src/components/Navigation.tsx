import React from 'react';
import ThunderbitHex from './ThunderbitHex';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-purple-600/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="font-mono">
              <div className="text-orange-400 font-bold text-xl sharp-text">OKO</div>
              <div className="text-gray-300 text-xs font-bold tracking-wider">Holding Corporation</div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-mono text-sm font-medium">
            <a href="#home" className="text-white hover:text-orange-400 transition-colors duration-200 sharp-text">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 sharp-text">
              About
            </a>
            <a href="#product" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 sharp-text">
              Product
            </a>
            <a href="#vision" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 sharp-text">
              Vision
            </a>
            <a href="#invest" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 sharp-text">
              Invest
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center">
            <button className="cyber-border px-6 py-2 text-orange-400 font-mono font-bold text-sm hover:bg-orange-400/10 transition-all duration-200">
              CONTACT
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;