import React from 'react'

function Contact() {

    const handleEmailClick= ()=>{
        window.location.href='mailto:pradeepadlakondawar15@gmail.com'
    };

    

  return (
    <div id='contact' className='px-44 py-20 w-full'>
      <h3 className='font-bold text-xl 
          text-sky-400 mb-3'>Contact</h3>
      <h4 className='text-3xl leading-snug font-bold mb-5'>Don't be shy! Hit me up! 👇</h4>
      <div className='Contactsection flex'>
        <div className='Location  flex mr-20'>
            <span className='px-4 py-4 border-4 border-solid rounded-full text-sky-400'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg></span>
                <div>
                    <h3 className='font-bold text-xl px-4 pt-2'>Location</h3>
                    <p className='px-4 hover:text-sky-700'>Pune, India</p>
                </div>
        </div>
        <div className='Mail  flex'>
            <span className='px-4 py-4 border-4 border-solid rounded-full text-sky-400'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
            </span>
            <div>
                <h3 className='font-bold text-xl px-4 pt-2'>Mail</h3>
                <p onClick={handleEmailClick} className='px-4 cursor-pointer hover:text-sky-700 '>pradeepadlakondawar15@gmail.com</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
