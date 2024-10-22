import React, { useState, useEffect } from "react";

import { ImQuotesLeft } from "react-icons/im";
import "./index.css"; // Import the CSS file

const testimonials = [
    {
        quote: "Psychiatry took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
        name: "Carl Rowan",
        company: "Aglets Inc",
        image: "/images/image3.png"
    },
    {
        quote: "Psychiatry gave me a sense of security, helping me deal with stress in my daily life. The services were really beneficial.",
        name: "Jane Doe",
        company: "Tech Innovators",
        image: "/images/image3.png"
    },
    {
        quote: "The sessions were convenient and really supportive. I recommend this service to everyone facing mental challenges.",
        name: "John Smith",
        company: "Creative Minds",
        image: "/images/image3.png"
    }
];


const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide function
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimonials-container">
      <h2>What Our Patients Are Saying</h2>

      {/* Testimonial card list */}
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              index === activeIndex ? "active" : "inactive"
            }`}
          >
            <div className="quote">
              <span className="quote-icon">“</span>
              {testimonial.quote}
            </div>
            <div className="testimonial-author">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="author-image"
              />
              <div className="author-info">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
             </div>
          </div>
        ))}
      </div>

      {/* Carousel Dots */}
      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

