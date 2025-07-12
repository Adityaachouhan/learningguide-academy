import React from 'react';

export default function FeatureSection() {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Why Choose LearningGuide Academy?</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5>📚 Practical Curriculum</h5>
              <p className="text-muted">Live classes, hands-on projects, and real-world skills.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5>👨‍🏫 Expert Teachers</h5>
              <p className="text-muted">Top educators from IITs, NITs, and industry professionals.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5>💼 Career-Focused</h5>
              <p className="text-muted">Courses designed to get you internships and jobs.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5>💸 Affordable</h5>
              <p className="text-muted">Get the best education without burning a hole in your pocket.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
