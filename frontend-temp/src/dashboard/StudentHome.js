import React from 'react';
import DashboardLayout from './DashboardLayout';
import GeminiChat from '../components/GeminiChat';

export default function StudentHome() {
  return (
   
    <div className="student-home">
      <DashboardLayout>
      <h2 className="mb-3">📊 Dashboard Overview</h2>
      <p>Welcome back, Aditya! Here’s your learning progress and upcoming classes.</p>
      {/* You can insert cards, tables, etc. here */}
      <GeminiChat />
    </DashboardLayout>
      {/* Other student dashboard content */}
      
      <h3>Ask a Doubt</h3>
      <GeminiChat />
    </div>
  );
}

    