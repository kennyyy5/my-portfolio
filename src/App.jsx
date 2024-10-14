
import About from "./components/About"
import { HeroScrollDemo } from './components/LandingScroll'
import BottomNavbar from './components/BottomNavbar'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Projects2 } from './components/Projects2'


function App() {
  

  return (
    <>
     <BottomNavbar/>
  <HeroScrollDemo/>
   <About/>
    <Experiences/>  
    <Projects2/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
