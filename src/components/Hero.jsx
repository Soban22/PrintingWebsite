import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './hero.css';
import Image1 from '../assets/h1.jpg'
import Image2 from '../assets/h2.jpg'
import Image3 from '../assets/h3.jpg'

const Hero = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false, 
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
    </div>
  );
};

export default Hero;
