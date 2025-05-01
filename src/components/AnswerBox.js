import React from 'react';
import '../App.css'; // Ensure styles are available

const AnswerBox = ({ answer }) => {
  if (!answer) return null;

  return (
    <div className="answer-container">
      <h2>Answer:</h2>
      <div className="answer-text">{answer}</div>
    </div>
  );
};

export default AnswerBox;
