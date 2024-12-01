import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Cubes from './components/Cubes'
import AnimatedCube from './components/AnimatedCube'
import SpherePage from './components/Sphere'
import TorusPage from './components/Torus'
import TorusKnotPage from './components/TorusKnot'


const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cubes' element={<Cubes/>}/>
      <Route path='/animated-cube' element={<AnimatedCube/>}/>
      <Route path='/sphere' element={<SpherePage/>}/>
      <Route path='/torus' element={<TorusPage/>}/>
      <Route path='/torus-knot' element={<TorusKnotPage/>}/>
    </Routes>
    </>
  )
}

export default App
