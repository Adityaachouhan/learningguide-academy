// src/pages/About.js
import React from 'react';
import './About.css';

const teachers = [
  {
    name: 'Aradhna Singh',
    subject: 'Biology',
    image: require('../assets/faculty/aradhna.jpg'),
  },
  {
    name: 'Ritwik Chatterjee',
    subject: 'Physics',
    image: require('../assets/faculty/ritwik.jpg'),
  },
  {
    name: 'Abhishek Mishra',
    subject: 'Mathematics & Computer',
    image: require('../assets/faculty/abhishek.jpg'),
  },
  {
    name: 'Abdul Hafiz',
    subject: 'SST',
    image: require('../assets/faculty/abdulhafiz.jpg'),
  },
  {
    name: 'Ashra Shahin',
    subject: 'Commerce',
    image: require('../assets/faculty/ashra.jpg'),
  },
  {
    name: 'Rafat Kalim',
    subject: 'Maths & Science',
    image: require('../assets/faculty/rafat.jpg'),
  },
  {
    name: 'Geeta Mam',
    subject: 'Arts',
    image: require('../assets/faculty/geeta.jpg'),
  },
  {
    name: 'Sagar Kumar',
    subject: 'Biology',
    image: require('../assets/faculty/sagar.jpg'),
  },
  {
    name: 'Mohammad Imran',
    subject: 'Founder',
    image: require('../assets/faculty/imran.jpg'),
  },
  {
    name: 'MD Imran Ansari',
    subject: 'Managing Director',
    image: require('../assets/faculty/imranansari.jpg'),
  },
];

export default function About() {
  return (
    <div className="about-container container py-5">
      <h2 className="text-center fw-bold mb-4">About LearningGuide Academy</h2>

      <div className="about-section mb-5">
        <h4>🎯 Our Mission</h4>
        <p>
          To empower students through affordable, accessible, and high-quality education using modern technology,
          personalized mentoring, and innovative teaching practices.
        </p>
      </div>

      <div className="about-section mb-5">
        <h4>👁️ Our Vision</h4>
        <p>
          To become India’s most trusted and impactful digital learning platform that reaches every student across urban and rural landscapes.
        </p>
      </div>

      <div className="about-section mb-5">
        <h4>🤝 Why Students Trust Us</h4>
        <ul>
          <li>Affordable fees with demo classes for just ₹19/-</li>
          <li>Live + recorded sessions available</li>
          <li>Access to doubt assistant powered by AI</li>
          <li>Expert faculty from top institutions</li>
          <li>Classroom and mobile app access</li>
        </ul>
      </div>

      <h4 className="text-center mb-4">👩‍🏫 Our Faculty Members</h4>
      <div className="row g-4 justify-content-center">
        {teachers.map((t, i) => (
          <div className="col-md-3 col-sm-6 col-10" key={i}>
            <div className="teacher-card text-center shadow-sm p-3 bg-white rounded">
              <img src={t.image} alt={t.name} className="faculty-img mb-2" />
              <h6 className="fw-bold mb-1">{t.name}</h6>
              <p className="text-muted small">{t.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
