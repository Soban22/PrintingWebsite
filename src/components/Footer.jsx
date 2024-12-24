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
            <div>
                <h4><Link to={'/'}>Home</Link></h4>
                <p>Our Best Services</p>
                <p>Our Products</p>
            </div>
            <div>
                <h4><Link to={'/about'}>About</Link></h4>
                <p>Who We Are</p>
                <p>What We Offer</p>
                <p>Why Choose Us</p>
            </div>
            <div>
                <h4><Link to={'/product'}>product</Link></h4>
            </div>
            <div>
                <h4><Link to={'/contact'}>Contact</Link></h4>
            </div>
        </div>
    </div>
  )
}

export default Footer