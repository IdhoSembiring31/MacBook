import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductView from './components/productView'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Performance from './components/Performance'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)
function App() {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <ProductView/>
        <Showcase/>
        <Performance/>
        <Features/>
        <Highlights/>
        <Footer/>
    </main>
    
  )
}

export default App