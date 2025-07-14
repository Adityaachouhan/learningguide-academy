import React, { useState } from 'react';
import './Login.css';
import loginArt from '../assets/login.png'; // Make sure this image exists

export default function Login() {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    // TODO: Call backend login API here
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google clicked');
    // TODO: Add Google OAuth logic here
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        {/* Image Column */}
        <div className="col-md-6 d-none d-md-block text-center">
          <img
            src={loginArt}
            alt="Login Illustration"
            className="img-fluid"
            style={{ maxHeight: '450px' }}
          />
        </div>

        {/* Login Form Column */}
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Welcome Back 👋</h3>

            <form onSubmit={handleSubmit}>
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

              {/* Forgot password link */}
              <div className="mb-3 text-end">
                <a href="/forgot-password" className="text-primary text-decoration-none">
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="text-center my-3">or</div>

            {/* Google login */}
            <button className="btn btn-outline-danger w-100" onClick={handleGoogleLogin}>
              <i className="bi bi-google me-2"></i> Login with Google
            </button>

            <div className="text-center mt-3">
              New user? <a href="/signup">Create an account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}