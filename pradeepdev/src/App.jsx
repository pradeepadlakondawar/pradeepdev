import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import "./App.css"
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


 


function App() {

  
  
  return (
    <>
      <div className="w-screen h-screen  ">
        <Router>
        <Navbar />
      <Landingpage />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
        </Router>
      
{/* beow code is used for routing */}
      {/* <Router>
      <Navbar />    
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> */}
    

      </div>

    </>
  )
}

export default App
