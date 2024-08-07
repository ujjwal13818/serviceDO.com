import React, { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";
import PostCard from "../../Components/post_card/Post_card";
import Post from "../../Components/post/Post";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Name from "../../Components/Name/Name";

const HomePage = () => {
  const [allPosts, setAllPosts] = useState([]); // Ensure it's initialized as an array
  const [flag, setFlag] = useState(true);

  const toggleFlag = () => {
    setFlag(!flag);
  };
  
 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7777/post/get-all-jobs"
        );
        const posts = response.data;
        const sortedPosts = posts.allJobs.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setAllPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setAllPosts([]); // Set to an empty array in case of error
      }
    };

    fetchPosts();
  }, []); 



  return (
    <div className="SPHapp">
      <Sidebar toggleFlag={toggleFlag} />
      <Name />
      <div className="SPHcontent">
        <div className="SPHmain-content">
          <h2 className="SPHheading">RECENT JOBS</h2>
          <div className="SPHposts-container">
            {flag === true ? (
              allPosts.map((post, key) => (
                <PostCard key={key} post={post} showButtons={true} />
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

export default HomePage;
