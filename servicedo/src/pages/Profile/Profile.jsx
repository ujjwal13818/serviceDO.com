import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="SPP-profile-container">
      <div className="SPP-profile-card">
        <div className="SPP-profile-header">
          <img
            className="SPP-profile-avatar"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h1 className="SPP-profile-name">Priyank Aman</h1>
        </div>
        <div className="SPP-profile-info">
          <div className="SPP-profile-item">
            <span className="SPP-profile-label">Phone:</span>
            <span className="SPP-profile-value">+91 9065368398</span>
          </div>
          <div className="SPP-profile-item">
            <span className="SPP-profile-label">Email:</span>
            <span className="SPP-profile-value">amanpriyank2@gmail.com</span>
          </div>
          <div className="SPP-profile-item">
            <span className="SPP-profile-label">Address:</span>
            <span className="SPP-profile-value">New Boys Hostel, Allahabad</span>
          </div>
          <div className="SPP-profile-item">
            <span className="SPP-profile-label">User Status:</span>
            <span className="SPP-profile-value">Employer</span>
          </div>
          <div className="SPP-profile-item">
            <span className="SPP-profile-label">Education:</span>
            <span className="SPP-profile-value">B.Tech</span>
          </div>
          <div className="SPP-profile-item">
            <span className="SPP-profile-label">Experience:</span>
            <span className="SPP-profile-value">Former SDE Intern at Amazon</span>
          </div>
          <div className="SPP-profile-item">
            <span className="SPP-profile-label">Languages:</span>
            <span className="SPP-profile-value">English, Hindi</span>
          </div>
          <div className="SPP-profile-item">
            <span className="SPP-profile-label">CV:</span>
            <a className="SPP-profile-value SPP-cv-link" href="https://drive.google.com/file/d/1teDZVkMiJKX_n2wljqHHfyS5znATyX47/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
