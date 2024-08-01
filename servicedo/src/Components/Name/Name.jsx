import React from 'react'
import './Name.css'

const Name = () => {
  return (
    <>
      <div className="user-label">
        Welcome, {localStorage.getItem("fullName").split(" ")[0]}
        <div className="user-tag">{localStorage.getItem("role")}</div>
      </div>
    </>
  );
}

export default Name