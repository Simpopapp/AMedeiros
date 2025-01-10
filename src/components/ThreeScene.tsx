import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingText = () => {
  const textRef = useRef();

  return (
    <mesh position={[0, 0, -5]}>
      <Text
        color="#9b87f5"
        fontSize={1}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        A.M.O
      </Text>
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