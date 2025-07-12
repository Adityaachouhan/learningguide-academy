import React from 'react';
import './AppDownloadSection.css';

export default function AppDownloadSection() {
  return (
    <section className="app-download text-center py-5">
      <h2 className="fw-bold mb-2">
        <span role="img" aria-label="App">📱</span> Download Our App
      </h2>
      <p className="lead mb-4">Access classes, notes, and progress from anywhere, anytime.</p>
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary px-4 py-2"
      >
        Get it on Play Store
      </a>
    </section>
  );
}
