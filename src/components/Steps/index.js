import React from 'react';
import './index.css';

const Steps = () => {
  return (
    <div className="steps-container">
      <h1>Four Simple Steps To Get Started</h1>
      
      <div className="steps">
        <div className="step">
          <img src="https://img.icons8.com/ios/50/ffffff/calendar--v1.png" alt="Calendar Icon"/>
          <h2>01</h2>
          <p>Schedule an appointment</p>
        </div>

        <div className="step">
          <img src="https://img.icons8.com/ios/50/ffffff/handshake.png" alt="Handshake Icon"/>
          <h2>02</h2>
          <p>Connect with your provider</p>
        </div>

        <div className="step">
          <img src="https://img.icons8.com/ios/50/ffffff/conference-call.png" alt="Discussion Icon"/>
          <h2>03</h2>
          <p>Discuss your comprehensive assessment</p>
        </div>

        <div className="step">
          <img src="https://img.icons8.com/ios/50/ffffff/treatment-plan.png" alt="Plan Icon"/>
          <h2>04</h2>
          <p>Receive your individualized treatment plan</p>
        </div>
      </div>

      <div className="cta-button">
        <button className='view-services-btn'>Schedule a Call →</button>
      </div>
    </div>
  );
}

export default Steps;