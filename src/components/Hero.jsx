import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './hero.css';
import Image1 from '../assets/Heading.png'
import Image2 from '../assets/Packaging.png'
import Image3 from '../assets/main2.jpg'
import { Link } from 'react-router-dom';

const Hero = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable navigation arrows
  };

  return (
    <div className={props.cName}>
      <Slider {...settings} className="hero-carousel">
        <div>
          <img src={Image1} alt="Slide 1" />
        </div>
        <div>
          <img src={Image2} alt="Slide 2" />
        </div>
        <div>
          <img src={Image3} alt="Slide 3" />
        </div>
      </Slider>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Hero;
