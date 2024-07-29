import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <>
        <div className="app">
      <div className="sidebar">
        
        <ul>
          <li>Home</li>
          <li>My Posts</li>
          <li>Requests</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="content">
        <div className="main-content">
          <h2>RECENT JOBS</h2>
          {/* Add content here */}
        </div>
        <div className="premium-section">
          
          <div className="premium-box">Post</div>
          <div className="premium-box">HISTORY</div>
          <div className="premium-box">CHAT</div>
          <div className="premium-box">Premium</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage