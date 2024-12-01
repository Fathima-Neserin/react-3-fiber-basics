import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Navbar from './Navbar';

// Sphere Component
const Sphere = ({ position, size, color }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const ref = useRef();

  useFrame((state, delta) => {
    const speed = hovered ? 1 : 0.2;
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * speed;
    // ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.06
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
      scale={clicked ? 1.5 : 1}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={hovered ? 'orange' : "lightblue"} wireframe />
    </mesh>
  );
};

// SpherePage Component
const SpherePage = () => (
  <>
  <Navbar/>
  <Canvas>
    <ambientLight intensity={0.1} />
    <directionalLight position={[0, 0, 2]} intensity={0.5} />
    <Sphere position={[0, 0, 0]} size={[1, 30, 30]} color="orange" />
  </Canvas>
  </>
);

export default SpherePage;
