import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';

const MetallicRobot = () => {
  const headRef = useRef<THREE.Group>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);
  const antennaLightRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.4) * 0.25;
      headRef.current.rotation.x = Math.sin(t * 0.3) * 0.08;
      headRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
    
    if (eyeLeftRef.current && eyeRightRef.current) {
      const pulse = Math.sin(t * 3) * 0.3 + 1.2;
      const leftMat = eyeLeftRef.current.material as THREE.MeshStandardMaterial;
      const rightMat = eyeRightRef.current.material as THREE.MeshStandardMaterial;
      leftMat.emissiveIntensity = pulse;
      rightMat.emissiveIntensity = pulse;
    }
    
    if (antennaLightRef.current) {
      const blink = Math.sin(t * 4) > 0.5 ? 2 : 0.5;
      const antennaMat = antennaLightRef.current.material as THREE.MeshStandardMaterial;
      antennaMat.emissiveIntensity = blink;
    }
  });

  const chromeMaterial = {
    metalness: 1,
    roughness: 0.1,
    envMapIntensity: 1.5,
  };

  const darkMetalMaterial = {
    color: '#1a1a2e',
    metalness: 0.9,
    roughness: 0.15,
  };

  const brushedMetalMaterial = {
    color: '#2d3436',
    metalness: 0.85,
    roughness: 0.25,
  };

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={headRef} position={[0, 0, 0]}>
        {/* Main Head - Metallic Chrome */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 2.2, 1.8]} />
          <meshStandardMaterial {...darkMetalMaterial} />
        </mesh>
        
        {/* Head Top Plate */}
        <mesh position={[0, 1.15, 0]}>
          <boxGeometry args={[1.8, 0.15, 1.6]} />
          <meshStandardMaterial color="#4a5568" {...chromeMaterial} />
        </mesh>
        
        {/* Face Plate - Brushed Metal */}
        <mesh position={[0, 0.05, 0.92]}>
          <boxGeometry args={[1.7, 1.5, 0.08]} />
          <meshStandardMaterial {...brushedMetalMaterial} />
        </mesh>
        
        {/* Visor */}
        <mesh position={[0, 0.25, 0.97]}>
          <boxGeometry args={[1.5, 0.6, 0.05]} />
          <meshStandardMaterial color="#0a0a0a" metalness={1} roughness={0.05} />
        </mesh>
        
        {/* Eyes - Glowing Cyan */}
        <mesh ref={eyeLeftRef} position={[-0.4, 0.25, 1]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00ffff" 
            emissiveIntensity={1.2}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
        <mesh ref={eyeRightRef} position={[0.4, 0.25, 1]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00ffff" 
            emissiveIntensity={1.2}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
        
        {/* Eye Rings */}
        <mesh position={[-0.4, 0.25, 0.98]}>
          <torusGeometry args={[0.22, 0.03, 16, 32]} />
          <meshStandardMaterial color="#4a5568" {...chromeMaterial} />
        </mesh>
        <mesh position={[0.4, 0.25, 0.98]}>
          <torusGeometry args={[0.22, 0.03, 16, 32]} />
          <meshStandardMaterial color="#4a5568" {...chromeMaterial} />
        </mesh>
        
        {/* Antenna Base */}
        <mesh position={[0, 1.25, 0]}>
          <cylinderGeometry args={[0.15, 0.18, 0.15, 16]} />
          <meshStandardMaterial color="#4a5568" {...chromeMaterial} />
        </mesh>
        
        {/* Antenna Rod */}
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry args={[0.04, 0.06, 0.6, 8]} />
          <meshStandardMaterial color="#718096" {...chromeMaterial} />
        </mesh>
        
        {/* Antenna Light */}
        <mesh ref={antennaLightRef} position={[0, 1.95, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial 
            color="#ff3366" 
            emissive="#ff3366" 
            emissiveIntensity={2}
          />
        </mesh>
        
        {/* Side Panels - Left */}
        <mesh position={[-1.05, 0, 0]}>
          <boxGeometry args={[0.15, 1.8, 1.4]} />
          <meshStandardMaterial color="#2d3436" {...chromeMaterial} />
        </mesh>
        
        {/* Side Vents Left */}
        {[-0.3, 0, 0.3].map((y, i) => (
          <mesh key={`vent-l-${i}`} position={[-1.13, y, 0]}>
            <boxGeometry args={[0.02, 0.15, 0.8]} />
            <meshStandardMaterial 
              color="#00ffff" 
              emissive="#00ffff" 
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
        
        {/* Side Panels - Right */}
        <mesh position={[1.05, 0, 0]}>
          <boxGeometry args={[0.15, 1.8, 1.4]} />
          <meshStandardMaterial color="#2d3436" {...chromeMaterial} />
        </mesh>
        
        {/* Side Vents Right */}
        {[-0.3, 0, 0.3].map((y, i) => (
          <mesh key={`vent-r-${i}`} position={[1.13, y, 0]}>
            <boxGeometry args={[0.02, 0.15, 0.8]} />
            <meshStandardMaterial 
              color="#00ffff" 
              emissive="#00ffff" 
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
        
        {/* Chin/Jaw */}
        <mesh position={[0, -0.8, 0.3]}>
          <boxGeometry args={[1.4, 0.5, 1]} />
          <meshStandardMaterial {...darkMetalMaterial} />
        </mesh>
        
        {/* Mouth Speaker Grill */}
        <mesh position={[0, -0.5, 0.97]}>
          <boxGeometry args={[0.6, 0.2, 0.05]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.3} />
        </mesh>
        
        {/* Speaker Lines */}
        {[-0.2, -0.1, 0, 0.1, 0.2].map((x, i) => (
          <mesh key={`speaker-${i}`} position={[x, -0.5, 0.98]}>
            <boxGeometry args={[0.015, 0.15, 0.02]} />
            <meshStandardMaterial 
              color="#00ffff" 
              emissive="#00ffff" 
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
        
        {/* Neck Section */}
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.4, 0.5, 0.4, 16]} />
          <meshStandardMaterial {...brushedMetalMaterial} />
        </mesh>
        
        {/* Neck Ring */}
        <mesh position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.55, 0.05, 8, 32]} />
          <meshStandardMaterial color="#4a5568" {...chromeMaterial} />
        </mesh>
      </group>
    </Float>
  );
};

const FloatingParticles = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 2.8 + Math.sin(i * 1.5) * 0.5;
        const yOffset = Math.sin(i * 0.8) * 1;
        return (
          <Float key={i} speed={2 + i * 0.3} floatIntensity={0.3}>
            <mesh
              position={[
                Math.cos(angle) * radius,
                yOffset,
                Math.sin(angle) * radius
              ]}
            >
              <icosahedronGeometry args={[0.08, 0]} />
              <meshStandardMaterial
                color={i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff3366" : "#9b59b6"}
                emissive={i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff3366" : "#9b59b6"}
                emissiveIntensity={1.5}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
};

const HolographicRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, -0.5, 0]}>
      <torusGeometry args={[2.2, 0.015, 16, 100]} />
      <meshStandardMaterial 
        color="#00ffff" 
        emissive="#00ffff" 
        emissiveIntensity={1.5}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

export const RobotScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5.5], fov: 50 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lighting Setup for Metallic Look */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#00ffff" />
      <pointLight position={[0, 3, 3]} intensity={0.8} color="#00ffff" distance={10} />
      <pointLight position={[-3, -2, 2]} intensity={0.4} color="#ff3366" distance={8} />
      <spotLight 
        position={[0, 5, 0]} 
        angle={0.5} 
        penumbra={1} 
        intensity={0.5} 
        color="#ffffff"
      />
      
      {/* Environment for realistic reflections */}
      <Environment preset="city" />
      
      <MetallicRobot />
      <FloatingParticles />
      <HolographicRing />
    </Canvas>
  );
};
