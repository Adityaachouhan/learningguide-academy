import React from 'react';
import CountUp from 'react-countup';
import './StatsSection.css';

export default function StatsSection() {
  const stats = [
    { label: 'Students Trained', value: 15000, icon: '🎓' },
    { label: 'Expert Teachers', value: 120, icon: '👨‍🏫' },
    { label: 'Courses Available', value: 45, icon: '📚' },
    { label: 'Demo Classes', value: 1000, icon: '🧪' },
  ];

  return (
    <section className="stats-section py-5 text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">Trusted by Thousands of Learners</h2>
        <div className="row g-4">
          {stats.map((item, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="stat-box p-4 bg-dark rounded shadow-sm h-100">
                <div className="stat-icon fs-1 mb-2">{item.icon}</div>
                <h3 className="stat-value display-6 fw-bold">
                  <CountUp end={item.value} duration={2} separator="," />
                </h3>
                <p className="mb-0">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
