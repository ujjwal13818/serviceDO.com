import React from 'react'
import './HomePage.css'
import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios'

const HomePage = () => {

  const makePayment = async() => {
    const stripe = await loadStripe(
      "pk_test_51PiIkgJ59zhrSaEwen7ET3w7ay8EE2kFkpWHhMvBaC2EnK9uT4psGX3JQOJ0mMg6tUJ8xps2E47rsoagMKupMhqH00rUnZVSuT"
    );

    try {
      const response = await axios.post(
        "http://localhost:7777/premium/get",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const session = response.data;
      const result = await stripe.redirectToCheckout({ sessionId: session.id });
      console.log("checkout");

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.log("Error while sending payment request to api: " + error);
      alert("Something went wrong")
    }
  }

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
          <div className="SPHpremium-box" onClick={makePayment}>Premium</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage