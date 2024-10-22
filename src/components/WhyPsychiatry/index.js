import React, { useState } from "react";
import "./index.css"; // Import the CSS file
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const PsychiatryPage = () => {
  const [isOpen, setIsOpen] = useState({
    access: false,
    concierge: false,
    quality: false,
    empathy: false
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="psychiatry-container">
      <div className="image-text-container">
        <div className="image-container">
          <img 
            src="/images/image5.jpg" 
            alt="Psychiatry Session" 
          />
        </div>
        <div className="text-container">
          <h2>Why Should You Choose Psychiatry?</h2>
 
          <div className="text-section">
            <div className="section-header" onClick={() => toggleSection('access')}>
            <button className="toggle-button">{isOpen.access ? <AiOutlineMinus/> : <GoPlus/>}</button>
              <h3>Convenient access</h3>
             
            </div>
            {isOpen.access && (
              <p>
                We Offer In-Person And Virtual Psychiatry Services Where You Can
                Meet Your Provider In Person Or At The Convenience Of Your Own Home.
              </p>
            )}
          </div>

          <div className="text-section">
            <div className="section-header" onClick={() => toggleSection('concierge')}>
            <button className="toggle-button">{isOpen.concierge ? <AiOutlineMinus/> : <GoPlus/>}</button>
              <h3>Concierge approach</h3>
             
            </div>
            {isOpen.concierge && (
              <p>
                A personalized service approach that ensures your mental health
                needs are fully addressed with care.
              </p>
            )}
          </div>

          <div className="text-section">
            <div className="section-header" onClick={() => toggleSection('quality')}>
            <button className="toggle-button">{isOpen.quality ? <AiOutlineMinus/> : <GoPlus/>}</button>
              <h3>High quality service</h3>
              
            </div>
            {isOpen.quality && (
              <p>
                We provide exceptional psychiatric care, tailored to your individual needs.
              </p>
            )}
          </div>

          <div className="text-section">
            <div className="section-header" onClick={() => toggleSection('empathy')}>
            <button className="toggle-button">{isOpen.empathy ? <AiOutlineMinus/> : <GoPlus/>}</button>
              <h3>Trusted and empathetic providers</h3>
            
            </div>
            {isOpen.empathy && (
              <p>
                Our providers are known for their compassionate care and understanding of your needs.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychiatryPage;
