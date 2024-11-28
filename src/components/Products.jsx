import React from 'react'
import './trip.css'
import TripData from './TripData'
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/6.jpg'
import Trip3 from '../assets/8.jpg'

const Trip = () => {
  return (
    <div className='trip'>
        <h1 className='mainheading'>Recent Trips</h1>
        <p className='trippara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, excepturi? Non harum officia id blanditiis ipsum inventore.</p>
        <div className='tripcard'>
            <TripData
            image={Trip1}
            heading="product 1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, excepturi? Non harum officia id blanditiis ipsum inventore."
            />
            <TripData
            image={Trip2}
            heading="product 2"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, excepturi? Non harum officia id blanditiis ipsum inventore."
            />
            <TripData
            image={Trip3}
            heading="product 3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, excepturi? Non harum officia id blanditiis ipsum inventore."
            />
            
        </div>
        <div className='tripcard'>
            <TripData
            image={Trip1}
            heading="product 1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, excepturi? Non harum officia id blanditiis ipsum inventore."
            />
            <TripData
            image={Trip2}
            heading="product 2"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, excepturi? Non harum officia id blanditiis ipsum inventore."
            />
            <TripData
            image={Trip3}
            heading="product 3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, excepturi? Non harum officia id blanditiis ipsum inventore."
            />
            
        </div>
        <div className='tripcard'>
            <TripData
            image={Trip1}
            heading="product 1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, excepturi? Non harum officia id blanditiis ipsum inventore."
            />
            <TripData
            image={Trip2}
            heading="product 2"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, excepturi? Non harum officia id blanditiis ipsum inventore."
            />
            <TripData
            image={Trip3}
            heading="product 3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, excepturi? Non harum officia id blanditiis ipsum inventore."
            /> 
        </div>
    </div>
  )
}

export default Trip