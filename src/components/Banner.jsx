import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <p>+92 321 7420007</p>
        <p>umar_ejaz@yahoo.com</p>
      </div>
      <div className="banner-right">
        <a href="https://www.facebook.com/profile.php?id=100025904628276">
          <i className="fa-brands fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/umarprintingpoint/">
          <i className="fa-brands fa-instagram-square"></i>
        </a>
        <a href="https://wa.me/+92 321 7420007">
          <i className="fa-brands fa-whatsapp-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Banner;
