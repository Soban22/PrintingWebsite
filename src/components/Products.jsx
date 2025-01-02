import React from 'react'
import './trip.css'
import TripData from './TripData'
import Trip1 from '../assets/1.jpg'
import Trip2 from '../assets/2.jpg'
import Trip3 from '../assets/3.jpg'
import Trip4 from '../assets/4.jpg'
import Trip5 from '../assets/5.jpg'
import Trip6 from '../assets/6.jpg'
import Trip7 from '../assets/7.jpg'
import Trip8 from '../assets/8.jpg'
import Trip9 from '../assets/9.jpg'

const Trip = () => {
  return (
    <div className='trip'>
       <h1 className='mainheading'>Our Products and Services</h1>
        <p className='trippara'>Our products and services are designed to simplify your financial journey, offering innovative solutions tailored to your needs. From cutting-edge tools to expert support, we empower you to achieve your goals effortlessly.</p>
        <div className='tripcard'>
            <TripData
            image={Trip1}
            heading="Business Cards"
            text="Professionally designed business cards that leave a lasting impression."
            />
            <TripData
            image={Trip2}
            heading="Office Stationary"
            text="High-quality office supplies customized to suit your brand identity."
            />
            <TripData
            image={Trip3}
            heading="Product Photography"
            text="Stunning visuals that showcase your products in the best light."
            />
            
        </div>
        <div className='tripcard'>
            <TripData
            image={Trip4}
            heading="Corrugated Packaging"
            text="Durable and eco-friendly packaging solutions for all your needs."
            />
            <TripData
            image={Trip6}
            heading="Posters"
            text="Eye-catching posters designed to captivate and communicate effectively."
            />
            <TripData
            image={Trip7}
            heading="Bleach Card, Boxboard"
            text="Premium-grade materials for sturdy and versatile packaging."
            />
            
        </div>
        <div className='tripcard'>
            <TripData
            image={Trip5}
            heading="Catalogues"
            text="Well-crafted catalogues that showcase your offerings with elegance."
            />
            <TripData
            image={Trip8}
            heading="All Types of customized Packaging"
            text=" Tailor-made packaging solutions to meet unique business needs."
            />
            <TripData
            image={Trip9}
            heading="Packaging"
            text="Innovative and tailored packaging options for every product type."
            /> 
        </div>
    </div>
  )
}

export default Trip