import React from 'react'
import './contactform.css'

const ContactForm = () => {
  return (
    <div className='form-container'>
        <h1>Share Your Remarks!</h1>
        <form action="">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <textarea name="" placeholder='Message' rows="4" id=""></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm