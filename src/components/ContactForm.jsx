import React from 'react'
import './contactform.css'

const ContactForm = () => {
  return (
    <div className='form-container'>

    <div className="contact-section">
      <div className="contact-card">
        <div className="icon-container">
           <i class="fa-solid fa-phone"></i>
        </div>
        <h3>Talk to us</h3>
        <p>If you want to work with us, just let us know through this contact.</p>
        <p className="contact-info">+92 321 7420007</p>
      </div>
      
      <div className="contact-card">
        <div className="icon-container">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <h3>Address Information</h3>
        <p><strong>Email us at:</strong><br/>info@farooqgraphics.com</p>
        <p><strong>Office:</strong><br/>4-Ahmad pura, Gondlanwala Rd, near Jamia Masjid Tuba, Mohalla Noor Bawa, Gujranwala, Punjab</p>
      </div>
    </div>
     
      <div class="location-line"></div>     
       <h1 className='Location'>Our Location</h1>
       <p className='Paras'>Come visit us for fast, affordable, and high-quality printing.</p>
       
        <div className='location'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.4135871689723!2d74.1820542!3d32.1661202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f298798720773%3A0xbba4aaaf3f12ec26!2sUmar%20Printing%20Point!5e0!3m2!1sen!2s!4v1732895866464!5m2!1sen!2s" width="800" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default ContactForm