// src/components/GeminiChat.js
import React, { useState } from 'react';
import './GeminiChat.css';

export default function GeminiChat() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');

    const payload = {
      contents: [{ parts: [{ text: question }] }]
    };

    const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCcdvDL3hyxcXMal_F2P-0E4vqM3g9mKpw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.';
    setAnswer(text);
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <h2>🤖 AI Doubt Assistant</h2>
      <textarea
        placeholder="Ask your doubt here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>
      <button onClick={handleAsk} disabled={loading}>
        {loading ? 'Thinking...' : 'Ask'}
      </button>
      {answer && (
        <div className="answer-box">
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
