import React from 'react'
import aboutmeImg from "../assets/AboutMe-image.webp"
import aboutmeImg2 from "../assets/aboutme-inner-img.png"
import frontendlogo from "../assets/forntendevlogo.svg"
import "./Fonts.css"
function AboutMe() {
  return (
    <div id='about' className='AboutMe-Container  w-full h-screen  flex '>
      <div className='Aboutme-Imgs   w-6/12 h-6/12   pl-40 pr-20 pt-40 '>
         <div className='relative '>
            <img src={aboutmeImg} alt="aboutme main img " className=' rounded-2xl'/>
            <div className='absolute w-44 h-44 bg-white rounded-full -right-16 -bottom-10  '>
                <img src={frontendlogo} alt=""  className='animate-spin'/>
                <div className='absolute  w-16 h-16  top-14 left-14'>
                <img src={aboutmeImg2} alt="" />
            </div>
            </div>
            
         </div>
      </div>

      <div className='Aboutme-Text w-2/4    '>
         <div className=' mt-48 ml-10 pr-40 text-left '>
         <h3 className='font-bold text-xl 
          text-sky-400 mb-3 '>ABOUT ME</h3>
         <h4 className='text-3xl leading-snug font-bold mb-5'>Front-end Developer <br />
            based in Pune, India 📍
         </h4>
         <p className='leading-normal text-lg font-medium '>
         Hey, my name is Pradeep, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.
         <br />
         <br />
         My main stack currently is React.js in combination with Tailwind CSS and JavaSript.
         </p>

         
         </div>
      </div>


    </div>
  )
}

export default AboutMe
