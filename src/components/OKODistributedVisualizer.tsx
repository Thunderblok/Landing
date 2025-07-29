'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface OKODistributedVisualizerProps {
  nodeCount?: number;
  superhexRadius?: number;
  showConnections?: boolean;
  showDataFlow?: boolean;
  className?: string;
}

// Data flow particle system
function DataFlowParticles({ paths }: { paths: THREE.Vector3[][] }) {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 200;
  
  const { positions, velocities, pathIndices } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const pathIndices = new Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const pathIndex = Math.floor(Math.random() * paths.length);
      const path = paths[pathIndex];
      const point = path[0];
      
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
      
      pathIndices[i] = { pathIndex, progress: Math.random() };
    }
    
    return { positions, velocities, pathIndices };
  }, [paths, particleCount]);

  useFrame(() => {
    if (!particlesRef.current || paths.length === 0) return;
    
    const positionAttribute = particlesRef.current.geometry.attributes.position;
    const array = positionAttribute.array as Float32Array;
    
    for (let i = 0; i < particleCount; i++) {
      const pathData = pathIndices[i];
      const path = paths[pathData.pathIndex];
      
      if (path && path.length > 1) {
        pathData.progress += 0.01;
        if (pathData.progress >= 1) {
          pathData.progress = 0;
          pathData.pathIndex = Math.floor(Math.random() * paths.length);
        }
        
        const segmentIndex = Math.floor(pathData.progress * (path.length - 1));
        const localProgress = (pathData.progress * (path.length - 1)) % 1;
        
        const start = path[segmentIndex];
        const end = path[Math.min(segmentIndex + 1, path.length - 1)];
        
        array[i * 3] = start.x + (end.x - start.x) * localProgress;
        array[i * 3 + 1] = start.y + (end.y - start.y) * localProgress;
        array[i * 3 + 2] = start.z + (end.z - start.z) * localProgress;
      }
    }
    
    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FB9260"
        size={2}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Neural network style connections
function NeuralConnections({ nodes }: { nodes: THREE.Vector3[] }) {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const geometry = useMemo(() => {
    const positions = [];
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);
        if (distance < 50 && Math.random() > 0.7) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }, [nodes]);

  useFrame((state) => {
    if (!linesRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const material = linesRef.current.material as THREE.LineBasicMaterial;
    material.opacity = 0.3 + 0.2 * Math.sin(time * 2);
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial
        color="#3B82F6"
        transparent
        opacity={0.3}
      />
    </lineSegments>
  );
}

// Distributed AI Node
function AINode({ 
  position, 
  type = 'core',
  active = true,
  processingLoad = 0.5 
}: { 
  position: THREE.Vector3;
  type?: 'core' | 'worker' | 'coordinator';
  active?: boolean;
  processingLoad?: number;
}) {
  const nodeRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = React.useState(false);
  
  const nodeColor = {
    core: "#FB9260",
    worker: "#3B82F6", 
    coordinator: "#22C55E"
  }[type];

  useFrame((state) => {
    if (!nodeRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Processing animation
    const scale = 1 + (processingLoad * 0.3 * Math.sin(time * 4));
    nodeRef.current.scale.setScalar(scale);
    
    // Rotation based on processing load
    nodeRef.current.rotation.y = time * processingLoad;
    nodeRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <group 
      ref={nodeRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main node geometry */}
      <mesh>
        <octahedronGeometry args={[type === 'core' ? 6 : 4]} />
        <meshBasicMaterial
          color={hovered ? "#FFFFFF" : nodeColor}
          transparent
          opacity={active ? 0.9 : 0.4}
          wireframe={!active}
        />
      </mesh>
      
      {/* Processing ring */}
      {active && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[type === 'core' ? 8 : 6, type === 'core' ? 10 : 8, 32]} />
          <meshBasicMaterial
            color={nodeColor}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
      
      {/* Data streams */}
      {processingLoad > 0.7 && (
        <>
          {Array.from({ length: 6 }, (_, i) => (
            <group key={i} rotation={[0, 0, (Math.PI * 2 * i) / 6]}>
              <mesh position={[12, 0, 0]}>
                <sphereGeometry args={[1]} />
                <meshBasicMaterial
                  color={nodeColor}
                  transparent
                  opacity={0.6}
                />
              </mesh>
            </group>
          ))}
        </>
      )}
    </group>
  );
}

// Main OKO Distributed System Visualizer
export const OKODistributedVisualizer: React.FC<OKODistributedVisualizerProps> = ({
  nodeCount = 12,
  superhexRadius = 3,
  showConnections = true,
  showDataFlow = true,
  className = ""
}) => {
  // Generate node positions in a distributed pattern
  const nodes = useMemo(() => {
    const nodePositions: THREE.Vector3[] = [];
    
    // Core nodes in center
    nodePositions.push(new THREE.Vector3(0, 0, 0));
    
    // Worker nodes in rings
    for (let ring = 1; ring <= 2; ring++) {
      const nodesInRing = ring * 6;
      for (let i = 0; i < nodesInRing; i++) {
        const angle = (i / nodesInRing) * Math.PI * 2;
        const radius = ring * 30;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = (Math.random() - 0.5) * 20;
        nodePositions.push(new THREE.Vector3(x, y, z));
      }
    }
    
    return nodePositions.slice(0, nodeCount);
  }, [nodeCount]);

  // Generate data flow paths between nodes
  const dataFlowPaths = useMemo(() => {
    const paths: THREE.Vector3[][] = [];
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.6) {
          const start = nodes[i];
          const end = nodes[j];
          const mid = new THREE.Vector3()
            .addVectors(start, end)
            .multiplyScalar(0.5)
            .add(new THREE.Vector3(
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20
            ));
          
          paths.push([start, mid, end]);
        }
      }
    }
    
    return paths;
  }, [nodes]);

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 120], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent' }}
      >
        {/* Dynamic lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[50, 50, 50]} intensity={0.8} color="#FB9260" />
        <pointLight position={[-50, -50, 50]} intensity={0.6} color="#3B82F6" />
        <pointLight position={[0, 0, 100]} intensity={0.4} color="#22C55E" />
        
        {/* AI Nodes */}
        {nodes.map((position, index) => (
          <AINode
            key={index}
            position={position}
            type={index === 0 ? 'core' : index < 4 ? 'coordinator' : 'worker'}
            active={true}
            processingLoad={0.3 + Math.random() * 0.7}
          />
        ))}
        
        {/* Neural network connections */}
        {showConnections && <NeuralConnections nodes={nodes} />}
        
        {/* Data flow particles */}
        {showDataFlow && <DataFlowParticles paths={dataFlowPaths} />}
        
        {/* Background hex grid for context */}
        <group position={[0, 0, -30]} scale={[0.5, 0.5, 0.5]}>
          <lineSegments>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={new Float32Array(
                  Array.from({ length: 100 }, () => {
                    const angle = Math.random() * Math.PI * 2;
                    const radius = Math.random() * 150;
                    return [
                      Math.cos(angle) * radius,
                      Math.sin(angle) * radius,
                      0
                    ];
                  }).flat()
                )}
                count={100}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color="#1E293B"
              transparent
              opacity={0.1}
            />
          </lineSegments>
        </group>
      </Canvas>
    </div>
  );
};

export default OKODistributedVisualizer;
