import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Minaxi Gajjar Foundation</h4>
            <p>Empowering dreams through education since 2019</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">📘</a>
              <a href="#" aria-label="Twitter" className="social-link">🐦</a>
              <a href="#" aria-label="Instagram" className="social-link">📷</a>
              <a href="#" aria-label="LinkedIn" className="social-link">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/scholarship-program">Scholarship Program</Link></li>
              <li><Link to="/apply">Apply Now</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/financial-transparency">Financial Reports</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 Ahmedabad, Gujarat 380001</p>
              <p>📞 +91 79 1234 5678</p>
              <p>✉️ info@minaxigajjar.org</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Minaxi Gajjar Foundation. All rights reserved.</p>
          <p>Built with ❤️ for education</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;