import React from 'react'
import './CSS/About.css'

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

      
        <div className="about-content">

          <p className="about-subtitle">ABOUT ME</p>

          <h2>
            I'm a <span>Frontend Developer</span>
          </h2>

          <p className="about-description">
            I am a passionate Frontend Developer who enjoys creating
            responsive and user-friendly websites using modern web
            technologies.
          </p>

          <p className="about-description">
            I have knowledge of HTML, CSS, JavaScript and React. I also
            have basic knowledge of PHP and MySQL. I enjoy learning new
            technologies and building real-world projects.
          </p>

          <div className="about-details">

            <div>
              <strong>Name</strong>
              <span>Pooja Sahu</span>
            </div>

            <div>
              <strong>Education</strong>
              <span>Diploma in Computer Science</span>
            </div>

            <div>
              <strong>Role</strong>
              <span>Frontend Developer</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>Uttar Pradesh, India</span>
            </div>

          </div>

          <a href="#contact" className="about-btn">
            Contact Me
          </a>

        </div>

      </div>

    </section>
  )
}

export default About