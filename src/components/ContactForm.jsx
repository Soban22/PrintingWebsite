import React from 'react'
import './contactform.css'

const ContactForm = () => {
  return (
    <div className='form-container'>
       
        <form action="">
            <h1>Share Your Remarks!</h1>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <textarea name="" placeholder='Message' rows="4" id=""></textarea>
            <button>Send Message</button>
        </form>
        <div className='location'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.4135871689723!2d74.1820542!3d32.1661202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f298798720773%3A0xbba4aaaf3f12ec26!2sUmar%20Printing%20Point!5e0!3m2!1sen!2s!4v1732895866464!5m2!1sen!2s" width="800" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default ContactForm