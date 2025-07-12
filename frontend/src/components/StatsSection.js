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
    <div className="stats-section container-fluid py-5 text-white">
      <div className="container text-center">
        <h2 className="mb-5">Trusted by Thousands of Learners</h2>
        <div className="row">
          {stats.map((item, index) => (
            <div className="col-md-3 col-6 mb-4" key={index}>
              <div className="stat-box shadow">
                <div className="stat-icon mb-2">{item.icon}</div>
                <h3 className="stat-value">
                  <CountUp end={item.value} duration={2} separator="," />
                </h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
