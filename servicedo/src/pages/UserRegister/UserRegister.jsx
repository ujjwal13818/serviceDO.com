import React from 'react'
import { useState } from 'react';
import './UserRegister.css'

const UserRegister = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    address: '',
    phonenumber: '',
    dateofbirth:'',
    
    gender: '',
  });
  const [error , setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    if (form.password.length < 5) {
      setError('Password must be at least 5 characters long.');
      return;
    }

    // Validate confirm password
    if (form.password !== form.cpassword) {
      setError('Passwords do not match.');
      return;
    }
    console.log(form);
  };
  return (
   

    <div className="background-container">
      <div className="background-containe">
      <h2>ServiceDo</h2>
      </div>
      <div className="form-container">
        <h1 className="title text-center py-4">User Register</h1>
        <form onSubmit={handleSubmit}>
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
            <div className="error">
              {error}
            </div>
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
            <option value="" disabled selected>Select the Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            
        </select>
              
            </div>

            <div className="alert">
              <p>
                By clicking Register, you agree to SERVICE DO's{' '}
                <a href="a">Terms</a>, <a href="a">Privacy policy</a>, and{' '}
                <a href="a">Cookies policy</a>. You will soon receive notifications
                from our side.
              </p>
            </div>

            <div className="bn">
            <h5>Already have an account?  <span>Login</span></h5>
              <button type="submit">
                <h3>Register Now</h3>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegister
