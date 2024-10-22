import React from 'react';
import { FaFacebookF, FaTwitter, FaTiktok, FaLinkedin } from 'react-icons/fa';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">What We Treat</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Fees and Insurance</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Cookie Settings</a></li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <div className="footer-section">
            <h3>Business Hours</h3>
            <p>Monday - Thursday</p>
            <p>09:00 am - 4:00 pm</p>
          </div>

          {/* Careers */}
          <div className="footer-section">
            <h3>For Careers</h3>
            <p>Interested in joining the psychiatry Team?</p>
            <a href="mailto:career@psychiatry.com">career@psychiatry.com</a>
          </div>
        </div>

        {/* Location */}
        <div>
        <div className='nav'>
              <div className='app-logo'></div>
              <span className='app-name'>PSYCHIATRY</span>
            </div>
          <div className="footer-section">
            <h3>Locate us</h3>
            <p>1820 E Ray Road, STE A107, Chandler, Arizona 85225</p>
            <p>Phone: 480-526-9292</p>
          </div>

          {/* Social Media */}
          <div className="footer-section">
          <h3>Follow us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Psychiatry. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;