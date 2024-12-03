import React from 'react'
import './destination.css'
import Mountain1 from "../assets/66.jpg"
import Mountain2 from "../assets/77.jpg"
import Mountain3 from "../assets/88.jpg"
import Mountain4 from "../assets/135.jpg"
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Best Services</h1>
        <p className='para'>We provide Best Services and Unique Designs to our customers.</p>


        <DestinationData
            cName="first-des"
            heading="World Class Designs At Your Service"
            text="We are a group of curious people who love the word- Why? We believe in questions that lead to remarkable discoveries. To create brand experiences that tick and motivate people, we immerse ourselves into the brand story, realizing its potential and sometimes the unfound. geniuses that create impact."
            img1={Mountain1}
            img2={Mountain2}
        />

        <DestinationData
            cName="first-des-reverse"
            heading="Copying &Printing Center"
            text="Transform your project into a finished piece. We can print and design just about anything from signs and banners to brochures, promotional products and forms, with options of variable data printing, web-to-print and customized online ordering."
            img1={Mountain3}
            img2={Mountain4}
        />
    </div>
  )
}

export default Destination