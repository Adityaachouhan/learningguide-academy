import React from 'react';
import './FaqSection.css';

export default function FaqSection() {
  return (
    <section className="faq-section py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>

        <div className="accordion accordion-flush" id="faqAccordion">
          <div className="accordion-item mb-3 border rounded">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
                aria-expanded="true"
                aria-controls="faq1"
              >
                ✅ Can I attend a free demo class?
              </button>
            </h2>
            <div
              id="faq1"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes! You can book and attend a free trial class anytime through our platform.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-3 border rounded">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
                aria-expanded="false"
                aria-controls="faq2"
              >
                🕒 What if I miss a class?
              </button>
            </h2>
            <div
              id="faq2"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You’ll get access to recorded sessions and notes, so you can catch up anytime.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-3 border rounded">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
                aria-expanded="false"
                aria-controls="faq3"
              >
                📝 Do you provide notes and materials?
              </button>
            </h2>
            <div
              id="faq3"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, we provide downloadable study materials and PDFs after every class.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
