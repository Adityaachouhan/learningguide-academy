import React from 'react';
import './TestimonialSection.css';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Anjali Verma',
      course: 'Class 10 - CBSE',
      feedback: 'LGA made maths so easy! The live classes and doubt support are amazing.',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Rahul Sinha',
      course: 'Spoken English',
      feedback: 'I speak confidently now thanks to regular practice sessions and mentors.',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
      name: 'Fatima Khan',
      course: 'Computer Basics',
      feedback: 'Learning computers was never this fun. I loved the hands-on approach!',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
  ];

  return (
    <div className="testimonial-section container py-5">
      <h2 className="text-center mb-4">🌟 What Our Students Say</h2>
      <div className="row">
        {testimonials.map((t, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="testimonial-card shadow p-4 h-100 text-center">
              <img src={t.image} alt={t.name} className="testimonial-img mb-3" />
              <h5>{t.name}</h5>
              <small className="text-muted">{t.course}</small>
              <p className="mt-3">{t.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
