import React from "react";
import "./CSS/Projects.css";

const projects = [
  {
    title: "My Desh",
    image: "/image/mydesh.png",
    description:
      "An Indian culture platform where users can explore and share festivals, traditions, images and videos.",
    link: "#",
  },
  {
    title: "Weather App",
    image: "/image/weather.png",
    description:
      "A responsive weather application that displays weather information with a clean and user-friendly interface.",
    link: "#",
  },
  {
    title: "Food Website",
    image: "/image/food.png",
    description:
      "A modern food website created using HTML, CSS, JavaScript and responsive design.",
    link: "#",
  },
  {
    title: "React Dashboard",
    image: "/image/dashboard.png",
    description:
      "A responsive admin dashboard built with React with navigation, cards and multiple sections.",
    link: "#",
  },
  {
    title: "PHP CRUD Project",
    image: "/image/phpcrud.png",
    description:
      "A PHP and MySQL based CRUD application for creating, updating, deleting and displaying data.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    image: "/image/portfolio.png",
    description:
      "A personal portfolio website showcasing my skills, projects, experience and contact information.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <div className="title-row">
          <p>MY</p>
          <h2>
            <span>PROJECTS</span>
          </h2>
        </div>
        <div className="projects-line"></div>
        <h4>Some of my recent work and projects.</h4>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-actions">
                <a
                  href={project.link}
                  className="project-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.link}
                  className="project-btn project-demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
