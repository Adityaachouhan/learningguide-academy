import React, { useState } from 'react';
import DashboardLayout from '../dashboard/DashboardLayout';
import './QuizTest.css';

const questions = [
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "NaCl", "CO2"],
    answer: "H2O",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is 12 × 8?",
    options: ["96", "88", "104", "100"],
    answer: "96",
  },
];

export default function QuizTest() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (e) => {
    setSelected(e.target.value);
  };

  const handleNext = () => {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }

    setSelected('');
    const nextQ = currentQ + 1;

    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };

  return (
    <DashboardLayout>
      <div className="quiz-container">
        <h2>📝 Quiz / Test</h2>

        {!showScore ? (
          <div className="quiz-box">
            <h5>Q{currentQ + 1}: {questions[currentQ].question}</h5>
            <div className="options">
              {questions[currentQ].options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selected === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              ))}
            </div>
            <button onClick={handleNext} className="btn btn-primary mt-3">
              {currentQ === questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        ) : (
          <div className="result-box">
            <h4>🎉 Quiz Completed!</h4>
            <p>You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
