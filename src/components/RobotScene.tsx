import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const RobotHead = () => {
  const groupRef = useRef<THREE.Group>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (eyeLeftRef.current && eyeRightRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
      eyeLeftRef.current.scale.set(pulse, pulse, pulse);
      eyeRightRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        {/* Head */}
        <Box args={[2, 2.2, 1.8]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </Box>
        
        {/* Face plate */}
        <Box args={[1.8, 1.4, 0.1]} position={[0, 0.1, 0.95]}>
          <meshStandardMaterial color="#0f3460" metalness={0.6} roughness={0.3} />
        </Box>
        
        {/* Eyes */}
        <Sphere ref={eyeLeftRef} args={[0.25, 16, 16]} position={[-0.5, 0.3, 1]}>
          <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={2} />
        </Sphere>
        <Sphere ref={eyeRightRef} args={[0.25, 16, 16]} position={[0.5, 0.3, 1]}>
          <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={2} />
        </Sphere>
        
        {/* Antenna */}
        <Box args={[0.1, 0.6, 0.1]} position={[0, 1.4, 0]}>
          <meshStandardMaterial color="#16213e" metalness={0.9} roughness={0.1} />
        </Box>
        <Sphere args={[0.15, 16, 16]} position={[0, 1.8, 0]}>
          <meshStandardMaterial color="#e94560" emissive="#e94560" emissiveIntensity={1.5} />
        </Sphere>
        
        {/* Ear modules */}
        <Box args={[0.3, 0.6, 0.4]} position={[-1.15, 0, 0]}>
          <meshStandardMaterial color="#16213e" metalness={0.7} roughness={0.3} />
        </Box>
        <Box args={[0.3, 0.6, 0.4]} position={[1.15, 0, 0]}>
          <meshStandardMaterial color="#16213e" metalness={0.7} roughness={0.3} />
        </Box>
        
        {/* Mouth/Speaker */}
        <Box args={[0.8, 0.15, 0.1]} position={[0, -0.4, 1]}>
          <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.5} />
        </Box>
      </group>
    </Float>
  );
};

const FloatingOrbs = () => {
  const orbsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={orbsRef}>
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2.5;
        return (
          <Float key={i} speed={3 + i * 0.5} floatIntensity={0.5}>
            <Icosahedron
              args={[0.15, 0]}
              position={[Math.cos(angle) * radius, Math.sin(angle * 2) * 0.5, Math.sin(angle) * radius]}
            >
              <meshStandardMaterial
                color={i % 2 === 0 ? "#00d9ff" : "#e94560"}
                emissive={i % 2 === 0 ? "#00d9ff" : "#e94560"}
                emissiveIntensity={1}
              />
            </Icosahedron>
          </Float>
        );
      })}
    </group>
  );
};

const EnergyRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Torus ref={ringRef} args={[2, 0.02, 16, 100]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={2} transparent opacity={0.6} />
    </Torus>
  );
};

export const RobotScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#e94560" />
      <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={1} color="#ffffff" />
      
      <RobotHead />
      <FloatingOrbs />
      <EnergyRing />
      
      {/* Particle field background */}
      <Float speed={1} rotationIntensity={0.2}>
        <Sphere args={[4, 32, 32]} position={[0, 0, -2]}>
          <MeshDistortMaterial
            color="#0a0a1a"
            attach="material"
            distort={0.3}
            speed={2}
            transparent
            opacity={0.3}
          />
        </Sphere>
      </Float>
    </Canvas>
  );
};
