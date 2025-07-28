import React from 'react';
import ThunderbitHex from './ThunderbitHex';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-purple-800/5 to-purple-900/10" />
      
      {/* Central Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 neon-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500">
          OKO HOLDING
          <br />
          <span className="text-5xl md:text-7xl">CORPORATION</span>
        </h1>
        
        <div className="text-2xl md:text-3xl font-bold text-purple-300 mb-8 font-mono">
          THE HOLDING COMPANY FOR THE AUTONOMOUS ERA
        </div>
        
        {/* Central Hexagon Display */}
        <div className="flex justify-center my-16">
          <div className="relative">
            {/* Main Thunderbit Hex */}
            <ThunderbitHex size={300} className="drop-shadow-2xl" />
            
            {/* Orbital elements */}
            <div className="absolute top-12 left-[-120px] text-purple-400 font-mono text-sm font-bold">
              INTELLIGENCE
              <div className="w-16 h-px bg-purple-400 mt-1"></div>
            </div>
            
            <div className="absolute top-32 left-[-140px] text-purple-300 font-mono text-sm font-bold">
              INFRASTRUCTURE
              <div className="w-8 h-8 border border-purple-300 mt-2 flex items-center justify-center text-xs">
                OKO
              </div>
            </div>
            
            <div className="absolute bottom-32 left-[-160px] text-purple-500 font-mono text-sm font-bold">
              INVESTMENT
            </div>
            
            <div className="absolute top-12 right-[-120px] text-purple-400 font-mono text-sm font-bold">
              PORTFOLIO
              <div className="w-16 h-px bg-purple-400 mt-1"></div>
            </div>
            
            <div className="absolute top-48 right-[-100px] text-purple-400 font-mono text-sm font-bold">
              SCALE
            </div>
            
            <div className="absolute bottom-12 text-purple-400 font-mono text-sm font-bold">
              INFINITE
              <br />
              POSSIBILITY
            </div>
          </div>
        </div>
        
        {/* Architecture Labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-400 mb-2 neon-text">THUNDERLINE</h3>
            <p className="text-gray-300 font-mono text-sm">Flagship AI Platform</p>
          </div>
          
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-300 mb-2 neon-text">DIOS</h3>
            <p className="text-gray-300 font-mono text-sm">Distributed Operating System</p>
          </div>
          
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-500 mb-2 neon-text">THUNDERBLOCK</h3>
            <p className="text-gray-300 font-mono text-sm">Autonomous Infrastructure</p>
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mt-12 max-w-4xl mx-auto leading-relaxed font-mono">
          <span className="text-purple-400 neon-text">Intelligence. Infrastructure. Infinite Possibility.</span><br />
          Building the backbone for a new era of <span className="text-purple-300">distributed cognition</span>, <span className="text-purple-400">autonomous networks</span>, and <span className="text-purple-500">self-evolving digital ecosystems</span>.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <button className="cyber-border px-8 py-4 text-purple-400 font-mono font-bold hover:bg-purple-400/10 transition-all duration-300 neon-glow">
            EXPLORE PORTFOLIO →
          </button>
          <button className="cyber-border px-8 py-4 text-purple-300 font-mono font-bold hover:bg-purple-300/10 transition-all duration-300 neon-glow">
            JOIN THE MOVEMENT ⬡
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroBanner;