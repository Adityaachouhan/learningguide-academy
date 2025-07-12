import React from 'react';
import DashboardLayout from '../dashboard/DashboardLayout';
import './LiveClasses.css';

const classes = [
  {
    subject: 'Class 10 - Science',
    platform: 'YouTube',
    teacher: 'Mr. Sharma',
    time: 'Today at 5:00 PM',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    subject: 'Class 12 - Maths',
    platform: 'Zoom',
    teacher: 'Mrs. Verma',
    time: 'Tomorrow at 6:00 PM',
    link: 'https://zoom.us/j/1234567890',
  },
];

export default function LiveClasses() {
  return (
    <DashboardLayout>
      <div className="live-class-page">
        <h2>📺 Live Classes</h2>
        <div className="live-class-list">
          {classes.map((cls, index) => (
            <div key={index} className="live-class-card">
              <h5>{cls.subject}</h5>
              <p><strong>Teacher:</strong> {cls.teacher}</p>
              <p><strong>Time:</strong> {cls.time}</p>
              <p><strong>Platform:</strong> {cls.platform}</p>
              <a
                href={cls.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2"
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
