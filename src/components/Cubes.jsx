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

  // mesh is the fundamental building block of any 3D geometry objects
  // delta : value of time of rotation on each direction (0.something)
  // state : object with loop values such as camera, timeStamp, interval, etc.

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Cubes Component
const Cubes = () => (
  <>
  <Navbar/>
  <div style={{ marginTop: '200px' }}>

  <Canvas camera={{position: [3, 3, 10]}}>
    {/* Ambient Light: Adds base lighting without casting shadows */}
    <ambientLight intensity={0.1} />

    {/* Directional Light: Provides directional lighting for shadows */}
    <directionalLight position={[0, 0, 2]} intensity={0.5} />

    {/* Group of cubes */}
    <group position={[0, 1, 0]}>
      <Cube position={[1, 0, 0]} color="green" size={[1, 1, 1]} />
      <Cube position={[-1, 0, 0]} color="hotpink" size={[1, 1, 1]} />
      <Cube position={[-1, 2, 0]} color="blue" size={[1, 1, 1]} />
      <Cube position={[1, 2, 0]} color="yellow" size={[1, 1, 1]} />
    </group>
    

  </Canvas>
  </div>
  </>
);

export default Cubes;
