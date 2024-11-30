import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef } from 'react'

      {/* mesh is the fundamental building block of any 3D geometry objects */}
const Cube = ({position, size, color}) => {

  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * 2.0
    ref.current.position.z += delta

    // console.log(delta);
    // console.log(state);
    
  })
  // delta : value of time of rotation on each direction
  // state : object with loof values such that camera, timeStamp, interval and so on
  return(
    
    <mesh position={position} ref={ref}>
    <boxGeometry args={size}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )
}

const App = () => {

  return (
    <>
     <Canvas>
      {/* directionalLight : to get shadowlight for the specified values of direction */}
      <directionalLight position={[0, 0, 2]} intensity={0.5}/>

      {/* ambientLight : this light cannot be used to cast shadows as it does not have a direction */}
      <ambientLight intensity={0.1}/>
       
       {/* <group position={[0, -1, 0]}>
       <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]}/>
       <Cube position={[-1, 0, 0]} color={"hotpink"} size={[1, 1, 1]}/>
 
       <Cube position={[-1, 2, 0]} color={"blue"} size={[1, 1, 1]}/>
       <Cube position={[1, 2, 0]} color={"yellow"} size={[1, 1, 1]}/>
       </group> */}
    
    <Cube position={[0, 0, 0]} color={"red"} size={[1, 1, 1]}/>
    </Canvas>
    </>
  )
}

export default App
