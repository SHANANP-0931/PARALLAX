import React from 'react';
import Slider from 'react-slick';
import './imageslider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src="https://psd.graphics/wp-content/uploads/2016/02/Professional-Business-Website-Template-Free-PSD-Mockup1.jpg" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="https://www.onimodglobal.com/wp-content/uploads/2017/09/Reasons-why-having-a-professional-website-is-important.jpeg" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="https://shoottothrillmedia.com/wp-content/uploads/2021/12/7-Amazing-Benefits-of-Professional-Website-Design.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
