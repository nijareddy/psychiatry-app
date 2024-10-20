import React from 'react';
import './index.css'; // Assume you create a CSS file for styling
import { FaArrowRight } from "react-icons/fa6";

const TreatmentFocus = () => {
  return (
    <div id="treatment-focus" className='t'>
      <h2>Our Treatment Focus</h2>

      <div className="treatment-container">
        {/* Mental Health Section */}
        <div className="treatment-item">
          <img src="/images/image4.jpg" alt="Mental Health" />
          <div className="treatment-content">
            <h3>Mental Health</h3>
            <p>
              Mental health is our emotional, psychological, and social
              well-being. It affects how we feel, think, and act. It also helps
              determine how we handle stress, build relationships, relate to
              others, and make healthy life decisions. At Ada Psychiatry, we
              specialize in conditions like Depression, Anxiety, ADHD, Bipolar,
              and more.
            </p>
            <button className="book-btn btn">
          Learn More <FaArrowRight/>
        </button>
          </div>
        </div>

        {/* Addiction And Recovery Section */}
        <div className="treatment-item reverse">
          <img src="/images/image4.jpg" alt="Addiction and Recovery" />
          <div className="treatment-content">
            <h3>Addiction and Recovery</h3>
            <p>
              Addiction is a chronic dysfunction of the brain system. We assess
              your risk for addiction and create a comprehensive treatment plan.
              Our experts are trained in medication-assisted treatment, so you
              do not have to continue to struggle alone.
            </p>
            <button className="book-btn btn">
          Learn More <FaArrowRight/>
        </button>
          </div>
        </div>

        {/* Supervised Medical Weight Loss Section */}
        <div className="treatment-item">
          <img src="/images/image4.jpg" alt="Supervised Medical Weight Loss" />
          <div className="treatment-content">
            <h3>Supervised Medical Weight Loss</h3>
            <p>
              Medically supervised weight loss is designed for individuals who
              are obese and have difficulty losing weight. We provide
              supervision, FDA-approved medications, injections, diet plans, and
              exercise to help with each client's needs.
            </p>
            <button className="book-btn btn">
          Learn More <FaArrowRight/>
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentFocus;
