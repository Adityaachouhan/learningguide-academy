import React, { useState } from 'react';
import './Signup.css';
import signupArt from '../assets/login.png'; // ✅ Reuse login image

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signup Data:', formData);
  };

  const handleGoogleSignup = () => {
    alert('Google Signup clicked');
  };

  return (
    <div className="signup-page container py-5">
      <div className="row align-items-center justify-content-center">
        {/* IMAGE COLUMN */}
        <div className="col-md-6 d-none d-md-block text-center">
          <img
            src={signupArt}
            alt="Signup"
            className="img-fluid"
            style={{ maxHeight: '450px' }}
          />
        </div>

        {/* FORM COLUMN */}
        <div className="col-md-6">
          <div className="signup-form p-4 shadow rounded bg-white">
            <h2 className="mb-3 text-center">Create Your Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Email or Phone *</label>
                <input
                  type="text"
                  name="emailOrPhone"
                  className="form-control"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Password *</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Confirm Password *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>

              <button
                type="button"
                className="btn btn-outline-dark w-100 mt-2"
                onClick={handleGoogleSignup}
              >
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="G"
                  className="me-2"
                />
                Sign up with Google
              </button>
            </form>

            <p className="mt-3 text-center">
              Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
