import React from 'react';
import './Post_card.css'; 

const PostCard = ({ jobTitle, jobDescription, location, date }) => {
  return (
    <div className="post-card-container-custom">
      <div className="post-card-custom">
        <h2 className="post-card-title-custom">Job Details</h2>
        <div className="post-card-content-custom">
          <div className="post-card-item-custom">
            <span className="post-card-label-custom">Name:</span>
            <span className="post-card-value-custom">{'Ashutosh Kumar Sinha'}</span>
          </div>
          <div className="post-card-item-custom">
            <span className="post-card-label-custom">Job Title:</span>
            <span className="post-card-value-custom">{'Software Engineer'}</span>
          </div>
          <div className="post-card-item-custom">
            <span className="post-card-label-custom">Job Description:</span>
            <span className="post-card-value-custom">{'Full stack devoloper'}</span>
          </div>
          <div className="post-card-item-custom">
            <span className="post-card-label-custom">Location:</span>
            <span className="post-card-value-custom">{'Nalanda'}</span>
          </div>
          <div className="post-card-item-custom">
            <span className="post-card-label-custom">Date:</span>
            <span className="post-card-value-custom">{"05-03-2024"}</span>
          </div>
        </div>
        <div className="post-card-actions-custom">
          <button className="contact-button-custom">Contact</button>
          <button className="apply-button-custom">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
