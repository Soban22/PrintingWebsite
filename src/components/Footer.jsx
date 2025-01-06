import React from 'react'
import './footer.css'
import footre from '../assets/footre.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <img className='footre' src={footre} alt="logo" />
            </div>

            <div>
                <a href="https://www.facebook.com/profile.php?id=100025904628276">
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href="https://www.instagram.com/umarprintingpoint/">
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href="https://wa.me/+92 321 7420007">
                    <i className='fa-brands fa-whatsapp-square'></i>
                </a>
            </div>
        </div>

        <div className='bottom'>
            <div className='botomb'>
                <p>Umar Graphics is a leader in offering “CUSTOMIZED PREMIUM BOXES and PACKAGING SOLUTION” to well-established businesses and innovative start-ups who want to stand out in this competitive industry.</p>
            </div>
            <div>
                <h4><Link to={'/'}>Home</Link></h4>
                <p>Best Services</p>
                <p>Products</p>
            </div>
            <div>
                <h4><Link to={'/about'}>About</Link></h4>
                <p>Who We Are</p>
                <p>What We Offer</p>
                <p>Why Choose Us</p>
            </div>
            <div>
                <h4><Link to={'/product'}>Popular Products</Link></h4>
                <p><Link to={'/product'}>Business Cards</Link></p>
                <p><Link to={'/product'}>Office Stationary</Link></p>
                <p><Link to={'/product'}>Product Photography</Link></p>
                <p><Link to={'/product'}>Posters</Link></p>
                <p><Link to={'/product'}>See More</Link></p>
            </div>
            <div>
                <h4><Link to={'/contact'}>Contact</Link></h4>
                <p>+92 321 7420007</p>
                <p>umar_ejaz@yahoo.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer