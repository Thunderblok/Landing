'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { SVGAssets } from './SVGAssets';
import { LiveViewComponents } from './LiveViewComponents';
import { SafeDynamicParticle3DScene } from './DynamicThreeComponents';

const HeroBanner: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Client-only floating particles to prevent hydration mismatch
  const FloatingParticles = () => {
    if (!mounted) return null; // Prevent SSR rendering
    
    return (
      <div className="absolute inset-0 pointer-events-none z-5">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-particle-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <SVGAssets.ParticleHex 
              width={4 + Math.random() * 8} 
              height={4 + Math.random() * 8} 
              color={Math.random() > 0.5 ? "#FB9260" : "#3B82F6"}
            />
          </div>
        ))}
      </div>
    );
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Safe 3D Background Scene with Enhanced SSR Protection */}
      <div className="absolute inset-0 z-0">
        <SafeDynamicParticle3DScene 
          particleCount={600}
          particleSize={2.5}
          particleColor="#FB9260"
          connectionDistance={40}
          repulsionStrength={25}
          mouseInfluence={50}
        />
      </div>

      {/* CSS 3D Grid Overlay - Always present as fallback */}
      <div className="absolute inset-0 z-1 cyberpunk-grid opacity-10"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-16 md:pt-20">
        
        {/* Live Dashboard Modules - Top Row with better spacing */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 hidden lg:block">
          <LiveViewComponents.LiveDashboard
            title="Network Status"
            type="dashboard"
            size="small"
            updateInterval={1500}
          />
        </div>
        
        <div className="absolute top-4 right-4 md:top-8 md:right-8 hidden lg:block">
          <LiveViewComponents.LiveDashboard
            title="Live Metrics"
            type="metrics"
            size="small"
            updateInterval={2000}
          />
        </div>

        {/* Hero Content with proper spacing */}
        <div className="space-y-8 mt-8 md:mt-12">
          
          {/* Logo and Brand - with better spacing from top */}
          <div className="flex items-center justify-center gap-4 mb-8 mt-8">
            <div className="animate-float">
              <SVGAssets.OKOHex width={80} height={80} className="drop-shadow-lg" />
            </div>
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white font-mono tracking-tight leading-tight">
                OKO
                <span className="text-orange-400 glitch-text" data-text="HOLDING">HOLDING</span>
              </h1>
              <p className="text-xl text-orange-300 font-mono tracking-wider">CORP</p>
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl text-gray-200 font-light leading-relaxed mb-6">
              The future of <span className="text-orange-400 font-mono">decentralized infrastructure</span>
              <br />
              Building tomorrow's digital backbone
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Advanced blockchain architecture, AI-driven automation, and quantum-ready security 
              protocols powering the next generation of digital ecosystems.
            </p>
          </div>

          {/* Product Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
            
            <LiveViewComponents.InteractiveHexModule
              product="oko"
              title="OKO CORE"
              description="Foundational Infrastructure"
              features={[
                "Quantum-Ready Security",
                "Multi-Chain Architecture", 
                "AI Governance Protocol"
              ]}
              depth={1}
            />

            <LiveViewComponents.InteractiveHexModule
              product="thunderline"
              title="THUNDERLINE"
              description="High-Speed Network Layer"
              features={[
                "Lightning Transactions",
                "Zero-Knowledge Proofs",
                "Parallel Processing"
              ]}
              depth={1.2}
            />

            <LiveViewComponents.InteractiveHexModule
              product="thunderblock"
              title="THUNDERBLOCK"
              description="Advanced Storage Matrix"
              features={[
                "Distributed Storage",
                "Auto-Scaling Nodes",
                "Data Redundancy"
              ]}
              depth={0.8}
            />

            <LiveViewComponents.InteractiveHexModule
              product="thunderbit"
              title="THUNDERBIT"
              description="Micro-Transaction Engine"
              features={[
                "Instant Settlements",
                "Atomic Swaps",
                "Fee Optimization"
              ]}
              depth={1.1}
            />

          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button className="hex-button group">
              <span className="relative z-10">Enter the Network</span>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <SVGAssets.DataFlowArrow width={20} height={10} />
              </div>
            </button>
            
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 border border-orange-400/50 text-orange-300 font-mono hover:bg-orange-400/10 transition-all duration-300 rounded">
                View Documentation
              </button>
              <div className="animate-pulse-glow">
                <SVGAssets.StatusDot status="active" width={16} height={16} />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Dashboard Modules */}
      <div className="absolute bottom-8 left-8 hidden xl:block">
        <LiveViewComponents.LiveDashboard
          title="System Status"
          type="status"
          size="medium"
          updateInterval={3000}
        />
      </div>

      <div className="absolute bottom-8 right-8 hidden xl:block">
        <LiveViewComponents.LiveDashboard
          title="Network Graph"
          type="network"
          size="medium"
          updateInterval={2500}
        />
      </div>

      {/* Client-Only Floating Particles */}
      <FloatingParticles />

    </section>
  );
};

export default HeroBanner;