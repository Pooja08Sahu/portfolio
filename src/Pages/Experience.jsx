
import React from "react";
import "./CSS/Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">

      <div className="experience-heading">
        <p>MY</p>
        <h2>
          <span>EXPERIENCE</span>
        </h2>
        <div className="experience-line"></div>
        <h4>My learning journey and professional experience.</h4>
      </div>

      <div className="experience-container">

        <div className="experience-card">

          <div className="experience-dot"></div>

          <div className="experience-content">

            <div className="experience-top">
              <div>
                <h3>MERN Stack Developer Intern</h3>
                <h5>DigiCoders Technologies Pvt. Ltd., Lucknow</h5>
              </div>

              <span className="experience-date">
                Internship | 2026
              </span>
            </div>

            <ul>
              <li>
                Worked on <strong>frontend development</strong> using HTML,
                CSS, JavaScript and React.
              </li>

              <li>
                Developed <strong>responsive and user-friendly</strong> web
                interfaces.
              </li>

              <li>
                Practiced React concepts such as
                <strong> components, props, state and hooks</strong>.
              </li>

              <li>
                Worked with <strong>REST APIs and Axios</strong> for handling
                application data.
              </li>

              <li>
                Practiced <strong>CRUD operations</strong> and database
                integration.
              </li>

              <li>
                Learned basic <strong>Node.js, Express.js and MongoDB</strong>
                concepts as part of MERN stack development.
              </li>

              <li>
                Worked on <strong>debugging</strong> and improving web
                application functionality.
              </li>
            </ul>

            <div className="experience-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>Axios</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;

