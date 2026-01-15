import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductView from './components/productView'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <ProductView/>
    </main>
    
  )
}

export default App