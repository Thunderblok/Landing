'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import { NoSSRWrapper } from './NoSSRWrapper';

interface Particle3DSceneProps {
  particleCount?: number;
  particleSize?: number;
  particleColor?: string;
  connectionDistance?: number;
  repulsionStrength?: number;
  mouseInfluence?: number;
  className?: string;
}

// Particle system with physics simulation
function ParticleSystem({ 
  count = 1000, 
  particleSize = 2, 
  particleColor = "#FB9260",
  connectionDistance = 50,
  repulsionStrength = 25,
  mouseInfluence = 50 
}: {
  count: number;
  particleSize: number;
  particleColor: string;
  connectionDistance: number;
  repulsionStrength: number;
  mouseInfluence: number;
}) {
  const mesh = useRef<THREE.Points>(null);
  const lines = useRef<THREE.LineSegments>(null);
  
  // Generate initial particle positions
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Distribute particles in 3D space
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      // Initial velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.5;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
    }
    
    return { positions, velocities };
  }, [count]);

  // Connection lines between nearby particles
  const connectionGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * count * 6); // max connections
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [count]);

  // Physics animation loop with error handling
  useFrame((state) => {
    try {
      if (!mesh.current || !lines.current) return;
      
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.getElapsedTime();
      const mouse = state.mouse;
      
      // Update particle positions with physics
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Apply mouse repulsion
        const mouseX = mouse.x * 50;
        const mouseY = mouse.y * 50;
        const dx = positions[i3] - mouseX;
        const dy = positions[i3 + 1] - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseInfluence) {
          const force = (mouseInfluence - distance) / mouseInfluence;
          particles.velocities[i3] += dx * force * 0.01;
          particles.velocities[i3 + 1] += dy * force * 0.01;
        }
        
        // Apply particle-to-particle repulsion
        for (let j = i + 1; j < count; j++) {
          const j3 = j * 3;
          const dx = positions[i3] - positions[j3];
          const dy = positions[i3 + 1] - positions[j3 + 1];
          const dz = positions[i3 + 2] - positions[j3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < repulsionStrength && distance > 0) {
            const force = (repulsionStrength - distance) / (repulsionStrength * distance);
            particles.velocities[i3] += dx * force * 0.001;
            particles.velocities[i3 + 1] += dy * force * 0.001;
            particles.velocities[i3 + 2] += dz * force * 0.001;
            particles.velocities[j3] -= dx * force * 0.001;
            particles.velocities[j3 + 1] -= dy * force * 0.001;
            particles.velocities[j3 + 2] -= dz * force * 0.001;
          }
        }
        
        // Add subtle orbital motion
        positions[i3] += particles.velocities[i3] + Math.sin(time + i * 0.1) * 0.1;
        positions[i3 + 1] += particles.velocities[i3 + 1] + Math.cos(time + i * 0.15) * 0.1;
        positions[i3 + 2] += particles.velocities[i3 + 2] + Math.sin(time * 0.5 + i * 0.05) * 0.05;
        
        // Apply damping
        particles.velocities[i3] *= 0.98;
        particles.velocities[i3 + 1] *= 0.98;
        particles.velocities[i3 + 2] *= 0.98;
        
        // Boundary constraints
        const boundary = 80;
        if (Math.abs(positions[i3]) > boundary) particles.velocities[i3] *= -0.5;
        if (Math.abs(positions[i3 + 1]) > boundary) particles.velocities[i3 + 1] *= -0.5;
        if (Math.abs(positions[i3 + 2]) > 25) particles.velocities[i3 + 2] *= -0.5;
      }
      
      // Update connection lines
      const linePositions = lines.current.geometry.attributes.position.array as Float32Array;
      let lineIndex = 0;
      
      for (let i = 0; i < count && lineIndex < linePositions.length - 6; i++) {
        for (let j = i + 1; j < count && lineIndex < linePositions.length - 6; j++) {
          const i3 = i * 3;
          const j3 = j * 3;
          const dx = positions[i3] - positions[j3];
          const dy = positions[i3 + 1] - positions[j3 + 1];
          const dz = positions[i3 + 2] - positions[j3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < connectionDistance) {
            linePositions[lineIndex] = positions[i3];
            linePositions[lineIndex + 1] = positions[i3 + 1];
            linePositions[lineIndex + 2] = positions[i3 + 2];
            linePositions[lineIndex + 3] = positions[j3];
            linePositions[lineIndex + 4] = positions[j3 + 1];
            linePositions[lineIndex + 5] = positions[j3 + 2];
            lineIndex += 6;
          }
        }
      }
      
      // Fill remaining positions with zeros
      for (let i = lineIndex; i < linePositions.length; i += 6) {
        linePositions[i] = 0;
        linePositions[i + 1] = 0;
        linePositions[i + 2] = 0;
        linePositions[i + 3] = 0;
        linePositions[i + 4] = 0;
        linePositions[i + 5] = 0;
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
      lines.current.geometry.attributes.position.needsUpdate = true;
    } catch (error) {
      console.warn('3D animation frame error:', error);
    }
  });

  return (
    <>
      <Points ref={mesh} positions={particles.positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={particleColor}
          size={particleSize}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      <lineSegments ref={lines} geometry={connectionGeometry}>
        <lineBasicMaterial attach="material" color={particleColor} opacity={0.2} transparent />
      </lineSegments>
    </>
  );
}

