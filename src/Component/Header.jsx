import React from 'react'
import './CSS/Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <>
      <nav className="navbar">

        <h2 className="logo">Pooja Sahu</h2>

        <div className="nav-links">
          <ul>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `item ${isActive ? "active" : ""}`}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `item ${isActive ? "active" : ""}`}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) => `item ${isActive ? "active" : ""}`}
              >
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => `item ${isActive ? "active" : ""}`}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) => `item ${isActive ? "active" : ""}`}
              >
                Experience
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/education"
                className={({ isActive }) => `item ${isActive ? "active" : ""}`}
              >
                Education
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `item ${isActive ? "active" : ""}`}
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

      </nav>
    </>
  )
}

export default Header
