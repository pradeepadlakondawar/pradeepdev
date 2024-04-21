import React from 'react'
import wavingImg from "../assets/waving.1bae5fcfb51082b5c2b4.png"
function Landingpage() {
    const HTML = 'https://skillicons.dev/icons?i=html'
    const CSS = 'https://skillicons.dev/icons?i=css'
    const JS = 'https://skillicons.dev/icons?i=javascript'
    const React="https://skillicons.dev/icons?i=react"
    const Tailwind="https://skillicons.dev/icons?i=tailwind"
  return (
        

    <>
    <div id='home' className='Landingpage w-full min-h-screen text-center justify-center px-4 py-8  sm:py-12 lg:py-16 bg-gray-100'>
      <div className='flex flex-col sm:flex-row justify-center items-centerlex '>
      <div className="Hero-Content w-full sm:w-2/3 lg:w-3/4 px-4 sm:px-0 sm:mr-8 lg:mr-12">
        <h1 className=' block mt-8 sm:mt-12 lg:mt-16 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight'>
        Front-End React Developer <span className='inline-block'><img className="object-cover inline-block w-10 sm:w-12 lg:w-14" src={wavingImg} alt="WavingImg" /></span>
        </h1>
        <p className='py-4 sm:py-6 lg:py-8 text-base sm:text-lg lg:text-xl  lg:px-24'>Hi, I'm Pradeep Adlakondawar. A passionate Front-end React Developer based in Pune, India. 📍</p>
        <div className='flex justify-center gap-4 sm:gap-8 lg:gap-12'>
        <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/pradeep-adlakondawar/"
                  >
                     <span className='hover:text-blue-600 transition-colors duration-300 '><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
        </span>
                    </a>
                    <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/pradeepadlakondawar"
                  >
                      <span className='hover:text-gray-700 transition-colors duration-300'>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
        </span>
                    </a>
        </div>
      </div>

      <div className="hero-img w-full sm:w-1/3 lg:w-2/5 mt-8 sm:mt-0 ">
      </div>
      </div>

      <div>
        <div className="Tech-stack text-xl sm:text-2xl lg:text-3xl flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-8 justify-center items-center mt-8 sm:mt-12 lg:mt-16">
        <h2 className='mt-2'>Tech Stack |</h2>
        <img src={HTML} alt="Skillicon-html" className='w-6 sm:w-8 lg:w-12 hover:-translate-y-1 transition-transform duration-300 ease-in-out' />
        <img src={CSS} alt="Skillicon-css" className='w-6 sm:w-8 lg:w-12 hover:-translate-y-1 transition-transform duration-300 ease-in-out' />
        <img src={JS} alt="Skillicon-JS" className='w-6 sm:w-8 lg:w-12 hover:-translate-y-1 transition-transform duration-300 ease-in-out' />
        <img src={React} alt="Skillicon-react" className='w-6 sm:w-8 lg:w-12 hover:-translate-y-1 transition-transform duration-300 ease-in-out' />
        <img src={Tailwind} alt="Skillicon-Tailwind" className='w-6 sm:w-8 lg:w-12 hover:-translate-y-1 transition-transform duration-300 ease-in-out' />
        <span>
            
        </span>
    </div>
    </div>
    </div>

    
    </>
  )
}

export default Landingpage

