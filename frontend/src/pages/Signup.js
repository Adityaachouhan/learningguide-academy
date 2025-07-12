import React, { useState } from 'react';
import api from '../utils/api';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async e => {
  e.preventDefault();
  try {
    const res = await api.post('/auth/signup', formData);  // ← assign response here
    console.log(res.data); // ✅ Option A: Use it here to log the response
    alert('Signup successful!');
  } catch (err) {
    alert('Signup failed: ' + (err.response?.data?.message || 'Server error'));
  }
};


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Create an Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Name</label>
                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-success w-100">Sign Up</button>
              <p className="mt-3 text-center">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
