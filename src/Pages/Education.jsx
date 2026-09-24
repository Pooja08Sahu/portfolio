import React from "react";
import "./CSS/Education.css";

const Education = () => {
  return (
    <section className="education" id="education">

      <div className="education-heading">
        <p>MY</p>

        <h2>
          <span>EDUCATION</span>
        </h2>

        <div className="education-line"></div>

        <h4>My academic background and learning journey.</h4>
      </div>


      <div className="education-container">

        {/* Diploma */}

        <div className="education-card">

          <div className="education-dot"></div>

          <div className="education-content">

            <div className="education-top">

              <div>
                <h3>
                  Diploma in Computer Science and Engineering
                </h3>

                <h5>
                  Government Girls Polytechnic, Meja, Prayagraj,
                  Uttar Pradesh
                </h5>
              </div>

              <span className="education-date">
                2023 – 2026
              </span>

            </div>

            <div className="education-percentage">
              Percentage: <span>73%</span>
            </div>

            <ul>
              <li>Computer Science and Engineering</li>
              <li>Web Development and Programming</li>
              <li>Database Management</li>
              <li>Practical development projects</li>
            </ul>

          </div>

        </div>


        {/* Class X */}

        <div className="education-card">

          <div className="education-dot"></div>

          <div className="education-content">

            <div className="education-top">

              <div>
                <h3>Class X – UP Board</h3>

                <h5>
                  B. P. O. Intermediate College, Prayagraj,
                  Uttar Pradesh
                </h5>
              </div>

              <span className="education-date">
                2022
              </span>

            </div>

            <div className="education-percentage">
              Percentage: <span>79%</span>
            </div>

            <ul>
              <li>UP Board</li>
              <li>Secondary Education</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;




