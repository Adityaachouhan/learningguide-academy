import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Type your message here..." required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
