import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import './Profile.css';

export default function Profile() {
  const [formData, setFormData] = useState({
    name: 'Aditya Chouhan',
    email: 'aditya@example.com',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    // Here, call the backend API for actual update
  };

  return (
    <DashboardLayout>
      <div className="profile-container">
        <h2>👤 My Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Leave blank to keep current password"
            />
          </div>

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </DashboardLayout>
  );
}
