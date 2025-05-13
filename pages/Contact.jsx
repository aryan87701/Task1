import React from 'react'
import Dutch from './../src/assets/Dutch.png'
import Card from '../src/Components/Styled';
function Contact(){
const handleSubmit = (e) =>{
   e.preventDefault()
   alert('Your message was successfully sent')
}
  return (
    <div className='bg'>
      <div className='dutch'>
        <img src={Dutch} alt="" className='z-2'/>
      </div>
    
      <div className='formContainer' >
        <h1 className='text-center my-2'>CONTACT US !</h1>
        <form className='flex flex-col ' onSubmit={handleSubmit}>
          Name : <input type="text" required className='in' placeholder='Enter your Name'/>
          Email : <input type="email" required className='in' placeholder='example@gmail.com'/>
          Message : <textarea name="" id="" className='in' placeholder='Your Message to us'></textarea>
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
      <div className='CCard'>
        
      <Card/>
      </div>
    </div>
  )
}

export default Contact;
