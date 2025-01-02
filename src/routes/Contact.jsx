import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Banner from '../components/Banner'
import Zero from '../components/Zero'

const Contact = () => {
  return (
    <>
        <Banner/>
        <Navbar/>
        <ContactForm/>
        <Footer/>
        <Zero/>
    </>
  )
}

export default Contact