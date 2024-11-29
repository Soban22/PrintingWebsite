import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero
          cName="hero"
          heroImg=""
          title="Your Journey Your Story"
          text="Chose Your favourite Design"
          buttonText="Choose Design"
          href="/product"
          btnClass="show"
        />
        <Destination/>
        <Trip/>
        <div style={{ position: "relative"}}>
  <Link
    href="/product"
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -170%)",
      fontSize: "20px",
      color: "black",
    }}
  >
    See More
  </Link>
</div>

        <Footer/>
    </>
  )
}

export default Home
