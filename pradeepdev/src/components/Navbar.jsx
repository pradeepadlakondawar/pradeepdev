import React from 'react'


function Navbar() {
  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };
  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <>
        <nav className='flex justify-between px-20 py-7 w-full font-bold fixed border-solid border-y-2 bg-white text-xl z-50 text-black'>
          <h3 className='logo' onClick={pageUp}>Pradeep.dev</h3>
    <ul className='flex justify-between gap-x-10 '>
        {navlinks.map((item) => (
            <li key={item.name} className='hover:text-sky-700'>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
    </ul>
   </nav>
   <div className='border-solid border-2 fixed'></div>
   </>
    
   
  )
}

export default Navbar

