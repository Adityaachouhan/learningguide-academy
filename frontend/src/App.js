// App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import StudentHome from './dashboard/StudentHome';
import MyCourses from './dashboard/MyCourses';
import Profile from './dashboard/Profile';
import LiveClasses from './student/LiveClasses';
import QuizTest from './student/QuizTest';
import GroupChat from './pages/GroupChat';

function AppRoutes() {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/signup'];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<StudentHome />} />
        <Route path="/student/courses" element={<MyCourses />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/live" element={<LiveClasses />} />
        <Route path="/student/quiz" element={<QuizTest />} />
        <Route path="/group-chat" element={<GroupChat />} />
      </Routes>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default AppRoutes;
