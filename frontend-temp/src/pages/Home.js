import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import CourseSection from '../components/CourseSection';
import AppDownloadSection from '../components/AppDownloadSection';
import StatsSection from '../components/StatsSection';
import CtaBanner from '../components/CtaBanner';
import TestimonialSection from '../components/TestimonialSection';
import '../styles/Home.css'; // Create this file if not already
import FaqSection from '../components/FaqSection';


export default function Home() {
  return (
    <div>
      <Hero />
      
    
      <section className="mission-section py-5 text-center bg-theme">
        <div className="container">
          <h2 className="fw-bold display-5 mb-3">
            Transforming Education for Every Learner — Anywhere, Anytime.
          </h2>
          <p className="lead mb-4">
            India’s Most Trusted Online Learning Platform for Class 6 to 12 and Vocational Courses
          </p>
          <div>
            <button className="btn btn-primary me-3">Join Demo Classes</button>
            <button className="btn btn-outline-primary">Browse Courses</button>
          </div>
        </div>
      </section>

      {/* Existing Sections */}
      <FeatureSection />
      <CourseSection />
      <AppDownloadSection />
      <FaqSection />
      <StatsSection />
      <CtaBanner />
      <TestimonialSection />
    </div>
  );
}
