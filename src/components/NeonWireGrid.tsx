'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Extend Three.js with custom materials
extend({ LineBasicMaterial: THREE.LineBasicMaterial });

// Neon Wire Grid Component
const WireGrid = ({ size = 20, divisions = 50 }) => {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const lines = useMemo(() => {
    const lineData: { points: [number, number, number][]; key: string }[] = [];
    const step = size / divisions;
    
    // Horizontal lines
    for (let i = 0; i <= divisions; i++) {
      const y = (i - divisions / 2) * step;
      lineData.push({
        points: [
          [-size / 2, y, 0] as [number, number, number],
          [size / 2, y, 0] as [number, number, number]
        ],
        key: `h-${i}`
      });
    }
    
    // Vertical lines
    for (let i = 0; i <= divisions; i++) {
      const x = (i - divisions / 2) * step;
      lineData.push({
        points: [
          [x, -size / 2, 0] as [number, number, number],
          [x, size / 2, 0] as [number, number, number]
        ],
        key: `v-${i}`
      });
    }
    
    return lineData;
  }, [size, divisions]);

  return (
    <group ref={gridRef}>
      {lines.map(({ points, key }, index) => (
        <Line
          key={key}
          points={points}
          color={`hsl(${180 + Math.sin(index * 0.1) * 60}, 80%, 60%)`}
          lineWidth={0.5}
          transparent
          opacity={0.3 + Math.sin(index * 0.05) * 0.2}
        />
      ))}
    </group>
  );
};

// Floating Neon Cubes
const FloatingCubes = ({ count = 15 }) => {
  const cubesRef = useRef<THREE.Group>(null);
  
  const cubes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.7,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
      speed: 0.5 + Math.random() * 1.5,
      id: i
    }));
  }, [count]);

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.children.forEach((cube, i) => {
        cube.rotation.x += cubes[i].speed * 0.01;
        cube.rotation.y += cubes[i].speed * 0.01;
        cube.position.y += Math.sin(state.clock.elapsedTime * cubes[i].speed + i) * 0.01;
      });
    }
  });

  return (
    <group ref={cubesRef}>
      {cubes.map((cube) => (
        <Box
          key={cube.id}
          position={cube.position}
          rotation={cube.rotation}
          scale={cube.scale}
        >
          <meshBasicMaterial
            color={cube.color}
            wireframe
            transparent
            opacity={0.6}
          />
        </Box>
      ))}
    </group>
  );
};

// Pulsing Network Nodes
const NetworkNodes = ({ count = 8 }) => {
  const nodesRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 8;
      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          (Math.random() - 0.5) * 4
        ] as [number, number, number],
        color: `hsl(${(i / count) * 360}, 90%, 70%)`,
        id: i
      };
    });
  }, [count]);

  const connections = useMemo(() => {
    const lines: { points: [number, number, number][]; key: string }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.6) { // 40% chance of connection
          lines.push({
            points: [nodes[i].position, nodes[j].position],
            key: `${i}-${j}`
          });
        }
      }
    }
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (nodesRef.current) {
      nodesRef.current.children.forEach((node, i) => {
        if (node.type === 'Mesh') {
          const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.3;
          node.scale.setScalar(scale);
        }
      });
    }
  });

  return (
    <group ref={nodesRef}>
      {/* Connection lines */}
      {connections.map(({ points, key }) => (
        <Line
          key={key}
          points={points}
          color="#00ffff"
          lineWidth={1}
          transparent
          opacity={0.4}
        />
      ))}
      
      {/* Nodes */}
      {nodes.map((node) => (
        <Sphere
          key={node.id}
          position={node.position}
          scale={0.2}
        >
          <meshBasicMaterial
            color={node.color}
            transparent
            opacity={0.8}
          />
        </Sphere>
      ))}
    </group>
  );
};

// Data Stream Particles
const DataStreams = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const [particlePositions, setParticlePositions] = useState<Float32Array>();
  const [particleColors, setParticleColors] = useState<Float32Array>();

  useEffect(() => {
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      const hue = Math.random();
      colors[i * 3] = hue;
      colors[i * 3 + 1] = 0.8;
      colors[i * 3 + 2] = 0.9;
    }
    
    setParticlePositions(positions);
    setParticleColors(colors);
  }, []);

  useFrame((state) => {
    if (particlesRef.current && particlePositions) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.01;
        positions[i] += Math.cos(state.clock.elapsedTime * 0.5 + i) * 0.005;
        
        // Reset particles that drift too far
        if (positions[i + 1] > 15) positions[i + 1] = -15;
        if (positions[i + 1] < -15) positions[i + 1] = 15;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  if (!particlePositions || !particleColors) return null;

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={particlePositions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleColors.length / 3}
          array={particleColors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

// Main Scene Component
const NeonScene = () => {
  const { camera } = useThree();
  
  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2;
    camera.position.z = 15 + Math.cos(state.clock.elapsedTime * 0.1) * 3;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />
      
      {/* Main components */}
      <WireGrid size={25} divisions={25} />
      <FloatingCubes count={12} />
      <NetworkNodes count={6} />
      <DataStreams />
      
      {/* Center focal point */}
      <Sphere position={[0, 0, 0]} scale={0.5}>
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.9}
          wireframe
        />
      </Sphere>
    </>
  );
};

// Main Export Component
export const NeonWireGrid: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <NeonScene />
      </Canvas>
      
      {/* Overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 text-cyan-400 font-mono text-sm opacity-70">
          NEON.GRID.ACTIVE
        </div>
        <div className="absolute bottom-4 right-4 text-pink-400 font-mono text-xs opacity-60">
          REAKTOR.ONLINE
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400 opacity-40"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-pink-400 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-pink-400 opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-400 opacity-40"></div>
      </div>
    </div>
  );
};
