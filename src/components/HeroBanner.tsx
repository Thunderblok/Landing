import React from 'react';
import ThunderbitHex from './ThunderbitHex';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-blue-900/10" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-60" style={{animationDelay: '6s'}}></div>
      </div>
      
      {/* Central Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        
        {/* Enhanced Main Title */}
        <h1 className="text-7xl md:text-9xl font-black mb-6 text-center leading-none">
          <span className="text-orange-400 drop-shadow-2xl" style={{
            textShadow: '0 0 30px rgba(251, 146, 60, 0.5), 0 0 60px rgba(251, 146, 60, 0.3)'
          }}>Distributed</span>
          <br />
          <span className="text-white drop-shadow-2xl" style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
          }}>Intelligent</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 drop-shadow-2xl">
            Operating System
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-12 font-mono max-w-3xl mx-auto leading-relaxed text-center">
          Powering <span className="text-orange-400 font-bold">real-time cluster orchestration</span> and 
          <span className="text-blue-400 font-bold"> AI-driven autonomy</span> with Thunderline.
        </div>
        
        {/* Premium Hexagonal Module Layout */}
        <div className="relative flex justify-center my-20">
          <div className="relative w-[700px] h-[450px]">
            
            {/* Top Hexagon - Thunderline Dashboard */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="hexagon-module w-56 h-44 relative overflow-hidden">
                <div className="absolute inset-4 flex flex-col justify-center items-center text-center z-10">
                  <div className="text-orange-400 text-sm font-mono font-bold mb-2 tracking-wider">THUNDERLINE DASHBOARD</div>
                  
                  {/* Real-time Dashboard */}
                  <div className="w-full h-20 bg-gradient-to-b from-slate-900/60 to-slate-800/40 rounded-sm mb-2 p-2 border border-blue-500/20">
                    <div className="dashboard-grid h-full">
                      <div className="dashboard-bar h-6"></div>
                      <div className="dashboard-bar h-8"></div>
                      <div className="dashboard-bar h-4"></div>
                      <div className="dashboard-bar h-7"></div>
                      <div className="dashboard-bar h-3"></div>
                      <div className="dashboard-bar h-6"></div>
                      <div className="dashboard-bar h-5"></div>
                      <div className="dashboard-bar h-8"></div>
                      <div className="dashboard-bar h-4"></div>
                      <div className="dashboard-bar h-7"></div>
                      <div className="dashboard-bar h-6"></div>
                      <div className="dashboard-bar h-5"></div>
                    </div>
                  </div>
                  
                  <div className="text-gray-300 text-xs font-mono">Real-time Intelligence</div>
                  <div className="text-orange-300 text-xs font-mono font-bold">99.9% UPTIME</div>
                </div>
              </div>
            </div>

            {/* Left Hexagon - Thunderblock Infrastructure */}
            <div className="absolute top-28 left-12">
              <div className="hexagon-module w-48 h-36 relative overflow-hidden">
                <div className="absolute inset-4 flex flex-col justify-center items-center text-center z-10">
                  <div className="text-orange-400 text-sm font-mono font-bold mb-2 tracking-wider">THUNDERBLOCK</div>
                  
                  {/* Server Grid */}
                  <div className="w-full h-16 bg-gradient-to-b from-slate-900/60 to-slate-800/40 rounded-sm mb-2 p-2 border border-green-500/20">
                    <div className="server-grid h-full">
                      <div className="server-block h-2 active"></div>
                      <div className="server-block h-2 active"></div>
                      <div className="server-block h-2"></div>
                      <div className="server-block h-2 active"></div>
                      <div className="server-block h-2 active"></div>
                      <div className="server-block h-2 active"></div>
                      <div className="server-block h-2 active"></div>
                      <div className="server-block h-2"></div>
                      <div className="server-block h-2 active"></div>
                      <div className="server-block h-2"></div>
                      <div className="server-block h-2 active"></div>
                      <div className="server-block h-2 active"></div>
                    </div>
                  </div>
                  
                  <div className="text-gray-300 text-xs font-mono">Infrastructure</div>
                  <div className="text-green-300 text-xs font-mono font-bold">92% ACTIVE</div>
                </div>
              </div>
            </div>

            {/* Right Hexagon - Thunderbit AI Agent */}
            <div className="absolute top-28 right-12">
              <div className="hexagon-module w-48 h-36 relative overflow-hidden">
                <div className="absolute inset-4 flex flex-col justify-center items-center text-center z-10">
                  <div className="text-orange-400 text-sm font-mono font-bold mb-2 tracking-wider">THUNDERBIT</div>
                  
                  {/* AI Avatar */}
                  <div className="ai-avatar mb-2"></div>
                  
                  <div className="text-gray-300 text-xs font-mono mb-1">AI Agent</div>
                  <div className="text-blue-300 text-xs font-mono font-bold">LEARNING</div>
                  
                  {/* Status Indicators */}
                  <div className="flex space-x-1 mt-1">
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(251, 146, 60)" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Top to Left */}
              <line x1="350" y1="88" x2="160" y2="160" stroke="url(#connectionGradient)" className="connection-line" filter="url(#glow)" />
              {/* Top to Right */}
              <line x1="350" y1="88" x2="540" y2="160" stroke="url(#connectionGradient)" className="connection-line" filter="url(#glow)" />
              {/* Left to Right */}
              <line x1="200" y1="180" x2="500" y2="180" stroke="url(#connectionGradient)" className="connection-line" filter="url(#glow)" />
            </svg>

            {/* Floating Data Points */}
            <div className="absolute top-16 left-32 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-40 right-24 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
        
        {/* Enhanced Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-left">
          <div className="beveled-card p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-orange-400 mb-6 sharp-text">About</h3>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              OKO Holding Corporation is building a future where <span className="text-blue-400 font-bold">distributed intelligence</span> and 
              <span className="text-orange-400 font-bold"> autonomous orchestration</span> drive innovation across multiple domains.
            </p>
            <div className="mt-4 text-xs font-mono text-orange-300 font-bold">NEXT-GEN INFRASTRUCTURE</div>
          </div>
          
          <div className="beveled-card p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-orange-400 mb-6 sharp-text">Product</h3>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              Our flagship <span className="text-purple-400 font-bold">DIOS platform</span> integrates Thunderline for 
              <span className="text-blue-400 font-bold"> scalable, intelligent cluster management</span> across multiple environments and infrastructures.
            </p>
            <div className="mt-4 text-xs font-mono text-blue-300 font-bold">ENTERPRISE READY</div>
          </div>
          
          <div className="beveled-card p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-orange-400 mb-6 sharp-text">Vision</h3>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              We're redefining <span className="text-green-400 font-bold">server and agent autonomy</span> to unleash 
              <span className="text-purple-400 font-bold">new possibilities</span> for businesses and communities worldwide.
            </p>
            <div className="mt-4 text-xs font-mono text-purple-300 font-bold">GLOBAL IMPACT</div>
          </div>
        </div>
        
        {/* Epic Call to Action */}
        <div className="mt-24 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white sharp-text mb-8" style={{
            textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
          }}>
            BE PART OF THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">EVOLUTION</span>
          </h2>
          <button className="sharp-button px-16 py-6 text-white font-mono font-bold text-xl transition-all duration-300 hover:transform hover:scale-110">
            LEARN MORE →
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroBanner;