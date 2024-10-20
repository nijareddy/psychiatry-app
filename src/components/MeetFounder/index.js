import React from 'react';
import './index.css'; 
import { FaArrowRight } from "react-icons/fa6";

const MeetFounder = () => {
  return (
    <div className="meet-founder-container" id="introSection">
        <div className='n'>
      <div className="founder-image">
        <img src="/images/image3.png" alt="Lakeisha Appleton" />
      </div>
      <div className="founder-details">
        <h2>Meet The Founder</h2>
        <h3>Lakeisha Appleton</h3>
        <h4>FNP-C, PMHNP-BC</h4>
        <p>
          “Mental health problems don’t define who you are. They are something
          you experience. You walk in the rain and you feel the rain, but,
          importantly, YOU ARE NOT THE RAIN.” — Matt Haig
        </p>
        <button className="book-btn btn">
          Learn More <FaArrowRight/>
        </button>
      </div>
    </div>
    </div>
  );
};

export default MeetFounder;
