import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Navbar from './Navbar';

// TorusKnot Component
const TorusKnot = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 5; // Faster Y-axis rotation
    ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.08; // Oscillation on Z-axis
  });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// TorusKnotPage Component
const TorusKnotPage = () => (
  <>
  <Navbar/>
  <Canvas>
    <ambientLight intensity={0.1} />
    <directionalLight position={[0, 0, 2]} intensity={0.5} />
    <TorusKnot position={[-2, 0, 0]} size={[0.5, 0.1, 1000, 50]} color="brown" />
  </Canvas>
  </>
);

export default TorusKnotPage;
