import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

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
          url="/product"
          btnClass="show"
        />
        <Destination/>
        <Trip/>
        <div style={{ position: "relative"}}>
  <a
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
  </a>
</div>

        <Footer/>
    </>
  )
}

export default Home
