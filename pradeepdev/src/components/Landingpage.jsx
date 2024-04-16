import React from 'react'
import wavingImg from "../assets/waving.1bae5fcfb51082b5c2b4.png"
import pradeepImg from '../assets/pradeepImg.jpg'
function Landingpage() {
    const HTMLCSSJS = 'https://skillicons.dev/icons?i=html,css,javascript'
    const React="https://skillicons.dev/icons?i=react"
    const Tailwind="https://skillicons.dev/icons?i=tailwind"
  return (
        

    <>
    <div className='Landingpage  w-full h-screen border-2 border-solid border-orange-500 text-wrap justify-evenly px-36 py-20 bg-gray-100'>
      <div className='flex '>
      <div className="Hero-Content w-3/5 px-20">
        <h1 className=' block mt-20 text-5xl font-extrabold'>
        Front-End React Developer <span className=''><img className="object-cover inline-block w-12" src={wavingImg} alt="WavingImg" /></span>
        </h1>
        <p className='py-4 w-fit text-lg'>Hi, I'm Pradeep Adlakondawar. A passionate Front-end React Developer based in Pune, India. 📍</p>
        <div className='flex gap-2 py-4'>
        <span className='hover:text-sky-700 '><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
        </span>
        <span className='hover:text-sky-700'>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
        </span>
        </div>
      </div>

      <div className="Hero-Img">
        <img className='w-64 mt-20' src={pradeepImg} alt="Hero image" />
      </div>
      </div>

      <div>
        <div className="Tech-stack text-4xl flex gap-8 container mx-auto mt-10 px-20 py-10">
        <h2>Tech Stack |</h2>
        <img src={HTMLCSSJS} alt="Skillicon-html,css" className='hover:-translate-y-3 transition-transform duration-300 ease-in-out' />
        <img src={React} alt="Skillicon-react" className='hover:-translate-y-3 transition-transform duration-300 ease-in-out' />
        <img src={Tailwind} alt="Skillicon-Tailwind" className='hover:-translate-y-3 transition-transform duration-300 ease-in-out' />
        <span>
            
        </span>
    </div>
    </div>
    </div>

    
    </>
  )
}

export default Landingpage

