import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center p-4">
      <div className="container">
        <h4>Contact Us</h4>
        <p>Email: jekoshy@syr.edu | Phone: (315) 415-6241</p>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jonathan-katikala/" target="_blank" rel="noreferrer" className="social-icon mx-3">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.instagram.com/bridge.su/" target="_blank" rel="noreferrer" className="social-icon mx-3">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="mailto:jekoshy@syr.edu" className="social-icon mx-3">
            <i className="fas fa-envelope"></i> Gmail
          </a>
        </div>
        
        <p>&copy; {new Date().getFullYear()} Bridge Evangelical Chaplaincy. All Rights Reserved by Jay Koshy</p>
      </div>
    </footer>
  );
};

export default Footer;