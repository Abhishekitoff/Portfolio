import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

import Contact from './components/Contact'
import { useSelector } from 'react-redux'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Details from './components/Details'

const App = () => {
  const light = useSelector((store)=> store.toggle.value)
  useEffect(() => {
    AOS.init()
    
  }, [])
  

  return (
    <div className=' overflow-hidden'>
      <Navbar light={light}/>
      <Hero light={light}/>
      <Details  light={light}/>
      <Projects light={light}/>
      <Skills light={light}/>
      <Contact light={light}/>
      
     
    </div>
  )
}

export default App