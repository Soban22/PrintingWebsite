import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <p>+123 456 7890</p>
        <p>+987 654 3210</p>
      </div>
      <div className="banner-right">
        <a href="/">
          <i className="fa-brands fa-facebook-square"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-instagram-square"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-whatsapp-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Banner;
