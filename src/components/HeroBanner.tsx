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
        <h1 className="text-6xl md:text-8xl font-black mb-4 sharp-text text-white">
          <span className="text-orange-400">Distributed</span>
          <br />
          <span className="text-white">Intelligent</span>
          <br />
          <span className="text-white">Operating System</span>
        </h1>
        
        <div className="text-lg md:text-xl text-gray-300 mb-8 font-mono max-w-2xl mx-auto leading-relaxed">
          Powering real-time cluster orchestration and AI-driven autonomy with Thunderline.
        </div>
        
        {/* Hexagonal Module Layout */}
        <div className="relative flex justify-center my-16">
          <div className="relative w-[600px] h-[400px]">
            
            {/* Top Hexagon - Thunderline Dashboard */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="hexagon-module w-48 h-40 bg-gradient-to-br from-blue-900/90 to-purple-900/90 border-2 border-orange-400/60 relative overflow-hidden">
                <div className="absolute inset-2 bg-black/40 flex flex-col justify-center items-center text-center">
                  <div className="text-orange-400 text-xs font-mono font-bold mb-1">Thunderline Dashboard</div>
                  <div className="w-full h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-2 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1 w-full px-2">
                      <div className="h-2 bg-blue-400/60 rounded"></div>
                      <div className="h-3 bg-purple-400/60 rounded"></div>
                      <div className="h-2 bg-blue-400/60 rounded"></div>
                      <div className="h-1 bg-blue-300/40 rounded"></div>
                      <div className="h-2 bg-purple-300/40 rounded"></div>
                      <div className="h-1 bg-blue-300/40 rounded"></div>
                    </div>
                  </div>
                  <div className="text-gray-300 text-xs font-mono">Real-time Intelligence</div>
                </div>
              </div>
            </div>

            {/* Left Hexagon - Thunderblock */}
            <div className="absolute top-24 left-8">
              <div className="hexagon-module w-40 h-32 bg-gradient-to-br from-gray-900/90 to-blue-900/90 border-2 border-orange-400/60 relative overflow-hidden">
                <div className="absolute inset-2 bg-black/40 flex flex-col justify-center items-center text-center">
                  <div className="text-orange-400 text-xs font-mono font-bold mb-2">Thunderblock</div>
                  <div className="grid grid-cols-4 gap-1 w-full px-1 mb-2">
                    <div className="w-full h-3 bg-gray-400/60 rounded-sm"></div>
                    <div className="w-full h-3 bg-gray-400/60 rounded-sm"></div>
                    <div className="w-full h-3 bg-gray-400/60 rounded-sm"></div>
                    <div className="w-full h-3 bg-gray-400/60 rounded-sm"></div>
                    <div className="w-full h-2 bg-gray-300/40 rounded-sm"></div>
                    <div className="w-full h-2 bg-gray-300/40 rounded-sm"></div>
                    <div className="w-full h-2 bg-gray-300/40 rounded-sm"></div>
                    <div className="w-full h-2 bg-gray-300/40 rounded-sm"></div>
                  </div>
                  <div className="text-gray-300 text-xs font-mono">Infrastructure</div>
                </div>
              </div>
            </div>

            {/* Right Hexagon - Thunderbit (Avatar/Profile) */}
            <div className="absolute top-24 right-8">
              <div className="hexagon-module w-40 h-32 bg-gradient-to-br from-purple-900/90 to-blue-900/90 border-2 border-orange-400/60 relative overflow-hidden">
                <div className="absolute inset-2 bg-black/40 flex flex-col justify-center items-center text-center">
                  <div className="text-orange-400 text-xs font-mono font-bold mb-1">Thunderbit</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-2 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full"></div>
                  </div>
                  <div className="text-gray-300 text-xs font-mono">AI Agent</div>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(251, 146, 60)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Top to Left */}
              <line x1="300" y1="80" x2="120" y2="140" stroke="url(#connectionGradient)" strokeWidth="2" />
              {/* Top to Right */}
              <line x1="300" y1="80" x2="480" y2="140" stroke="url(#connectionGradient)" strokeWidth="2" />
              {/* Left to Right */}
              <line x1="160" y1="160" x2="440" y2="160" stroke="url(#connectionGradient)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-left">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-4 sharp-text">About</h3>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              OKO Holding Corporation is building a future where distributed intelligence and autonomous orchestration drive innovation across multiple domains.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-4 sharp-text">Product</h3>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              Our flagship DIOS platform integrates Thunderline for scalable, intelligent cluster management across multiple environments and infrastructures.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-4 sharp-text">Vision</h3>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              We're redefining server and agent autonomy to unleash new possibilities for businesses and communities worldwide.
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white sharp-text mb-8">
            BE PART OF THE EVOLUTION
          </h2>
          <button className="sharp-button px-12 py-4 text-white font-mono font-bold text-lg transition-all duration-200">
            LEARN MORE
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroBanner;