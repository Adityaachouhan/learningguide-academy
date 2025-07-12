import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Make sure this path matches your logo file

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4">
      <Link className="navbar-brand d-flex align-items-center" to="/">
       <img
  src={logo}
  alt="LGA Logo"
  className="me-2"
  height="40"
  style={{ borderRadius: '50%' }}
/>

        <span className="fw-bold text-white fs-5">LearningGuide Academy</span>
      </Link>

      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav me-3 mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/courses">Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="d-flex">
          <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
          <Link to="/signup" className="btn btn-light text-primary fw-bold">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
