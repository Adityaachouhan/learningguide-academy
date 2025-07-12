import React from 'react';
import DashboardLayout from './DashboardLayout';
import './MyCourses.css';

export default function MyCourses() {
  const courses = [
    {
      id: 1,
      title: 'Class 10 - Science',
      progress: 75,
      image: '/assets/course1.jpg',
    },
    {
      id: 2,
      title: 'Class 12 - Mathematics',
      progress: 60,
      image: '/assets/course2.jpg',
    },
  ];

  return (
    <DashboardLayout>
      <h2>🎓 My Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h5>{course.title}</h5>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p>{course.progress}% Complete</p>
            <button>Continue</button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
