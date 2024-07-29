import React, { useState, useEffect } from "react";
import "./Sign_in.css";

const Sign_in = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [captchaBackground, setCaptchaBackground] = useState("");
  const [role, setRole] = useState("user"); // State for role selection

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    const randomColor = `#${Math.floor(5 * 16).toString(16)}`;
    setGeneratedCaptcha(randomString);
    setCaptchaBackground(randomColor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha !== generatedCaptcha) {
      alert("Captcha does not match!");
      return;
    }
    // Add your sign-in logic here
    console.log("Signing in with", email, password, captcha, role);
    setEmail("");
    setPassword("");
    setCaptcha("");
    generateCaptcha(); // Generate new CAPTCHA after form submission
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <div className="signin-form">
          <h1 className="signin-title">Sign In</h1>
          <div className="role-selection">
            <label>
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === "user"}
                onChange={(e) => setRole(e.target.value)}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="employee"
                checked={role === "employee"}
                onChange={(e) => setRole(e.target.value)}
              />
              Employee
            </label>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group captcha-group">
              <label htmlFor="captcha">Captcha</label>
              <div className="captcha-container">
                <img
                  src={`https://dummyimage.com/150x30/${captchaBackground.replace(
                    "#",
                    ""
                  )}/fff&text=${generatedCaptcha}`}
                  alt="captcha"
                />
                <input
                  type="text"
                  id="captcha"
                  placeholder="Enter captcha"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          <p className="register-link">
            Don't have an account? <span>Register As:</span>
          </p>
          <div className="register-options">
            <a href="/userRegister" className="register-option">User</a>
            <a href="/employeeRegister" className="register-option">Employee</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_in;
