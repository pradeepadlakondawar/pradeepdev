import React from 'react';
import aboutmeImg from "../assets/AboutMe-image.webp";
import aboutmeImg2 from "../assets/aboutme-inner-img.png";
import frontendlogo from "../assets/forntendevlogo.svg";
import "./Fonts.css";

function AboutMe() {
  return (
    <div id='about' className='AboutMe-Container w-screen min-h-screen flex flex-col items-center overflow-x-auto'>
      <div className='Aboutme-Imgs w-full md:w-1/2 px-2 md:px-4 pt-6 md:pt-0'>
        <div className='relative'>
          <img src={aboutmeImg} alt="aboutme main img" className='rounded-2xl' />
          <div className='absolute w-44 h-44 sm:w-full md:w-full bg-white rounded-full -right-16 -bottom-10'>
            <img src={frontendlogo} alt="" className='animate-spin' />
            <div className='absolute w-16 h-16 top-14 left-14'>
              <img src={aboutmeImg2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='Aboutme-Text w-full md:w-1/2 px-4 md:px-14 py-8 md:py-0 lg:px-20'>
        <div className='mt-8 md:mt-0 text-left'>
          <h3 className='font-bold text-xl text-sky-400 mb-3'>ABOUT ME</h3>
          <h4 className='text-3xl md:text-4xl leading-snug font-bold mb-5'>Front-end Developer <br />
            based in Pune, India 📍
          </h4>
          <p className='leading-normal text-base md:text-lg font-medium'>
            Hey, my name is Pradeep, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.
            <br />
            <br />
            My main stack currently is React.js in combination with Tailwind CSS and JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
