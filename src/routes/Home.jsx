import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import SliderComponent from '../components/SliderComponent'


const Home = () => {
  return (
    <>
        <Banner />
        <Navbar/>
        <Hero
          cName="hero"
          href="/product"
          btnClass="show"
        />
        <Destination/>
        <SliderComponent/>
        <Footer/>
    </>
  )
}

export default Home
