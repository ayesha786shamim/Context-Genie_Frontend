import React, { useState } from 'react';
import axios from 'axios';
import AnswerBox from './components/AnswerBox';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const askQuestion = async () => {
    try {
      const response = await axios.post('http://localhost:8000/ask', {
        question,
      });
      setAnswer(response.data.answer);
    } catch (err) {
      console.error(err);
      setAnswer("Error fetching answer.");
    }
  };

  return (
    <div className="app-container">
      <h1>Context-Genie🧞</h1>

      <div className="input-container">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
        />
        <button onClick={askQuestion}>Ask</button>
      </div>

      <AnswerBox answer={answer} />
    </div>
  );
}

export default App;
