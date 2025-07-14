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
    <section className="testimonial-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">🌟 What Our Students Say</h2>
        <div className="row g-4">
          {testimonials.map((t, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="testimonial-card p-4 text-center h-100 shadow-sm rounded bg-white">
                <img
                  src={t.image}
                  alt={t.name}
                  className="testimonial-img rounded-circle mb-3"
                />
                <h5 className="fw-semibold">{t.name}</h5>
                <small className="text-muted">{t.course}</small>
                <p className="mt-3">{t.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
