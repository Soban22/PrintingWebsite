import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

const Product = () => {
  return (
    <div>
        <Banner/>
        <Navbar/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Product