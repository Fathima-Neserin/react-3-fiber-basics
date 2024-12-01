import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Navbar from './Navbar';

// Torus Component
const Torus = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 4;
    ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.06;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// TorusPage Component
const TorusPage = () => (
  <>
  <Navbar/>
  <Canvas>
    <ambientLight intensity={0.1} />
    <directionalLight position={[0, 0, 2]} intensity={0.5} />
    <Torus position={[2, 0, 0]} size={[0.8, 0.1, 30, 30]} color="pink" />
  </Canvas>
  </>
);

export default TorusPage;
