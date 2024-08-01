import React, { useEffect, useState } from "react";
import "./Post_card.css";
import axios from "axios";

const PostCard = ({ post , showButtons }) => {
  const [labelColor , setLabelColor] = useState("");
  const [buttonText , setButtonText] = useState("Apply");
  const [requestedBy , setRequestedBy] = useState([]);

  const handleApply = async() => {
    if(localStorage.getItem("role") !== "employee"){
      alert("Application can only be made using employee id");
      return;
    }
    if(post.user === localStorage.getItem("_id") || buttonText === "Applied"){
      alert("You cannot apply to your own post or more than one time on a post");
      return;
    }
    try {
         const response = await axios.post(
           "http://localhost:7777/post/update-post",
           {
             id: post._id,
             fullName: localStorage.getItem("fullName"),
             status: "requested",
           }
         );
         if (response.data.success) {
           alert("Application sent successfully");
         }
         window.location.reload();
    } catch (error) {
      console.log("Error at applying: " + error);
    }
 
  }
   const getUserInfo = async (req, res) => {
     {
       setRequestedBy(post.requestedBy);
       console.log(requestedBy);
     }
   };
   console.log(requestedBy);
  useEffect(() => {
    if(post.status === "active")setLabelColor("red");
    else if(post.status === "accepted")setLabelColor("green");
    else if(post.status === "requested"){
      setLabelColor("purple");
      setButtonText("Applied");
      getUserInfo();
    }
    else setLabelColor("grey");
  },[])
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <div className="post-card-container-custom">
      <div className="post-card-custom">
        <div className="SCPCheadandlabel">
          <h2 className="post-card-title-custom">Job Details</h2>
          <div
            className="SCPlabel"
            style={{ backgroundColor: `${labelColor}` }}
          >
            {post.status}
          </div>
        </div>

        <div className="post-card-content-custom">
          <div className="post-card-item-custom">
            <span className="post-card-label-custom">Name:</span>
            <span className="post-card-value-custom">
              {post.fullName || "Ashutosh Kumar Sinha"}
            </span>
          </div>
          <div className="post-card-item-custom">
            <span className="post-card-label-custom">Job Title:</span>
            <span className="post-card-value-custom">
              {post.jobTitle || "Software Engineer"}
            </span>
          </div>
          <div className="post-card-item-custom">
            <span className="post-card-label-custom">Job Description:</span>
            <span className="post-card-value-custom">
              {post.jobDescription || "Full stack developer"}
            </span>
          </div>
          <div className="post-card-item-custom">
            <span className="post-card-label-custom">Location:</span>
            <span className="post-card-value-custom">
              {post.jobLocation || "Nalanda"}
            </span>
          </div>
          <div className="post-card-item-custom">
            <span className="post-card-label-custom">Date:</span>
            <span className="post-card-value-custom">
              {formatDate(post.createdAt) || "05-03-2024"}
            </span>
          </div>
        </div>
        {showButtons? (
          <div className="post-card-actions-custom">
            <button className="contact-button-custom">Contact</button>
            <button className="apply-button-custom" onClick={handleApply}>{buttonText}</button>
          </div>
        ):(
          post.status === 'requested' && 
          <div className="SCPrequestedby" style={{color: "red", fontWeight: "bold"}}>
            Requested by: 
            {requestedBy.map((users , key) => {
               return users
            })}
            {/* Requested by: {post.status === "requested" && post.requestedBy?.fullName} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
