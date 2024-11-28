import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Trippy</h1>
                <p>Choose your Favourite Design</p>
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
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
                <a href="/">Changelog</a>
            </div>
        </div>
    </div>
  )
}

export default Footer