import React from 'react';
import './AppDownloadSection.css';

export default function AppDownloadSection() {
  return (
    <section className="app-download-section py-5 bg-light text-center text-md-start">
      <div className="container">
        <div className="row align-items-center">
          {/* App Text Section */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3 text-primary">
              📱 Download Our App
            </h2>
            <p className="lead mb-4">
              Access classes, notes, and progress from anywhere, anytime.
            </p>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-4 py-2"
            >
              Get it on Play Store
            </a>
          </div>

          {/* Optional App Image */}
          <div className="col-12 col-md-6 text-center">
            <img
              src="/images/app-preview.png" // <-- update this path as needed
              alt="App Preview"
              className="img-fluid app-preview"
              style={{ maxHeight: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
