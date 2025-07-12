import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h4>LearningGuide Academy</h4>
          <p>Empowering students with modern education & tools.</p>
        </div>

        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h5>Contact Us</h5>
          <p>Email: support@learningguide.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

        <div className="footer-social">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61577964846096&mibextid=ZbWKwL"><FaFacebookF /></a>
            <a href="https://www.instagram.com/learningguideacademy?igsh=ODh0N2V6ZTlhZW11"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61577964846096&mibextid=ZbWKwL"><FaYoutube /></a>
            <a href="https://www.instagram.com/learningguideacademy?igsh=ODh0N2V6ZTlhZW11"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 LearningGuide Academy | All Rights Reserved</p>
      </div>
    </footer>
  );
}
