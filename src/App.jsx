
import React from 'react';
import ParallaxSection from './ParallaxSection';
import ImageSlider from './ImageSlider';
import './App.css';
 import Footer from './Footer'
 import ServicesSection from './ServicesSection'
 import ReviewSection from './ReviewSection'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Professional Website</h1>
      </header>
      <ParallaxSection />
      <ImageSlider />
      <ServicesSection/>
      <ReviewSection/>
      <Footer/>
    </div>
  );
}

export default App;
