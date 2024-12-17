import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import QuestionBox from "./components/QuestionBox";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleAnswerUpdate = (response) => {
    setAnswer(response);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      {isSidebarVisible && (
        <aside className="sidebar">
          <button className="close-btn" onClick={toggleSidebar}>
            ✖
          </button>
          <h2>Upload PDFs</h2>
          <FileUploader onProcessComplete={handleAnswerUpdate} />
        </aside>
      )}

      {/* Sidebar Toggle Button */}
      {!isSidebarVisible && (
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          ➡
        </button>
      )}

      {/* Main Content */}
      <main className="main-content">
        <h1>Ask any Question from PDF</h1>
        <p className="instructions">
          Upload your PDFs on the sidebar and ask any question about their
          contents below.
        </p>
        <QuestionBox answer={answer} onAnswerUpdate={handleAnswerUpdate} />
      </main>
    </div>
  );
}

export default App;
