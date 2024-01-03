import React, { useState } from 'react';
import './App.css'

const App = () => {
  // State for dropdown
  const [selectedOption, setSelectedOption] = useState('');

  // State for file
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle dropdown change
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Function to handle form submission (you can modify this based on your needs)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the selectedOption and selectedFile
    console.log('Selected Option:', selectedOption);
    console.log('Selected File:', selectedFile);
    // Add your logic for handling the form data here
  };

  return (
    <div className="FileUploader">
      <form onSubmit={handleSubmit}>
        {/* Dropdown */}
        <label>
          Select an option:
          <select value={selectedOption} onChange={handleDropdownChange}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>

        {/* File Upload */}
        <label>
          Upload a file:
          <input type="file" onChange={handleFileUpload} />
        </label>

        {/* Submit Button */}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default App;
