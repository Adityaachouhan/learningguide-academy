import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-5 bg-white about-section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT TEXT SECTION */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">About LearningGuide Academy</h2>
            <p className="text-muted">
              LearningGuide Academy is India’s trusted platform for students from class 6 to 12, as well as for career-ready learners. Our live, practical, and affordable courses help bridge the gap between traditional education and real-world skills.
            </p>
            <p className="text-muted">
              Whether you're preparing for boards, building your resume, or exploring tech like programming or digital marketing — we’re here to guide you with mentorship, real teachers, and career support.
            </p>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="col-md-6 text-center">
            <img 
              src="/images/about.jpg" 
              alt="About LearningGuide Academy" 
              className="img-fluid rounded shadow" 
              style={{ maxHeight: '350px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
