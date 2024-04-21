import React from 'react'
import {NavLink, Link} from "react-router-dom"

function Navbar() {
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
        <nav className='flex justify-between px-20 py-7 w-full font-bold fixed border-solid border-y-2 bg-white text-xl z-50 text-black'>
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

<h3 className='logo' onClick={() => scrollToSection('home')}>Pradeep.dev</h3>
      <ul className='flex justify-between gap-x-10 '>
        <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
        <li><Link to="/about" onClick={() => scrollToSection('about')}>About</Link></li>
        <li><Link to="/projects" onClick={() => scrollToSection('projects')}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => scrollToSection('contact')}>Contact</Link></li>
      </ul>
   </nav>
   <div className='border-solid border-2 fixed'></div>
   </>
    
   
  )
}

export default Navbar

