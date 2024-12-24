import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slider.css'

import Trip1 from '../assets/101.webp'
import Trip2 from '../assets/102.webp'
import Trip3 from '../assets/100.jpg'


const data = [
  {
    image: Trip1,
    title: 'Iphone 5G Phone',
  },
  {
    image: Trip2,
    title: 'Samsung 5G Phone',
  },
  {
    image: Trip3,
    title: 'Intel 5G Phone',
  },
  {
    image: Trip1,
    title: 'Poco 5G Phone',
  },
  {
    image: Trip2,
    title: 'Techno 5G Phone',
  },
  {
    image: Trip3,
    title: 'Intel 5G Phone',
  },
  {
    image: Trip1,
    title: 'Poco 5G Phone',
  },
  {
    image: Trip2,
    title: 'Techno 5G Phone',
  }
];

function App() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
