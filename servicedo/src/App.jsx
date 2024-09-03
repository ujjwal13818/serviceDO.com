import React from 'react'
import './App.css'



function App() {

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">ServiceDo.com</div>
        <ul className="navbar-links">
          <li>
            <a href="/userregister">Register as a user</a>
          </li>
          <li>
            <a href="/employeeregister">Register as an employee</a>
          </li>
          <li>
            <a href="/sign_in">Login to your account</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
        </ul>
      </nav>
      <div className="about-page">
        <section className="about-section about-hero">
          <h1 className="about-title">About ServiceDo.com</h1>
        </section>

        <section className="about-section about-description">
          <div className="about-content">
            <h2>Empowering Communities</h2>
            <p>
              At ServiceDo.com, we believe in empowering communities by
              connecting skilled and semi-skilled workers with the jobs they
              deserve. Whether you're looking for household help, a handyman, or
              skilled labor, we make it easy for you to find the right person
              for the job.
            </p>
          </div>
        </section>

        <section className="about-section about-mission">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              Our platform is designed with simplicity and efficiency in mind,
              ensuring that every user, regardless of their technical skills,
              can navigate and find the help they need with ease. We are
              committed to fostering a community where everyone has the
              opportunity to grow, contribute, and achieve their goals.
            </p>
          </div>
        </section>

        <section className="about-section about-vision">
          <div className="about-content">
            <h2>Our Vision</h2>
            <p>
              Join us in our vision to create a world where everyone has access
              to the services they need, and every worker has access to the
              opportunities they deserve.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App
