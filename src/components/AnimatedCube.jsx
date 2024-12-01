import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Navbar from './Navbar';

// Cube Component
const Cube = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2.0;
    ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.09;
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// AnimatedCube Component
const AnimatedCube = () => (
  <>
  <Navbar/>
  <Canvas>
    <ambientLight intensity={0.1} />
    <directionalLight position={[0, 0, 2]} intensity={0.5} />
    <Cube position={[0, 0, 0]} color="red" size={[1, 1, 1]} />
  </Canvas>
  </>
);

export default AnimatedCube;
