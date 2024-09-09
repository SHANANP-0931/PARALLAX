import React from 'react';
import './style.css';

const ParallaxSection = () => {
  return (
    <div>
      {/* First Parallax Section with Search Box */}
      <div className="parallax">
        <div className="search-box-container">
          <input type="text" placeholder="Search..." className="search-box" />
          <button className="search-btn">Search</button>
        </div>
      </div>
      <div className="content">
        <h2>About Us</h2>
        <p>We are a professional company offering top-notch services.</p>
      </div>

      {/* Second Parallax Section with Animation */}
      <div className="parallax parallax-about"></div>
      <div className="about-content animated">
        <h2>Our Mission</h2>
        <p>Our mission is to provide world-class solutions to help our clients grow their businesses and achieve their goals.</p>
      </div>
    </div>
  );
};

export default ParallaxSection;
