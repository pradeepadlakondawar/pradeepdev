import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import "./App.css"
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <div className="w-full h-screen  ">
      <Navbar />
      <Landingpage />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />

      </div>

    </>
  )
}

export default App
