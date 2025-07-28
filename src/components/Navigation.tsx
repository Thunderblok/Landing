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
              <div className="text-purple-400 font-bold text-lg sharp-text">OKO</div>
              <div className="text-purple-300 text-xs font-bold tracking-wider">HOLDING CORP</div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-mono text-sm font-medium">
            <a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 sharp-text">
              PORTFOLIO
            </a>
            <a href="#technology" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 sharp-text">
              TECHNOLOGY
            </a>
            <a href="#investors" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 sharp-text">
              INVESTORS
            </a>
            <a href="#governance" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 sharp-text">
              GOVERNANCE
            </a>
            <a href="#partnerships" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 sharp-text">
              PARTNERSHIPS
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button className="cyber-border px-4 py-2 text-purple-300 font-mono font-bold text-sm hover:bg-purple-300/10 transition-all duration-200">
              INVESTOR PORTAL
            </button>
            <button className="sharp-button px-4 py-2 text-white font-mono font-bold text-sm">
              STRATEGIC INQUIRY ⬢
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;