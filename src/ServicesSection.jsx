import React from 'react';
import './servicessection.css';

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-box">
          <h3>Web Development</h3>
          <p>
            We offer top-quality web development services to build fast, modern, and responsive websites.
          </p>
        </div>
        <div className="service-box">
          <h3>SEO Optimization</h3>
          <p>
            Improve your site's visibility on search engines with our expert SEO strategies.
          </p>
        </div>
        <div className="service-box">
          <h3>Graphic Design</h3>
          <p>
            Our talented graphic designers can create stunning visuals for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
