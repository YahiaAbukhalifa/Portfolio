import { useState } from 'react'
import './index.scss'
import Navbar from './componets/navbar/navbar'
import Hero from './componets/hero/hero'
import HeroCards from './componets/hero/HeroCards'
import About from './componets/About/About'
import Stats from './componets/Stats/Stats'
import ProgressBar from './componets/Progress-bar/Progress'
import Skills from './componets/Skills/Skills'
import Services from './componets/Services/Services'
import Portfolio from './componets/Portfoilio/Portfolio'
import Contact from './componets/contact/Contact'
function App() {

  return (
    <>
      <div className="App">
        <Navbar/>
        <Hero/>
        <HeroCards/>
        <About/>
        <Stats/>
        <Skills/>
        <Services/>
        <Portfolio/>
        <Contact/>
      </div>
      <ProgressBar/>
    </>
  )
}

export default App
