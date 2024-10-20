import React, { useState, useEffect } from 'react';
import './index.css';

const slides = [
  {
    title: 'NEED A MENTAL HEALTH PROVIDER?',
    subtitle:'No Look Further',
    description: 'Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.',
    image: "/images/image2.png",
  },
  {
    title: 'TALK TO SOMEONE WHO CARES',
    subtitle:'No Look Further',
    description: 'We are here to listen and provide professional support for your mental well-being.',
    image: "/images/image1.jpg",
  },
  {
    title: 'YOUR MENTAL HEALTH MATTERS',
    subtitle:'No Look Further',
    description: 'Find the right therapist for you, offering personalized care in a safe environment.',
    image:"/images/image1.jpg",
  }
];

const Carousal = () => {


  // Automatically change the slide every 5 seconds

    const [currentSlide, setCurrentSlide] = useState(0);
  
    // Auto-slide functionality to change slides every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000); // 5 seconds
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="hero" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
        <div className='h'>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
          <p>{slides[currentSlide].description}</p>
          <button className="book-btn">Learn More</button>
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        </div>
      </div>
    );
  };
  


export default Carousal;

