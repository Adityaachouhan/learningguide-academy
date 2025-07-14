import React from 'react';

export default function FeatureSection() {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-5">Why Choose LearningGuide Academy?</h2>
        <div className="row g-4">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="mb-2">📚 Practical Curriculum</h5>
              <p className="text-muted mb-0">Live classes, hands-on projects, and real-world skills.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="mb-2">👨‍🏫 Expert Teachers</h5>
              <p className="text-muted mb-0">Top educators from IITs, NITs, and industry professionals.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="mb-2">💼 Career-Focused</h5>
              <p className="text-muted mb-0">Courses designed to get you internships and jobs.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="mb-2">💸 Affordable</h5>
              <p className="text-muted mb-0">Get the best education without burning a hole in your pocket.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
