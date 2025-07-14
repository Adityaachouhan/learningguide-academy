import React from 'react';
import './CoursesSection.css';

const courses = [
  { title: 'Class 6-10 (CBSE/ICSE)', description: 'Core subjects with live doubt-solving.' },
  { title: 'Spoken English', description: 'Improve your speaking fluency & confidence.' },
  { title: 'Computer Basics', description: 'Hands-on training for beginners.' },
  { title: 'Coding for Kids', description: 'Fun programming lessons using logic & games.' },
  { title: 'Class 11-12 (PCM/PCB)', description: 'Board + Entrance preparation.' },
  { title: 'Competitive Exams', description: 'Coaching for SSC, Bank, Railway & more.' },
];

export default function CoursesSection() {
  return (
    <section className="courses-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">📚 Courses We Offer</h2>
        <div className="row">
          {courses.map((course, idx) => (
            <div className="col-sm-6 col-md-4 mb-4" key={idx}>
              <div className="course-card h-100 p-4 shadow rounded bg-white text-center">
                <h5 className="fw-bold mb-2">{course.title}</h5>
                <p className="text-muted">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
