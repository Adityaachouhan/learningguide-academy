import React, { useState, useEffect } from 'react';

import { database } from '../firebase';

import { ref, push, onValue } from 'firebase/database';
import './GroupChat.css';

export default function GroupChat() {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const messagesRef = ref(database, 'groupChat');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMessages = [];
      for (let key in data) {
        loadedMessages.push({
          id: key,
          text: data[key].text,
          username: data[key].username || 'Anonymous',
        });
      }
      setMessages(loadedMessages);
    });
  }, []);

  const sendMessage = () => {
    if (newMsg.trim() && username.trim()) {
      const messagesRef = ref(database, 'groupChat');
      push(messagesRef, { text: newMsg, username });
      setNewMsg('');
    }
  };

  return (
    <div className="chat-container">
      <h2>Group Chat 💬</h2>

      {!username && (
        <div className="username-prompt">
          <input
            type="text"
            placeholder="Enter your name..."
            onBlur={(e) => setUsername(e.target.value)}
          />
        </div>
      )}

      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            <strong>{msg.username}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
