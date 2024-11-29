import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import './components/hero.css'
import Product from './routes/Product'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App