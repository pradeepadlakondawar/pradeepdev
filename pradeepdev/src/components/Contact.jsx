import React from 'react'

function Contact() {

    const handleEmailClick= ()=>{
        window.location.href='mailto:pradeepadlakondawar15@gmail.com'
    };

    

  return (
    <div id='contact' className='px-4 md:px-8 lg:px-20 py-20 w-screen'>
      <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl text-sky-400 mb-4 md:mb-6'>Contact</h3>
      <h4 className='text-xl md:text-2xl lg:text-3xl leading-snug font-bold mb-8'>Don't be shy! Hit me up! 👇</h4>
      <div className='flex flex-col md:flex-row md:space-x-12 lg:space-x-24'>
        <div className='flex items-center'>
            <span className='px-4 py-4 border-4 border-solid rounded-full text-sky-400'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg></span>
                <div className='ml-2'>
                    <h3 className='font-bold text-xl md:text-2xl lg:text-3xl'>Location</h3>
                    <p className='hover:text-sky-700 text-sm md:text-md lg:text-lg'>Pune, India</p>
                </div>
        </div>
        <div className='flex items-center mt-8 md:mt-0'>
            <span className='px-4 py-4 border-4 border-solid rounded-full text-sky-400'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
            </span>
            <div className='ml-2'>
                <h3 className='font-bold text-xl md:text-2xl lg:text-3xl'>Mail</h3>
                <p onClick={handleEmailClick} className='cursor-pointer hover:text-sky-700 text-sm md:text-md lg:text-lg'>pradeepadlakondawar15@gmail.com</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
