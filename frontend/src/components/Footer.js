import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-section bg-dark text-white pt-5">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold">LearningGuide Academy</h5>
            <p>Empowering students with modern education & tools.</p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/courses" className="footer-link">Courses</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-6 col-md-3">
            <h6 className="fw-semibold mb-3">Contact Us</h6>
            <p className="mb-1">📧 support@learningguide.com</p>
            <p className="mb-1">📞 +91 98765 43210</p>
            <p>📍 India</p>
          </div>

          {/* Social */}
          <div className="col-12 col-md-3">
            <h6 className="fw-semibold mb-3">Follow Us</h6>
            <div className="d-flex gap-3 fs-5">
              <a href="https://www.facebook.com/profile.php?id=61577964846096" target="_blank" rel="noreferrer" className="text-white"><FaFacebookF /></a>
              <a href="https://www.instagram.com/learningguideacademy" target="_blank" rel="noreferrer" className="text-white"><FaInstagram /></a>
              <a href="https://www.youtube.com/@LearningGuideAcademy" target="_blank" rel="noreferrer" className="text-white"><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/learningguideacademy" target="_blank" rel="noreferrer" className="text-white"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <hr className="border-light mt-5" />

        <div className="text-center pb-3">
          <p className="mb-1">© 2025 LearningGuide Academy | All Rights Reserved</p>
          <p className="mb-0">Powered by <strong>VEPS Infotech</strong></p>
        </div>
      </div>
    </footer>
  );
}
