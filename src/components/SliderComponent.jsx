import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slider.css'

import Trip1 from '../assets/1.jpg'
import Trip2 from '../assets/2.jpg'
import Trip3 from '../assets/3.jpg'
import Trip4 from '../assets/4.jpg'
import Trip5 from '../assets/5.jpg'
import Trip6 from '../assets/6.jpg'
import Trip7 from '../assets/7.jpg'
import Trip8 from '../assets/8.jpg'
import Trip9 from '../assets/9.jpg'


const data = [
  {
    image: Trip1,
    title: 'Business Cards',
  },
  {
    image: Trip2,
    title: 'Office Stationary',
  },
  {
    image: Trip3,
    title: 'Product Photography',
  },
  {
    image: Trip4,
    title: 'Corrugated Packaging',
  },
  {
    image: Trip5,
    title: 'Posters',
  },
  {
    image: Trip6,
    title: 'Bleach Card, Boxboard',
  },
  {
    image: Trip7,
    title: 'Catalogues',
  },
  {
    image: Trip8,
    title: 'All Types of Packaging',
  }
  ,
  {
    image: Trip9,
    title: 'Packaging',
  }
];

function App() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='container'>
      <h1>Our Services</h1>
      <div className='slider-wrapper'>
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index} className='slider-item'>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='slider-title'>
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default App;
