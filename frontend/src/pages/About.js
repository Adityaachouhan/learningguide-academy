  import React from 'react';
import '../pages/About.css';

// Import images
import aradhna from '../assets/aradhna.jpg';
import ritwik from '../assets/ritwik.jpg';
import abhishek from '../assets/abhishek.jpg';
import abdulhafiz from '../assets/abdulhafiz.jpg';
import ashra from '../assets/ashra.jpg';
import rafat from '../assets/rafat.jpg';
import geeta from '../assets/geeta.jpg';
import sagar from '../assets/sagar.jpg';
import imran from '../assets/imran.jpg';
import imranansari from '../assets/imranansari.jpg';
import teacher1 from '../assets/teacher1.jpg';
import teacher2 from '../assets/teachers2.jpg';
import banner from '../assets/about-banner.png';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const teachers = [
  { name: 'Aradhna Singh', subject: 'Biology', img: aradhna },
  { name: 'Ritwik Chatterjee', subject: 'Physics', img: ritwik },
  { name: 'Abhishek Mishra', subject: 'Mathematics & Computer', img: abhishek },
  { name: 'Abdul Hafiz', subject: 'Social Studies', img: abdulhafiz },
  { name: 'Ashra Shahin', subject: 'Commerce', img: ashra },
  { name: 'Rafat Kalim', subject: 'Maths & Science', img: rafat },
  { name: 'Geeta Mam', subject: 'Arts Department', img: geeta },
  { name: 'Sagar Kumar', subject: 'Biology', img: sagar }
];

const About = () => {
  return (
    <div className="about-page">
      {/* Banner */}
      <div className="about-banner text-white text-center position-relative" style={{ maxHeight: '350px', overflow: 'hidden' }}>
        <Image src={banner} alt="About Banner" fluid className="w-100" style={{ objectFit: 'cover', height: '250px' }} />
        <div className="banner-overlay position-absolute top-50 start-50 translate-middle">
          <h1 className="mb-0">About Us</h1>
        </div>
      </div>

      {/* Welcome Section */}
      <Container className="pt-4">
        <h2 className="text-primary fw-bold">Welcome to LearningGuide Academy</h2>
        <blockquote className="blockquote">"Your Learning, Our Commitment!"</blockquote>
        <p>
          Welcome to Learningguide Academy, a next-generation online coaching platform designed to transform the way students learn.
          We provide comprehensive, concept-based, and exam-oriented online classes for school students and skill development courses.
        </p>
        <p>
          Our mission is simple – to build a strong academic foundation through clear explanations, smart techniques, and regular assessments.
          From class 6 to 12 (CBSE/ICSE/State Boards), and more – we guide students on every learning path.
        </p>
      </Container>

      {/* Mission Section */}
      <Container className="bg-light py-5">
        <h2 className="fw-bold mb-4">✅ Our Mission – Learningguide Academy</h2>
        <p>
          At Learningguide Academy, our mission is to empower every student with the right knowledge, skills,
          and mindset to achieve academic excellence and personal growth.
        </p>
        <p>
          We believe that every learner is unique – with different strengths, pace, and potential.
          Our mission is to guide, support, and uplift students at every stage of their educational journey by offering
          conceptual clarity, interactive learning tools, and expert mentorship.
        </p>
        <ul>
          <li>✅ Make quality education accessible and affordable for students across urban and rural India</li>
          <li>✅ Break down complex topics into simple, easy-to-understand lessons with real-life examples</li>
          <li>✅ Develop independent thinking, problem-solving skills, and lifelong learning habits among students</li>
          <li>✅ Use technology and data-driven teaching to personalize learning and improve performance</li>
          <li>✅ Support not just academic success but also confidence, communication, and career readiness</li>
        </ul>
      </Container>

      {/* Leadership */}
      <Container className="py-5">
        <h2 className="fw-bold mb-4 text-center">Leadership</h2>
        <Row>
          <Col md={3} sm={6} xs={12} className="mb-4 mx-auto">
            <Card className="text-center h-100">
              <Card.Img src={imran} style={{ height: '350px', width: '100%', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Mohammad Imran</Card.Title>
                <Card.Text>Founder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} className="mb-4 mx-auto">
            <Card className="text-center h-100">
              <Card.Img src={imranansari} style={{ height: '350px', width: '100%', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>MD Imran Ansari</Card.Title>
                <Card.Text>Managing Director</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Faculty Section */}
      <Container className="bg-light py-5">
        <h2 className="fw-bold mb-4 text-center">✅ Our Faculty</h2>
        <Row>
          {teachers.map((teacher, idx) => (
            <Col md={3} sm={6} xs={12} key={idx} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Img src={teacher.img} style={{ height: '260px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{teacher.name}</Card.Title>
                  <Card.Text>{teacher.subject}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Group Photos */}
      <Container className="py-5">
        <h2 className="fw-bold mb-4 text-center">✅ Faculty Teams</h2>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="text-center">
              <Card.Img src={teacher1} style={{ height: '260px', objectFit: 'cover' }} />
              <Card.Body><Card.Title>Team A</Card.Title></Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="text-center">
              <Card.Img src={teacher2} style={{ height: '260px', objectFit: 'cover' }} />
              <Card.Body><Card.Title>Team B</Card.Title></Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Vision Section */}
      <Container className="bg-light py-5">
        <h2 className="fw-bold mb-4 text-center">✅ Our Vision – Learningguide Academy</h2>
        <p>
          To become India’s most trusted and transformative online learning platform, empowering every student—from the smallest village
          to the largest city—with affordable, high-quality, and personalized education.
        </p>
        <p>
          We envision a future where no learner is left behind, where education is accessible anytime, anywhere, and where every student
          achieves academic excellence, life skills, and confidence to succeed in the modern world.
        </p>
      </Container>

      {/* Thank You */}
      <Container className="py-5 text-center">
        <h2 className="fw-bold">✅ Thank You!</h2>
        <p>
          Thank you for visiting Learningguide Academy. We look forward to helping you achieve your educational goals and dreams!
        </p>
      </Container>
    </div>
  );
};

export default About;
