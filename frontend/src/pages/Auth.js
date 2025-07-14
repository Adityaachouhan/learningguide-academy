import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

export default function AuthPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [loginForm, setLoginForm] = useState({ identifier: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', phone: '', password: '', role: 'student' });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        const err = await res.json();
        setErrorMsg(err.message || 'Invalid credentials.');
      }
    } catch {
      setErrorMsg('Server error. Please try again.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const res = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupForm),
      });

      if (res.ok) {
        setSuccessMsg('Signup successful! You can now log in.');
        setTimeout(() => handleTabSwitch('login'), 2000);
      } else {
        const err = await res.json();
        setErrorMsg(err.message || 'Signup failed.');
      }
    } catch {
      setErrorMsg('Server error. Please try again.');
    }
  };

  return (
    <div className="auth-page container-fluid">
      <div className="row min-vh-100">
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-primary text-white text-center px-4">
          <div>
            <h2 className="fw-bold mb-3">Welcome to LGA 🚀</h2>
            <p>India's most trusted learning platform for Classes 6–12 & skill development</p>
            <img src="/images/login-illustration.svg" alt="Illustration" className="img-fluid mt-4" style={{ maxHeight: '280px' }} />
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center px-4">
          <div className="auth-box w-100" style={{ maxWidth: '400px' }}>
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item w-50 text-center">
                <button className={`nav-link ${activeTab === 'login' ? 'active' : ''}`} onClick={() => handleTabSwitch('login')}>Login</button>
              </li>
              <li className="nav-item w-50 text-center">
                <button className={`nav-link ${activeTab === 'signup' ? 'active' : ''}`} onClick={() => handleTabSwitch('signup')}>Signup</button>
              </li>
            </ul>

            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            {successMsg && <div className="alert alert-success">{successMsg}</div>}

            {activeTab === 'login' && (
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label>Email or Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={loginForm.identifier}
                    onChange={(e) => setLoginForm({ ...loginForm, identifier: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            )}

            {activeTab === 'signup' && (
              <form onSubmit={handleSignup}>
                <div className="mb-3">
                  <label>Name</label>
                  <input type="text" className="form-control" required value={signupForm.name} onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" className="form-control" required value={signupForm.email} onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label>Phone</label>
                  <input type="text" className="form-control" required value={signupForm.phone} onChange={(e) => setSignupForm({ ...signupForm, phone: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" required value={signupForm.password} onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label>Role</label>
                  <select className="form-select" value={signupForm.role} onChange={(e) => setSignupForm({ ...signupForm, role: e.target.value })}>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">Signup</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
