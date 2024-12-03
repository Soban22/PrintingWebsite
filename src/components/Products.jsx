import React from 'react'
import './trip.css'
import TripData from './TripData'
import Trip1 from '../assets/101.webp'
import Trip2 from '../assets/102.webp'
import Trip3 from '../assets/100.jpg'

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
            image={Trip1}
            heading="Corrugated Packaging"
            text="Durable and eco-friendly packaging solutions for all your needs."
            />
            <TripData
            image={Trip2}
            heading="Posters"
            text="Eye-catching posters designed to captivate and communicate effectively."
            />
            <TripData
            image={Trip3}
            heading="Bleach Card, Boxboard"
            text="Premium-grade materials for sturdy and versatile packaging."
            />
            
        </div>
        <div className='tripcard'>
            <TripData
            image={Trip1}
            heading="Catalogues"
            text="Well-crafted catalogues that showcase your offerings with elegance."
            />
            <TripData
            image={Trip2}
            heading="All Types of customized Packaging"
            text=" Tailor-made packaging solutions to meet unique business needs."
            />
            <TripData
            image={Trip3}
            heading="Packaging"
            text="Innovative and tailored packaging options for every product type."
            /> 
        </div>
    </div>
  )
}

export default Trip