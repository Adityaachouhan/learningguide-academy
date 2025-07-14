import React, { useState } from 'react';
import './GeminiChat.css'; // ✅ Corrected import

export default function GeminiChat() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + process.env.REACT_APP_GEMINI_API_KEY,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: question }] }]
          })
        }
      );

      const data = await res.json();
      const output = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, no response from Gemini.';
      setResponse(output);
    } catch (err) {
      setResponse('⚠️ Error connecting to Gemini API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gemini-container">
      <h4 className="text-center mb-3">🤖 Ask Your Doubt</h4>
      <div className="d-flex flex-column flex-md-row gap-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAsk} disabled={loading}>
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </div>

      {response && (
        <div className="gemini-response mt-4 p-3 bg-light rounded">
          <strong>Gemini says:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
