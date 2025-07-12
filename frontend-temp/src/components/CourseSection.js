import React from 'react';

import './CourseSection.css';
import { Link } from 'react-router-dom';


const courses = [
  { title: 'Class 6 to 8', desc: 'Foundation learning and concept building for middle school students.' },
  { title: 'Class 9 & 10', desc: 'Board exam preparation with regular practice and NCERT focus.' },
  { title: 'Class 11 & 12', desc: 'Subject-specific learning for science/commerce/humanities streams.' },
  { title: 'Vocational Training', desc: 'Skill-based courses in finance, marketing, design, and more.' },
  { title: 'Programming & Development', desc: 'Hands-on courses in Java, Python, Web Dev & App Dev.' },
  { title: 'Exam Preparation', desc: 'Focused prep for NEET, JEE, CUET & government exams.' },
];

export default function CourseSection() {
  return (
    <section className="course-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Courses We Offer</h2>
        <div className="row">
          {courses.map((course, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Link to={course.link} className="text-decoration-none text-dark">
                <div className="course-card shadow-sm p-4 rounded h-100">
                  <div className="course-icon mb-3">{course.icon}</div>
                  <h5 className="fw-semibold">{course.title}</h5>
                  <p className="text-muted">{course.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <Link to="/courses" className="btn btn-primary mt-4 px-4 py-2 rounded-pill">
          View All Courses
        </Link>
      </div>
    </section>
  );
}