import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar p-3">
      <h4 className="text-white mb-4">LGA</h4>
      <ul className="sidebar-menu">
  <li><Link to="/student">Dashboard</Link></li>
  <li><Link to="/student/classes">📚 My Class</Link></li>
  <li><Link to="/student/live">📺 Live Classes</Link></li>
  <li><Link to="/student/quiz">📝 Quiz / Test</Link></li>
  <li><Link to="/student/ai-doubt">🤖 AI Doubt Session</Link></li>
  <li><Link to="/student/chat">💬 Group Chat</Link></li>
  <li><Link to="/student/profile">👤 Profile</Link></li>
  <li><Link to="/">Logout</Link></li>
</ul>
      <div className="sidebar-footer text-center mt-5">
        <p className="text-white">© 2025 Veps infotech</p>
        <p className="text-white">All rights reserved.</p>
      </div>
    </div>
  );
}