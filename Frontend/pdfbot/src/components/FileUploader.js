import React, { useState } from "react";
import "./FileUploader.css";
import icon from "../icon.png";

const FileUploader = ({ onProcessComplete }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles([...files, ...uploadedFiles]);
    setUploadSuccess(false); // Reset success message on new file upload
  };

  const handleSubmit = async () => {
    if (!files.length) {
      alert("Please upload at least one PDF file.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        onProcessComplete(data.message);
        setUploadSuccess(true); // Show success message
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="file-uploader">
      <input
        type="file"
        multiple
        accept=".pdf"
        onChange={handleFileUpload}
        className="file-input"
      />

      <div className="uploaded-files">
        <h3 className="file-header">Uploaded PDFs</h3>
        {files.map((file, index) => (
          <div key={index} className="uploaded-file-item">
            <img src={icon} alt="PDF icon" className="pdf-icon" />
            <span className="file-name">{file.name}</span>
          </div>
        ))}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit & Process
      </button>

      {loading && <div className="spinner"></div>}

      {uploadSuccess && (
        <p className="success-message">PDFs uploaded successfully!</p>
      )}
    </div>
  );
};

export default FileUploader;
