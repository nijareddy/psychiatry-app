import React, { useState } from 'react';
import './index.css';

const StatesAndFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="states-container">
      <div className="states-section">
        <h1>Now Accepting Patients In The Following States</h1>
        <div className="states">
           <div className="state">
            <img src="/images/image6.jpg" alt="Arizona" />
            <h2>Arizona</h2>
            <p>In-person and Virtual appointment</p>
          </div>

          <div className="state">
            <img src="/images/image6.jpg" alt="Washington" />
            <h2>Washington</h2>
            <p>Virtual appointment</p>
          </div>

          <div className="state">
            <img src="/images/image6.jpg" alt="Oregon" />
            <h2>Oregon</h2>
            <p>Virtual appointment</p>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(1)}>
            <span>{openFAQ === 1 ? '−' : '+'}</span>
            Is Psychiatry confidential?
          </div>
          {openFAQ === 1 && (
            <div className="faq-answer">
              <p>We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(2)}>
            <span>{openFAQ === 2 ? '−' : '+'}</span>
            What is the best way to schedule an appointment?
          </div>
          {openFAQ === 2 && (
            <div className="faq-answer">
              <p>The best way to schedule an appointment is online or via phone.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(3)}>
            <span>{openFAQ === 3 ? '−' : '+'}</span>
            Do you prescribe controlled substance medication?
          </div>
          {openFAQ === 3 && (
            <div className="faq-answer">
              <p>Yes, we can prescribe controlled substances based on the patient's needs.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(4)}>
            <span>{openFAQ === 4 ? '−' : '+'}</span>
            How long does the initial appointment take?
          </div>
          {openFAQ === 4 && (
            <div className="faq-answer">
              <p>The initial appointment usually takes around 60 minutes.</p>
            </div>
          )}
        </div>

        <div className="cta-button">
          <button className='view-services-btn'>See all FAQ →</button>
        </div>
      </div>
    </div>
  );
};

export default StatesAndFAQ;