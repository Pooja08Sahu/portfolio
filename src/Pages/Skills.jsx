import React, { useEffect, useState } from "react";
import "./CSS/Skills.css";

const skills = [
  {
    name: "HTML",
    percentage: 90,
  },
  {
    name: "CSS",
    percentage: 85,
  },
  {
    name: "JavaScript",
    percentage: 60,
  },
  {
    name: "React",
    percentage: 65,
  },
  {
    name: "Tailwind",
    percentage: 50,
  },
  {
    name: "Bootstrap",
    percentage: 70,
  },
  {
    name: "Node.js",
    percentage: 34,
  },
  {
    name: "Express.js",
    percentage: 15,
  },
  {
    name: "MongoDB",
    percentage: 10,
  },
];

const Skills = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const [values, setValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".skills");

      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        setStartAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    const interval = setInterval(() => {
      setValues((oldValues) => {
        const newValues = oldValues.map((value, index) => {
          if (value < skills[index].percentage) {
            return value + 1;
          }

          return value;
        });

        const completed = newValues.every(
          (value, index) => value >= skills[index].percentage,
        );

        if (completed) {
          clearInterval(interval);
        }

        return newValues;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [startAnimation]);

  return (
    <section className="skills" id="skills">
      {/* HEADING */}

      <div className="skills-heading">
        <p>MY</p>

        <h2>
          <span>SKILLS</span>
        </h2>

        <div className="heading-line"></div>

        <h4>Technologies I work with and love to learn.</h4>
      </div>

      {/* SKILLS */}

      <div className="skills-container">
        {skills.map((skill, index) => {
          const radius = 42;

          const circumference = 2 * Math.PI * radius;

          const offset = circumference - (values[index] / 100) * circumference;

          return (
            <div className="skill-item" key={skill.name}>
              {/* TECHNOLOGY NAME */}

              <h3>{skill.name}</h3>

              {/* PERCENTAGE CIRCLE */}

              <div className="circle">
                <svg width="115" height="115" viewBox="0 0 115 115">
                  <circle
                    className="circle-bg"
                    cx="57.5"
                    cy="57.5"
                    r={radius}
                  />

                  <circle
                    className="circle-progress"
                    cx="57.5"
                    cy="57.5"
                    r={radius}
                    style={{
                      strokeDasharray: circumference,

                      strokeDashoffset: offset,
                    }}
                  />
                </svg>

                <div className="percentage">{values[index]}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;






