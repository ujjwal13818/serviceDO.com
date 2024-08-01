import React, { useState } from 'react'
import './Sidebar.css'
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";




const Sidebar = ({toggleFlag}) => {
  const navigate = useNavigate();


    const goToProfileSection = () => {
      navigate("/profile");
    };
    const goToHomeSection = () => {
      navigate("/home");
    };
    const goToRequestSection = () => {
      navigate("/request");
    };
    const goToMyPostsSection = () => {
      navigate("/my-posts");
    };

    const handleLogout = () => {
      localStorage.clear();
      navigate("/sign_in");
    };

     const makePayment = async () => {
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
         const result = await stripe.redirectToCheckout({
           sessionId: session.id,
         });
         console.log("checkout");

         if (result.error) {
           alert(result.error.message);
         }
       } catch (error) {
         console.log("Error while sending payment request to API: " + error);
         alert("Something went wrong");
       }
     };

  return (
    <>
      <div className="SCPcontainer-left">
        <div className="SCPnav-l" onClick={goToHomeSection}>
          Home
        </div>
        <div className="SCPnav-l" onClick={goToMyPostsSection}>
          My posts
        </div>
        <div className="SCPnav-l" onClick={goToRequestSection}>
          Requests
        </div>
        <div className="SCPnav-l" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <div className="SCPcontainer-right">
        <div className="SCPnav-r" onClick={toggleFlag}>Post</div>
        <div className="SCPnav-r" onClick={goToProfileSection}>
          Profile
        </div>
        <div className="SCPnav-r">Chat</div>
        <div className="SCPnav-r" onClick={makePayment}>
          Premium
        </div>
      </div>
    </>
  );
}

export default Sidebar