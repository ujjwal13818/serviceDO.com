import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <>
        <div className="SPHapp">
      <div className="SPHsidebar">
        
        <ul>
          <li>Home</li>
          <li>My Posts</li>
          <li>Requests</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="SPHcontent">
        <div className="SPHmain-content">
          <h2>RECENT JOBS</h2>
          {/* Add content here */}
        </div>
        <div className="SPHpremium-section">
          
          <div className="SPHpremium-box">Post</div>
          <div className="SPHpremium-box">HISTORY</div>
          <div className="SPHpremium-box">CHAT</div>
          <div className="SPHpremium-box">Premium</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage