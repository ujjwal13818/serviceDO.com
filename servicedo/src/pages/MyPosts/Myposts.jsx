import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import PostCard from "../../Components/post_card/Post_card";
import Post from "../../Components/post/Post";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Name from "../../Components/Name/Name";

const Myposts = () => {
  const [allPosts, setAllPosts] = useState([]); // Ensure it's initialized as an array
  const [flag, setFlag] = useState(true);
  const toggleFlag = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7777/post/get-my-posts",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            userId: localStorage.getItem("_id"),
          }
        );
        const posts = response.data;
        const sortedPosts = posts.myPosts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setAllPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setAllPosts([]); // Set to an empty array in case of error
      }
    };

    fetchPosts();
  }, []); // Empty dependency array to run this effect once on mount

  return (
    <div className="SPHapp">
      <Sidebar toggleFlag={toggleFlag} />
      <Name />
      <div className="SPHcontent">
        <div className="SPHmain-content">
          <h2 className="SPHheading">My Posts</h2>
          <div className="SPHposts-container">
            {flag === true ? (
              allPosts.map((post, key) => (
                <PostCard key={key} post={post} showButtons={false} />
              ))
            ) : (
              <Post flag={flag} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myposts;