// Floating hexagonal elements
function FloatingHexagons() {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => (
        <Float
          key={i}
          speed={1 + Math.random() * 2}
          rotationIntensity={0.5 + Math.random()}
          floatIntensity={0.5 + Math.random()}
          position={[
            (Math.random() - 0.5) * 120,
            (Math.random() - 0.5) * 80,
            (Math.random() - 0.5) * 40
          ]}
        >
          <mesh>
            <cylinderGeometry args={[8, 8, 2, 6]} />
            <meshBasicMaterial 
              color="#FB9260" 
              transparent 
              opacity={0.1} 
              wireframe 
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// Main 3D Scene Component with enhanced SSR protection
export const Particle3DScene: React.FC<Particle3DSceneProps> = ({
  particleCount = 800,
  particleSize = 2,
  particleColor = "#FB9260",
  connectionDistance = 35,
  repulsionStrength = 20,
  mouseInfluence = 40,
  className = ""
}) => {
  // Fallback component for SSR and WebGL issues
  const Fallback = () => (
    <div className={`w-full h-full bg-gradient-to-b from-slate-900/50 to-slate-800/50 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 cyberpunk-grid opacity-20 animate-pulse-slow"></div>
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-4 right-4 text-orange-400/60 text-xs font-mono animate-pulse">
        3D Particles Loading...
      </div>
    </div>
  );

  // The actual 3D Canvas component - only renders client-side
  const ThreeDCanvas = () => {
    const [webglSupported, setWebglSupported] = React.useState<boolean | null>(null);

    useEffect(() => {
      // Check WebGL support on client side only
      try {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setWebglSupported(!!(context && (context as WebGLRenderingContext).getExtension));
      } catch (e) {
        setWebglSupported(false);
      }
    }, []);

    // Show fallback if WebGL is not supported
    if (webglSupported === false) {
      return <Fallback />;
    }

    // Show loading during WebGL check
    if (webglSupported === null) {
      return <Fallback />;
    }

    try {
      return (
        <div className={`w-full h-full ${className}`}>
          <Canvas
            camera={{ position: [0, 0, 80], fov: 60 }}
            gl={{ 
              alpha: true, 
              antialias: true,
              powerPreference: "high-performance"
            }}
            style={{ background: 'transparent' }}
            onCreated={({ gl }) => {
              // Additional WebGL context setup if needed
              gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }}
            dpr={[1, 2]}
            frameloop="demand" // React 18 optimization - only render when needed
            legacy={false} // Ensure React 18 concurrent features are used properly
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            
            <ParticleSystem
              count={particleCount}
              particleSize={particleSize}
              particleColor={particleColor}
              connectionDistance={connectionDistance}
              repulsionStrength={repulsionStrength}
              mouseInfluence={mouseInfluence}
            />
            
            <FloatingHexagons />
          </Canvas>
        </div>
      );
    } catch (error) {
      console.warn('Failed to render 3D scene:', error);
      return <Fallback />;
    }
  };

  // Wrap the entire component in NoSSRWrapper to prevent any SSR issues
  return (
    <NoSSRWrapper fallback={<Fallback />}>
      <ThreeDCanvas />
    </NoSSRWrapper>
  );
};

export default Particle3DScene;
