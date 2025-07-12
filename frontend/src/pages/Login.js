import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Login to LGA</h3>
            <form>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" required />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
              <p className="mt-3 text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
