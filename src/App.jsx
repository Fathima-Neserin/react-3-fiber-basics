import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef, useState } from 'react'

      {/* mesh is the fundamental building block of any 3D geometry objects */}
const Cube = ({position, size, color}) => {

  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * 2.0
    ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.09

    // console.log(delta);
    // console.log(state);
    // console.log(state.clock.elapsedTime);
    
    
  })
  // delta : value of time of rotation on each direction(0.something something)
  // state : object with loof values such that camera, timeStamp, interval and so on
  return(
    
    <mesh position={position} ref={ref}>
    <boxGeometry args={size}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )
}

const Sphere = ({position, size, color}) => {

  const [hovered, setHovered] = useState(false);  
  const [clicked, setClicked] = useState(false); 
  const ref = useRef();

  useFrame((state, delta) => {
    // ref.current.rotation.x += delta * 0.2
    const speed = hovered ? 1 : 0.2 
    ref.current.rotation.y += delta * speed
    // ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.04
    
  })
  return(
    
    <mesh 
    position={position} 
    ref={ref}
    onPointerEnter={(e) => {e.stopPropagation(), setHovered(true)}}
    onPointerLeave={(e) => setHovered(false)}
    onClick={() => setClicked(true)}
    scale={clicked ? 1.5 : 1}
    >
      <sphereGeometry size={size}/>
      <meshStandardMaterial color={hovered ? "orange" : "lightblue"} wireframe/>
    </mesh>
  )
}


const Torus = ({position, size, color}) => {
  
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * 4
    ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.06
    
})
  return(
    
    <mesh position={position} ref={ref}>
      <torusGeometry args={size}/>
      <meshStandardMaterial color={color}/>
    </mesh>
  )
}


const TorusKnot = ({position, size, color}) => {
  
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * 5
    ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.08
    
})
  return(
    
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size}/>
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
    
    {/* <Cube position={[0, 0, 0]} color={"red"} size={[1, 1, 1]}/> */}
       
       <Sphere position={[0, 0, 0]} size={[1, 30, 30]} color={"orange"}/>
       {/* <Torus position={[2, 0, 0]} size={[0.8, 0.1, 30, 30]} color={"pink"}/>
       <TorusKnot position={[-2, 0, 0]} size={[0.5, 0.1, 1000, 50]} color={"brown"}/> */}
    </Canvas>
    </>
  )
}

export default App
