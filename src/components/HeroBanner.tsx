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
          DISTRIBUTED INTELLIGENCE
          <br />
          <span className="text-5xl md:text-7xl">HEXAGON</span>
        </h1>
        
        {/* Central Hexagon Display */}
        <div className="flex justify-center my-16">
          <div className="relative">
            {/* Main Thunderbit Hex */}
            <ThunderbitHex size={300} className="drop-shadow-2xl" />
            
            {/* Orbital elements */}
            <div className="absolute top-12 left-[-120px] text-purple-400 font-mono text-sm font-bold">
              QUERIES
              <div className="w-16 h-px bg-purple-400 mt-1"></div>
            </div>
            
            <div className="absolute top-32 left-[-140px] text-purple-300 font-mono text-sm font-bold">
              INTERFACE
              <div className="w-8 h-8 border border-purple-300 mt-2 flex items-center justify-center text-xs">
                CPI
              </div>
            </div>
            
            <div className="absolute bottom-32 left-[-160px] text-purple-500 font-mono text-sm font-bold">
              COMMANDS
            </div>
            
            <div className="absolute top-12 right-[-120px] text-purple-400 font-mono text-sm font-bold">
              THUNDERBIT
              <div className="w-16 h-px bg-purple-400 mt-1"></div>
            </div>
            
            <div className="absolute top-48 right-[-100px] text-purple-400 font-mono text-sm font-bold">
              DATA
            </div>
            
            <div className="absolute bottom-12 text-purple-400 font-mono text-sm font-bold">
              DATA/STATE
              <br />
              FLOW
            </div>
          </div>
        </div>
        
        {/* Architecture Labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-400 mb-2 neon-text">THUNDERLINE</h3>
            <p className="text-gray-300 font-mono text-sm">Distributed Intelligence Layer</p>
          </div>
          
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-300 mb-2 neon-text">CORE</h3>
            <p className="text-gray-300 font-mono text-sm">Services • Domain • Entities</p>
          </div>
          
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-500 mb-2 neon-text">THUNDERBLOCK</h3>
            <p className="text-gray-300 font-mono text-sm">Immutable Data Infrastructure</p>
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mt-12 max-w-4xl mx-auto leading-relaxed font-mono">
          A next-gen <span className="text-purple-400 neon-text">cyber-landing</span> for OKO Holding Corp & Thunderline.<br />
          <span className="text-purple-300">Project DIOS_Gate</span> • <span className="text-purple-400">Distributed Autonomous Organization</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <button className="cyber-border px-8 py-4 text-purple-400 font-mono font-bold hover:bg-purple-400/10 transition-all duration-300 neon-glow">
            ENTER THUNDERLINE →
          </button>
          <button className="cyber-border px-8 py-4 text-purple-300 font-mono font-bold hover:bg-purple-300/10 transition-all duration-300 neon-glow">
            DAO INTERFACE ⬡
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroBanner;