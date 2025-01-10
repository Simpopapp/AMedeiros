import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingText = () => {
  const textRef = useRef();

  return (
    <mesh position={[0, 0, -5]}>
      <textGeometry args={['A.M.O', { size: 1, height: 0.1 }]} />
      <meshStandardMaterial color="#9b87f5" />
    </mesh>
  );
};

export const ThreeScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <FloatingText />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};