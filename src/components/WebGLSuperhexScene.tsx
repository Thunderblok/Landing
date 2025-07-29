'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface SuperHexGridProps {
  superhexRadius?: number;
  hexSize?: number;
  lineColor?: string;
  glowColor?: string;
  animated?: boolean;
  interactive?: boolean;
  className?: string;
}

// Single hex geometry generator
function hexCorners(cx: number, cy: number, size: number): THREE.Vector3[] {
  const corners: THREE.Vector3[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 3 * i;
    corners.push(new THREE.Vector3(
      cx + size * Math.cos(angle),
      cy + size * Math.sin(angle),
      0
    ));
  }
  return corners;
}

// Generate superhex coordinates using axial coordinate system
function generateSuperhexCoords(radius: number): Array<{ q: number; r: number; x: number; y: number }> {
  const coords = [];
  for (let q = -radius; q <= radius; q++) {
    for (let r = Math.max(-radius, -q - radius); r <= Math.min(radius, -q + radius); r++) {
      const x = q * 3/2;
      const y = Math.sqrt(3) * (r + q/2);
      coords.push({ q, r, x, y });
    }
  }
  return coords;
}

// Individual hex component with animation and interaction
function AnimatedHex({ 
  position, 
  size, 
  color, 
  glowColor, 
  delay = 0,
  interactive = false 
}: { 
  position: [number, number, number];
  size: number;
  color: string;
  glowColor: string;
  delay?: number;
  interactive?: boolean;
}) {
  const meshRef = useRef<THREE.LineLoop>(null);
  const glowRef = useRef<THREE.LineLoop>(null);
  const [hovered, setHovered] = React.useState(false);
  
  // Generate hex geometry
  const geometry = useMemo(() => {
    const corners = hexCorners(0, 0, size);
    return new THREE.BufferGeometry().setFromPoints(corners);
  }, [size]);

  // Animation loop
  useFrame((state) => {
    if (!meshRef.current || !glowRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Pulse animation
    const pulse = 0.8 + 0.2 * Math.sin(time * 2 + delay);
    meshRef.current.scale.setScalar(pulse);
    
    // Glow animation
    const glowIntensity = hovered ? 1.5 : (0.3 + 0.7 * Math.sin(time * 0.5 + delay));
    if (glowRef.current.material instanceof THREE.LineBasicMaterial) {
      glowRef.current.material.opacity = glowIntensity * 0.6;
    }
    
    // Rotation for visual interest
    meshRef.current.rotation.z = Math.sin(time * 0.3 + delay) * 0.1;
  });

  return (
    <group position={position}>
      {/* Main hex line */}
      <lineLoop
        ref={meshRef}
        geometry={geometry}
        onPointerOver={() => interactive && setHovered(true)}
        onPointerOut={() => interactive && setHovered(false)}
      >
        <lineBasicMaterial 
          color={hovered ? glowColor : color} 
          linewidth={hovered ? 3 : 2}
          transparent
          opacity={0.9}
        />
      </lineLoop>
      
      {/* Glow effect */}
      <lineLoop ref={glowRef} geometry={geometry}>
        <lineBasicMaterial 
          color={glowColor} 
          linewidth={6}
          transparent
          opacity={0.3}
        />
      </lineLoop>
    </group>
  );
}

// Main superhex grid component
function SuperHexGrid({ 
  superhexRadius = 3,
  hexSize = 8,
  lineColor = "#3B82F6",
  glowColor = "#FB9260",
  animated = true,
  interactive = true
}: SuperHexGridProps) {
  const { camera } = useThree();
  
  // Generate all hex positions for the superhex
  const hexPositions = useMemo(() => {
    return generateSuperhexCoords(superhexRadius).map((coord, index) => ({
      position: [coord.x * hexSize, coord.y * hexSize, 0] as [number, number, number],
      delay: index * 0.1,
      q: coord.q,
      r: coord.r
    }));
  }, [superhexRadius, hexSize]);

  // Set up camera for optimal viewing
  useEffect(() => {
    const gridSize = superhexRadius * hexSize * 3;
    camera.position.set(0, 0, gridSize * 1.5);
    camera.lookAt(0, 0, 0);
  }, [camera, superhexRadius, hexSize]);

  return (
    <group>
      {/* Background particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(
              Array.from({ length: 100 }, () => [
                (Math.random() - 0.5) * 200,
                (Math.random() - 0.5) * 200,
                (Math.random() - 0.5) * 100
              ]).flat()
            )}
            count={100}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          color={glowColor} 
          size={1}
          transparent
          opacity={0.4}
        />
      </points>

      {/* Render all hexes in the superhex pattern */}
      {hexPositions.map((hex, index) => (
        <AnimatedHex
          key={`${hex.q}-${hex.r}`}
          position={hex.position}
          size={hexSize}
          color={lineColor}
          glowColor={glowColor}
          delay={hex.delay}
          interactive={interactive}
        />
      ))}

      {/* Central highlight hex */}
      <AnimatedHex
        position={[0, 0, 1]}
        size={hexSize * 1.2}
        color={glowColor}
        glowColor={lineColor}
        delay={0}
        interactive={interactive}
      />
    </group>
  );
}

// AI Agent Nodes (for showing distributed intelligence)
function AIAgentNodes({ count = 5, radius = 50 }: { count?: number; radius?: number }) {
  const nodesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!nodesRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Orbital motion for AI agents
    nodesRef.current.children.forEach((child, index) => {
      const angle = (time * 0.5) + (index * Math.PI * 2 / count);
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = Math.sin(time + index) * 10;
      
      child.position.set(x, y, z);
      child.rotation.z = angle;
    });
  });

  return (
    <group ref={nodesRef}>
      {Array.from({ length: count }, (_, i) => (
        <group key={i}>
          <mesh>
            <octahedronGeometry args={[3]} />
            <meshBasicMaterial 
              color="#FB9260" 
              transparent 
              opacity={0.8}
              wireframe
            />
          </mesh>
          
          {/* Agent connection lines */}
          <lineSegments>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={new Float32Array([
                  0, 0, 0,
                  0, 0, 0
                ])}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial 
              color="#3B82F6" 
              transparent 
              opacity={0.6}
            />
          </lineSegments>
        </group>
      ))}
    </group>
  );
}

// Main WebGL Superhex Scene
export const WebGLSuperhexScene: React.FC<SuperHexGridProps> = (props) => {
  return (
    <div className={`w-full h-full ${props.className || ''}`}>
      <Canvas
        camera={{ position: [0, 0, 150], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[50, 50, 50]} intensity={0.8} color="#FB9260" />
        <pointLight position={[-50, -50, 50]} intensity={0.6} color="#3B82F6" />
        
        {/* Main superhex grid */}
        <SuperHexGrid {...props} />
        
        {/* AI Agent visualization */}
        <AIAgentNodes count={6} radius={60} />
        
        {/* Background hex layers for depth */}
        <group position={[0, 0, -20]} scale={[1.5, 1.5, 1]}>
          <SuperHexGrid 
            superhexRadius={2}
            hexSize={12}
            lineColor="#1E293B"
            glowColor="#334155"
            animated={false}
            interactive={false}
          />
        </group>
        
        <group position={[0, 0, -40]} scale={[2, 2, 1]}>
          <SuperHexGrid 
            superhexRadius={1}
            hexSize={16}
            lineColor="#0F172A"
            glowColor="#1E293B"
            animated={false}
            interactive={false}
          />
        </group>
      </Canvas>
    </div>
  );
};

export default WebGLSuperhexScene;
