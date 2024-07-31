import React, { useState } from 'react';
import './Post.css'; 

const Post = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      jobTitle,
      jobDescription,
      location,
      date,
    });
  };

  return (
      <div className="post-card">
        <h2 className="post-title">Post Your Job</h2>
        <form className="post-form" onSubmit={handleSubmit}>
          <div className="post-form-group">
            <label htmlFor="jobTitle" className="post-label">Job Title:</label>
            <select
              id="jobTitle"
              value={jobTitle}
              className="post-select"
              onChange={(e) => setJobTitle(e.target.value)}
            >
              <option value="">Select a job title</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Mason">Mason</option>
              <option value="Private Teacher">Private Teacher</option>
              <option value="Car Driver">Car Driver</option>
              <option value="Painter">Painter</option>
              <option value="Electrician">Electrician</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="post-form-group">
            <label htmlFor="jobDescription" className="post-label">Job Description:</label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              className="post-textarea"
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
          <div className="post-form-group">
            <label htmlFor="location" className="post-label">Location:</label>
            <select
              id="location"
              value={location}
              className="post-select"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select a location</option>
              <option value="Nalanda">Nalanda</option>
              <option value="Patna">Patna</option>
              <option value="Prayagraj">Prayagraj</option>
              <option value="Delhi">Delhi</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Aurangabad">Aurangabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Warangal">Warangal</option>
            </select>
          </div>
          <div className="post-form-group">
            <label htmlFor="date" className="post-label">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              className="post-input"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button type="submit" className="post-button">Post</button>
        </form>
      </div>
  
  );
};

export default Post;
