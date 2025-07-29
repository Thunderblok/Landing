import React, { useState, useEffect } from 'react';
import { SVGAssets } from './SVGAssets';

interface LiveViewModuleProps {
  title: string;
  type: 'dashboard' | 'metrics' | 'network' | 'status';
  data?: any;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  updateInterval?: number;
}

// Real-time Dashboard Module
export const LiveDashboard: React.FC<LiveViewModuleProps> = ({
  title = "Live Dashboard",
  type = "dashboard",
  size = "medium",
  updateInterval = 2000,
  className = ""
}) => {
  // Initialize with fixed values to prevent hydration mismatch
  const [liveData, setLiveData] = useState({
    throughput: 750,  // Fixed initial values
    connections: 250,
    latency: 45,
    uptime: 99.9
  });

  const [isActive, setIsActive] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Ensure client-side only randomization
  useEffect(() => {
    setMounted(true);
    // Initialize with random values only on client side
    setLiveData({
      throughput: Math.floor(Math.random() * 1000),
      connections: Math.floor(Math.random() * 500),
      latency: Math.floor(Math.random() * 100),
      uptime: 99.8 + Math.random() * 0.2
    });
  }, []);

  // Simulate live data updates
  useEffect(() => {
    if (!isActive || !mounted) return;
    
    const interval = setInterval(() => {
      setLiveData(prev => ({
        throughput: Math.max(0, prev.throughput + (Math.random() - 0.5) * 50),
        connections: Math.max(0, prev.connections + (Math.random() - 0.5) * 25),
        latency: Math.max(1, prev.latency + (Math.random() - 0.5) * 10),
        uptime: Math.min(100, Math.max(95, prev.uptime + (Math.random() - 0.5) * 0.1))
      }));
    }, updateInterval);

    return () => clearInterval(interval);
  }, [isActive, updateInterval, mounted]);

  const sizeClasses = {
    small: "w-48 h-32",
    medium: "w-64 h-40",
    large: "w-80 h-48"
  };

  return (
    <div 
      className={`${sizeClasses[size]} bg-gray-900/80 backdrop-blur-sm border border-orange-500/30 rounded-lg p-4 ${className}`}
      style={{
        boxShadow: '0 0 20px rgba(251, 146, 96, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-orange-400 font-mono text-sm font-medium">{title}</h3>
        <div className="flex items-center gap-2">
          <SVGAssets.StatusDot 
            status={isActive ? 'active' : 'inactive'} 
            className="animate-pulse" 
          />
          <button
            onClick={() => setIsActive(!isActive)}
            className="text-gray-400 hover:text-orange-400 transition-colors"
          >
            {isActive ? '⏸' : '▶'}
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      {type === 'dashboard' && (
        <div className="grid grid-cols-2 gap-3 h-full">
          <div className="flex flex-col items-center">
            <SVGAssets.ProgressRing 
              progress={Math.floor(liveData.uptime)} 
              color="#22C55E"
              width={60}
              height={60}
            />
            <span className="text-xs text-gray-400 mt-1">Uptime</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <SVGAssets.DataBar height={24} fillPercent={liveData.throughput / 10} />
              <span className="text-xs text-blue-400">{Math.floor(liveData.throughput)}/s</span>
            </div>
            <div className="flex items-center gap-2">
              <SVGAssets.DataBar height={24} fillPercent={liveData.connections / 5} color="#9333EA" />
              <span className="text-xs text-purple-400">{Math.floor(liveData.connections)}</span>
            </div>
          </div>
        </div>
      )}

      {type === 'metrics' && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Throughput</span>
            <span className="text-sm text-blue-400 font-mono">{Math.floor(liveData.throughput)}/s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Latency</span>
            <span className="text-sm text-green-400 font-mono">{Math.floor(liveData.latency)}ms</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Connections</span>
            <span className="text-sm text-purple-400 font-mono">{Math.floor(liveData.connections)}</span>
          </div>
        </div>
      )}

      {type === 'network' && (
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            <SVGAssets.OKOHex width={48} height={48} className="animate-pulse" />
            <div className="absolute -top-2 -right-2">
              <SVGAssets.ParticleHex width={12} height={12} className="animate-bounce" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <SVGAssets.NodeConnector width={16} height={16} className="animate-spin" />
            </div>
          </div>
        </div>
      )}

      {type === 'status' && (
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <SVGAssets.StatusDot status="active" />
            <span className="text-gray-400">Core</span>
          </div>
          <div className="flex items-center gap-2">
            <SVGAssets.StatusDot status="active" />
            <span className="text-gray-400">API</span>
          </div>
          <div className="flex items-center gap-2">
            <SVGAssets.StatusDot status="warning" />
            <span className="text-gray-400">Cache</span>
          </div>
          <div className="flex items-center gap-2">
            <SVGAssets.StatusDot status="active" />
            <span className="text-gray-400">DB</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Interactive Hex Module with Parallax
interface HexModuleProps {
  product: 'oko' | 'thunderline' | 'thunderblock' | 'thunderbit';
  title: string;
  description: string;
  features: string[];
  className?: string;
  depth?: number;
}

export const InteractiveHexModule: React.FC<HexModuleProps> = ({
  product,
  title,
  description,
  features,
  className = "",
  depth = 1
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height
    });
  };

  const productComponents = {
    oko: SVGAssets.OKOHex,
    thunderline: SVGAssets.ThunderlineHex,
    thunderblock: SVGAssets.ThunderblockHex,
    thunderbit: SVGAssets.ThunderbitHex
  };

  const ProductHex = productComponents[product];

  const parallaxTransform = `
    perspective(1000px) 
    rotateX(${mousePosition.y * depth * 5}deg) 
    rotateY(${mousePosition.x * depth * 5}deg) 
    translateZ(${isHovered ? depth * 10 : 0}px)
  `;

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 ${className}`}
      style={{ transform: parallaxTransform }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Main Module */}
      <div 
        className="bg-gray-900/90 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6 transition-all duration-300"
        style={{
          boxShadow: isHovered 
            ? '0 20px 40px rgba(251, 146, 96, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
            : '0 10px 20px rgba(251, 146, 96, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
          background: isHovered
            ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)'
            : 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)'
        }}
      >
        {/* Header with Product Icon */}
        <div className="flex items-center gap-4 mb-4">
          <div className={`transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
            <ProductHex width={48} height={48} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-400 font-mono">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-sm text-gray-300"
              style={{ 
                transform: isHovered 
                  ? `translateX(${index * 2}px) translateY(${-index}px)` 
                  : 'none',
                transition: `transform 0.3s ease ${index * 0.1}s`
              }}
            >
              <SVGAssets.DataFlowArrow width={16} height={8} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-2 right-2">
              <SVGAssets.ParticleHex className="animate-pulse" />
            </div>
            <div className="absolute bottom-2 left-2">
              <SVGAssets.NodeConnector className="animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Floating Particles */}
      {/* Client-only hover particles to prevent hydration mismatch */}
      {isHovered && mounted && (
        <div className="absolute -inset-4 pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + Math.random()}s`
              }}
            >
              <SVGAssets.ParticleHex width={6} height={6} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const LiveViewComponents = {
  LiveDashboard,
  InteractiveHexModule
};

export default LiveViewComponents;
