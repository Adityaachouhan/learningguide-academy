import React from 'react';

export default function About() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">About LearningGuide Academy</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted">
              LearningGuide Academy is India’s trusted platform for students from class 6 to 12 and skill-based learners. Our mission is to make education practical, accessible, and career-focused.
            </p>
            <p className="text-muted">
              From board exam prep to job-ready skills like programming, DSA, marketing, and more — we bring real teachers, mentorship, and career guidance directly to your screen.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/images/about.jpg"
              alt="About"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '350px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
