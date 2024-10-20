import React from 'react';
import './index.css';
import { FaArrowRight } from "react-icons/fa6";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


const OurServices = () => {
  return (
    <div id="our-services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service">
        <div className="service-item">
        <LocalHospitalIcon className='service-item-img'/>
         
        </div>
        <h3>Psychiatric Evaluation</h3>
        </div>
        <div className="service">
        <div className="service-item">
          <LocalHospitalIcon className='service-item-img'/>
        </div>
        <h3>Medication Management</h3>

        </div>
        <div className="service">
        <div className="service-item">
        <LocalHospitalIcon className='service-item-img'/>
          
        </div>
        <h3>Supportive Psychotherapy</h3>
        </div>
        <div className="service">
        <div className="service-item">
        <LocalHospitalIcon className='service-item-img'/>
        
        </div>
        <h3>ADHD Screening</h3>
        </div>
        <div className="service">
        <div className="service-item">
        <LocalHospitalIcon className='service-item-img'/>
         
        </div>
        <h3>MAT Treatment</h3>
        </div>
        <div className="service">
        <div className="service-item">
        <LocalHospitalIcon className='service-item-img'/>
         
        </div>
        <h3>Gene Sight Testing</h3>
        </div>
      </div>

      <button className='view-services-btn'>View Our Services <FaArrowRight/></button>
    </div>
  );
};

export default OurServices;
