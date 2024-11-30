import React from 'react'
import './destination.css'
import Mountain1 from "../assets/22.webp"
import Mountain2 from "../assets/23.webp"
import Mountain3 from "../assets/21.webp"
import Mountain4 from "../assets/24.webp"
import Mountain5 from "../assets/20.webp"
import Mountain6 from "../assets/25.webp"
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Print Perfect Every Time</h1>
        <p className='para'>Unlock the power of precision printing with cutting-edge technology and unparalleled quality. Elevate your projects with us.</p>


        <DestinationData
            cName="first-des"
            heading="Who We Are"
            text="We are a leading provider of premium printing solutions, dedicated to transforming your ideas into reality. With state-of-the-art equipment and a passion for excellence, we bring your vision to life through unmatched precision and quality."
            img1={Mountain1}
            img2={Mountain2}
        />

        <DestinationData
            cName="first-des-reverse"
            heading="What We Offer"
            text="Our services range from business cards to large-scale banners, customized packaging, and everything in between. Whether for personal or professional needs, we deliver tailored solutions to match your requirements."
            img1={Mountain3}
            img2={Mountain4}
        />

        <DestinationData
            cName="first-des"
            heading="Why Choose Us"
            text="With years of experience, a customer-first approach, and eco-friendly practices, we are committed to excellence. We dont just print, we create lasting impressions that resonate."
            img1={Mountain5}
            img2={Mountain6}
        />
    </div>
  )
}

export default Destination