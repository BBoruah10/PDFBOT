import React, { useState } from "react";
import "./QuestionBox.css";

const QuestionBox = ({ answer, onAnswerUpdate }) => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (response.ok) {
        const data = await response.json();
        onAnswerUpdate(data.answer);
      }
    } catch (error) {
      console.error("Error asking question:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="question-box">
      <textarea
        placeholder="Type your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows="6"
      />
      <button onClick={handleAskQuestion}>Ask</button>
      {loading && <div className="spinner"></div>}
      {answer && (
        <div className="answer-box">
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionBox;
