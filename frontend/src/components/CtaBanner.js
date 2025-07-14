import React from 'react';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner text-white py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-3 display-6">
          🎉 Join Demo Classes for Just ₹19/-
        </h2>
        <p className="lead mb-4">
          Experience live learning with expert teachers before you commit.
        </p>
        <button className="btn btn-light btn-lg px-4 py-2">
          Join Now
        </button>
      </div>
    </section>
  );
}
