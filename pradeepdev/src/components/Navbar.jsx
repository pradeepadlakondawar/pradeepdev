import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
function Navbar() {
  return (
    <Router>
        <nav className='flex justify-between px-20 py-7 w-full font-bold fixed border-solid border-y-2 bg-white text-xl'>
          <div className="logo" >
          <Link to="/">Pradeep.dev</Link>
          </div>
    <ul className='flex justify-between gap-x-10 '>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/projects">Projects</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
    </ul>
   </nav>
   <div className='border-solid border-2 fixed'></div>
    </Router>
   
  )
}

export default Navbar

