import React, { useState } from 'react';

import './EmployeeRegister.css';

const EmployeeRegister = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    address: '',
    phonenumber: '',
    skills: '',
    experience:'',
    
    gender: '',
  });
  const [error , setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
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
        <h1 className="title text-center py-4">Employee Register </h1>
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
        <label htmlFor="skills">Skills</label>
        <select
            name="skills"
            id="skills"
            value={form.skills}
            onChange={handleChange}
            required
        >
            <option value="" disabled selected>Select the skills required</option>
            <option value="Carpentary">Carpentary</option>
            <option value="Private Teacher">Private Teacher</option>
            <option value="Mason">Mason</option>
            <option value="Plumber">Plumber</option>
            <option value="Labourer">Labourer</option>
            <option value="Car driver">Car driver</option>
            <option value="Painter">Painter</option>
            <option value="Electrician">Electrician</option>
            <option value="Others">Others</option>


        </select>
    </div>
            

            <div className="gender-category">
            <label htmlFor="skills">Gender :</label>
            <select
            name="gender"
            id="gender"
            value={form.gender}
            onChange={handleChange}
            required
        >
            <option value="" disabled selected>Select the Gender</option>
            <option value="plumber">Male</option>
            <option value="gardener">Female</option>
            <option value="mechanic">Other</option>
            
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

export default EmployeeRegister;
