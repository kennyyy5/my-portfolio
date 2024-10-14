import React from 'react'

import About from "./components/About"
import { HeroScrollDemo } from './components/LandingScroll'
import BottomNavbar from './components/BottomNavbar'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Projects } from './components/Projects'


function App() {
  

  return (
    <>
     <BottomNavbar/>
  <HeroScrollDemo/>
   <About/>
    <Experiences/>  
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
