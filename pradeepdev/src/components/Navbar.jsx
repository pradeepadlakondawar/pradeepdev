import React, { useState } from 'react';
import {NavLink, Link} from "react-router-dom"
// import "../App.css/"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const pageUp = () => {
  //   window.scrollTo({ top: (0, 0), behavior: "smooth" });
  // };
  // const navlinks = [
  //   {
  //     name: "Home",
  //     link: "/",
  //   },
  //   {
  //     name: "About",
  //     link: "/about",
  //   },
  //   {
  //     name: "Projects",
  //     link: "/projects",
  //   },
  //   {
  //     name: "Contact",
  //     link: "/contact",
  //   },
  // ];
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
        <nav className='overflow-x-hidden flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8 font-bold fixed top-0 w-screen bg-white text-black z-50 '>
          {/* <h3 className='logo' onClick={pageUp}>Pradeep.dev</h3>
    <ul className='flex justify-between gap-x-10 '>
        {navlinks.map((item) => (
            <li key={item.name} className='hover:text-sky-700'>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        
    </ul> */}

    {/* below code is working for routng to diff pages */}
    {/* <h3 className='logo'><NavLink to="/">Pradeep.dev</NavLink></h3>
      <ul className='flex justify-between gap-x-10 '>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/about" >About</NavLink></li>
        <li><NavLink to="/projects" >Projects</NavLink></li>
        <li><NavLink to="/contact" >Contact</NavLink></li>
      </ul> */}

{/* implementing smooth scrolling behavior within each component to handle navigation between sections within the page. */}

<h3 className='logo text-lg sm:text-xl lg:text-2xl cursor-pointer' onClick={() => scrollToSection('home')}>Pradeep.dev</h3>

 {/* Hamburger icon for smaller screens */}
 <div className="block sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Dropdown menu */}
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}  top-9 right-0 mt-0 w-30  bg-white rounded-lg shadow-lg z-51 fixed`}>
          <ul className="flex flex-col ">
            <li><Link to="/" onClick={() => scrollToSection('home')} className='inline-block px-2 py-1 text-sm text-gray-800 hover:bg-gray-200'>Home</Link></li>
            <li><Link to="/about" onClick={() => scrollToSection('about')} className='inline-block px-2 py-1 text-sm text-gray-800 hover:bg-gray-200'>About</Link></li>
            <li><Link to="/projects" onClick={() => scrollToSection('projects')} className='inline-block px-2 py-1 text-sm text-gray-800 hover:bg-gray-200'>Projects</Link></li>
            <li><Link to="/contact" onClick={() => scrollToSection('contact')} className='inline-block px-2 py-1 text-sm text-gray-800 hover:bg-gray-200'>Contact</Link></li>
          </ul>
        </div>


        {/* Navigation links */}
        
      <ul className={`hidden sm:flex sm:items-center sm:justify-end sm:flex-1 gap-x-4 sm:gap-x-8 lg:gap-x-12`}>
        <li><Link to="/" onClick={() => scrollToSection('home')} className='text-sm sm:text-base lg:text-lg'>Home</Link></li>
        <li><Link to="/about" onClick={() => scrollToSection('about')} className='text-sm sm:text-base lg:text-lg'>About</Link></li>
        <li><Link to="/projects" onClick={() => scrollToSection('projects')} className='text-sm sm:text-base lg:text-lg'>Projects</Link></li>
        <li><Link to="/contact" onClick={() => scrollToSection('contact')} className='text-sm sm:text-base lg:text-lg'>Contact</Link></li>
      </ul>
   </nav>
   <div className='border-solid border-2 fixed'></div>
   </>
    
   
  )
}

export default Navbar

