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
                <a href="/">
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-whatsapp-square'></i>
                </a>
            </div>
        </div>

        <div className='bottom'>
            <div>
                <h4><Link to={'/'}>Home</Link></h4>
            </div>
            <div>
                <h4><Link to={'/about'}>About</Link></h4>
            </div>
            <div>
                <h4><Link to={'/contact'}>Contact</Link></h4>
            </div>
            <div>
                <h4><Link to={'/product'}>product</Link></h4>
            </div>
        </div>
    </div>
  )
}

export default Footer