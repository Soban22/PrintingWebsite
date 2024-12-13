import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'


const Home = () => {
  return (
    <>
        <Banner />
        <Navbar/>
        <Hero
          cName="hero"
          heroImg=""
          title="Your Choice Our Designs"
          text="See more of our services"
          buttonText="Our Services"
          href="/product"
          btnClass="show"
        />
        <Destination/>
        <Trip/>
        <div style={{ position: "relative"}}>
          <Link
            to={"/product"}
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
