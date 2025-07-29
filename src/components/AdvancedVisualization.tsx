'use client';

import React, { useState } from 'react';
import { Safe3DScene } from './Safe3DScene';
import { WebGLSuperhexScene } from './WebGLSuperhexScene';
import { OKODistributedVisualizer } from './OKODistributedVisualizer';
import { SVGAssets } from './SVGAssets';

interface VisualizationModeProps {
  mode?: 'particles' | 'superhex' | 'distributed' | 'auto';
  autoSwitchInterval?: number;
  className?: string;
}

type VisualizationMode = 'particles' | 'superhex' | 'distributed' | 'auto';

// Visualization mode selector
const VisualizationSelector = ({ 
  currentMode, 
  onModeChange 
}: { 
  currentMode: VisualizationMode;
  onModeChange: (mode: VisualizationMode) => void;
}) => (
  <div className="absolute top-4 right-4 z-50 flex gap-2 bg-gray-900/80 backdrop-blur-sm border border-orange-500/30 rounded-lg p-2">
    {[
      { key: 'particles' as const, label: 'Particles', icon: '✦' },
      { key: 'superhex' as const, label: 'SuperHex', icon: '⬡' },
      { key: 'distributed' as const, label: 'AI Network', icon: '◈' },
      { key: 'auto' as const, label: 'Auto', icon: '↻' }
    ].map(({ key, label, icon }) => (
      <button
        key={key}
        onClick={() => onModeChange(key)}
        className={`px-3 py-2 text-xs font-mono rounded transition-all duration-200 ${
          currentMode === key
            ? 'bg-orange-500 text-white'
            : 'text-orange-400 hover:bg-orange-500/20'
        }`}
      >
        <span className="mr-1">{icon}</span>
        {label}
      </button>
    ))}
  </div>
);

// Auto-switching logic hook
function useAutoMode(interval: number, modes: string[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modes.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [interval, modes.length]);
  
  return modes[currentIndex];
}

// Mode transition component
const ModeTransition = ({ 
  mode, 
  children 
}: { 
  mode: string;
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMode, setCurrentMode] = useState(mode);
  
  React.useEffect(() => {
    if (mode !== currentMode) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMode(mode);
        setIsVisible(true);
      }, 300);
    }
  }, [mode, currentMode]);
  
  return (
    <div 
      className={`w-full h-full transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

// Main advanced visualization component
export const AdvancedVisualization: React.FC<VisualizationModeProps> = ({
  mode = 'auto',
  autoSwitchInterval = 15000,
  className = ""
}) => {
  const [selectedMode, setSelectedMode] = useState(mode);
  
  // Auto-switching between modes
  const visualizationModes = ['particles', 'superhex', 'distributed'];
  const autoMode = useAutoMode(autoSwitchInterval, visualizationModes);
  
  const currentMode = selectedMode === 'auto' ? autoMode : selectedMode;
  
  // Mode descriptions for UI
  const modeDescriptions = {
    particles: "Interactive particle physics with mouse repulsion",
    superhex: "Mathematical hex-of-hex lattice structures", 
    distributed: "AI node network with real-time data flow",
    auto: "Automatic rotation through all visualization modes"
  };

  // Render appropriate visualization
  const renderVisualization = () => {
    const baseProps = { className: "w-full h-full" };
    
    switch (currentMode) {
      case 'superhex':
        return (
          <WebGLSuperhexScene
            {...baseProps}
            superhexRadius={3}
            hexSize={8}
            lineColor="#3B82F6"
            glowColor="#FB9260"
            animated={true}
            interactive={true}
          />
        );
        
      case 'distributed':
        return (
          <OKODistributedVisualizer
            {...baseProps}
            nodeCount={15}
            superhexRadius={3}
            showConnections={true}
            showDataFlow={true}
          />
        );
        
      case 'particles':
      default:
        // Import the original particle scene dynamically
        const Particle3DScene = React.lazy(() => import('./Particle3DScene'));
        return (
          <React.Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800" />}>
            <Particle3DScene
              {...baseProps}
              particleCount={600}
              particleSize={2.5}
              particleColor="#FB9260"
              connectionDistance={40}
              repulsionStrength={25}
              mouseInfluence={50}
            />
          </React.Suspense>
        );
    }
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Safe 3D wrapper */}
      <Safe3DScene>
        <ModeTransition mode={currentMode}>
          {renderVisualization()}
        </ModeTransition>
      </Safe3DScene>
      
      {/* Visualization selector */}
      <VisualizationSelector
        currentMode={selectedMode}
        onModeChange={setSelectedMode}
      />
      
      {/* Mode info overlay */}
      <div className="absolute bottom-4 left-4 z-40 bg-gray-900/80 backdrop-blur-sm border border-orange-500/30 rounded-lg p-3 max-w-xs">
        <div className="flex items-center gap-2 mb-2">
          <SVGAssets.StatusDot status="active" width={12} height={12} />
          <span className="text-orange-400 font-mono text-sm font-bold uppercase">
            {currentMode} MODE
          </span>
        </div>
        <p className="text-gray-300 text-xs font-mono leading-relaxed">
          {modeDescriptions[currentMode as keyof typeof modeDescriptions]}
        </p>
        
        {selectedMode === 'auto' && (
          <div className="mt-2 text-xs text-gray-400 font-mono">
            Auto-switching every {autoSwitchInterval / 1000}s
          </div>
        )}
      </div>
      
      {/* Performance indicator */}
      <div className="absolute top-4 left-4 z-40 bg-gray-900/60 backdrop-blur-sm rounded px-2 py-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-xs font-mono">WebGL Active</span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedVisualization;
