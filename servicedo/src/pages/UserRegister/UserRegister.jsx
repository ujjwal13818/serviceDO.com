import React from "react";
import { useState } from "react";
import "./UserRegister.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VerifyOTP from "../../Components/verifyOTP/VerifyOTP.jsx";

const UserRegister = () => {
  const navigate = useNavigate();
  const [showBox, setShowBox] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    address: "",
    phonenumber: "",
    dateofbirth: "",
    gender: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (form.password.length < 5) {
      setError("Password must be at least 5 characters long.");
      return;
    }

    if (form.password !== form.cpassword) {
      setError("Passwords do not match.");
      return;
    }
    //call register api
    try {
      const response = await axios.post(
        "http://localhost:7777/auth/userregister",
        {
          fullName: form.name,
          email: form.email,
          password: form.password,
          phoneNo: form.phonenumber,
          dob: form.dateofbirth,
          gender: form.gender,
          address: form.address,
        }
      );
      alert(response.data.message);
      navigate("/Sign_in");
    } catch (error) {
      console.log("error in sending userRegister data:" + error);
      alert("Something went wrong");
    }
  };
  //showing otp box
  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7777/auth/sendVerificationCode", {
        fullName: form.name,
        email: form.email,
      });
      setShowBox(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="background-container">
      <div className="background-containe">
        <h2>ServiceDo</h2>
      </div>
      {showBox === true ? (
        <VerifyOTP handleSubmit={handleSubmit} />
      ) : (
        <div className="form-container">
          <h1 className="title text-center py-4">User Register</h1>
          <form onSubmit={handleRequest}>
            <div className="content">
              <div className="input-box">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter your valid email address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box">
                <label htmlFor="password">Set Password</label>
                <input
                  type="password"
                  placeholder="Enter a strong password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="cpassword">Confirm password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="cpassword"
                  value={form.cpassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="error">{error}</div>
              <div className="input-box">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  placeholder="Enter the address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="phonenumber">Phone number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  name="phonenumber"
                  value={form.phonenumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box">
                <label htmlFor="dateofbirth">Date Of Birth</label>
                <input
                  type="date"
                  placeholder="Enter your date of birth"
                  name="dateofbirth"
                  value={form.dateofbirth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="gender-category">
                <label htmlFor="gender">Gender :</label>
                <select
                  name="gender"
                  id="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select the Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="alert">
                <p>
                  By clicking Register, you agree to SERVICE DO's{" "}
                  <a href="a">Terms</a>, <a href="a">Privacy policy</a>, and{" "}
                  <a href="a">Cookies policy</a>. You will soon receive
                  notifications from our side.
                </p>
              </div>

              <div className="bn">
                <h5>
                  Already have an account? <span>Login</span>
                </h5>
                <button type="submit">
                  <h3>Request OTP</h3>
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserRegister;
