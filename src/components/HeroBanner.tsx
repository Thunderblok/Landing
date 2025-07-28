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
        <h1 className="text-6xl md:text-8xl font-black mb-8 sharp-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500">
          OKO HOLDING
          <br />
          <span className="text-5xl md:text-7xl">CORPORATION</span>
        </h1>
        
        <div className="text-2xl md:text-3xl font-bold text-purple-300 mb-8 font-mono sharp-text">
          INTELLIGENCE • INFRASTRUCTURE • AUTONOMY
        </div>
        
        {/* Central Hexagon Display */}
        <div className="flex justify-center my-16">
          <div className="relative">
            {/* Main Thunderbit Hex */}
            <ThunderbitHex size={300} className="drop-shadow-2xl" />
            
            {/* Core Pillars */}
            <div className="absolute top-6 left-[-140px] text-purple-400 font-mono text-sm font-bold sharp-text">
              THUNDERLINE AI
              <div className="w-20 h-px bg-purple-400 mt-1"></div>
              <div className="text-xs text-gray-400 mt-1">Next-Gen Platform</div>
            </div>
            
            <div className="absolute top-28 left-[-160px] text-purple-300 font-mono text-sm font-bold sharp-text">
              DISTRIBUTED SYSTEMS
              <div className="w-6 h-6 border-2 border-purple-300 mt-2 flex items-center justify-center text-xs beveled-card">
                OS
              </div>
              <div className="text-xs text-gray-400 mt-1">DIOS Network</div>
            </div>
            
            <div className="absolute bottom-28 left-[-180px] text-purple-500 font-mono text-sm font-bold sharp-text">
              AUTONOMOUS INFRASTRUCTURE
              <div className="text-xs text-gray-400 mt-1">ThunderBlock Chain</div>
            </div>
            
            <div className="absolute top-6 right-[-140px] text-purple-400 font-mono text-sm font-bold sharp-text">
              INVESTMENT PORTFOLIO
              <div className="w-20 h-px bg-purple-400 mt-1"></div>
              <div className="text-xs text-gray-400 mt-1">Strategic Holdings</div>
            </div>
            
            <div className="absolute top-48 right-[-120px] text-purple-400 font-mono text-sm font-bold sharp-text">
              GLOBAL SCALE
              <div className="text-xs text-gray-400 mt-1">Worldwide Operations</div>
            </div>
            
            <div className="absolute bottom-6 text-purple-400 font-mono text-sm font-bold sharp-text text-center">
              INFINITE POSSIBILITY
              <div className="text-xs text-gray-400 mt-1">Boundless Innovation</div>
            </div>
          </div>
        </div>
        
        {/* Key Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="beveled-card p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-400 mb-3 sharp-text">THUNDERLINE</h3>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              Revolutionary AI platform driving next-generation automation, 
              cognitive computing, and intelligent decision-making systems.
            </p>
          </div>
          
          <div className="beveled-card p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-300 mb-3 sharp-text">DISTRIBUTED OS</h3>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              DIOS powers the infrastructure backbone, enabling seamless 
              coordination across autonomous networks and distributed computing.
            </p>
          </div>
          
          <div className="beveled-card p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-500 mb-3 sharp-text">AUTONOMOUS CHAIN</h3>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              ThunderBlock provides self-governing blockchain infrastructure 
              for decentralized applications and autonomous economic systems.
            </p>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="beveled-card p-8 mt-12 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-mono">
            <span className="text-purple-400 sharp-text font-bold">OKO Holding Corporation</span> is the premier investment and development platform 
            architecting the future of <span className="text-purple-300 font-bold">autonomous intelligence</span>, 
            <span className="text-purple-400 font-bold"> distributed infrastructure</span>, and 
            <span className="text-purple-500 font-bold"> self-evolving digital ecosystems</span>.
          </p>
          <div className="mt-6 text-lg text-gray-400 font-mono">
            We don't just invest in the future — <span className="text-purple-400 font-bold">we build it</span>.
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <button className="sharp-button px-10 py-4 text-white font-mono font-bold transition-all duration-200">
            EXPLORE PORTFOLIO →
          </button>
          <button className="cyber-border px-10 py-4 text-purple-300 font-mono font-bold hover:bg-purple-300/10 transition-all duration-200">
            STRATEGIC PARTNERSHIPS ⬡
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroBanner;