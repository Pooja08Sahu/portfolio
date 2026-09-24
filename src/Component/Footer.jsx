import React from "react";
import "./CSS/Footer.css";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-links">

        <a href="#home">
          <FaHome />
          <span>Home</span>
        </a>

        <a href="#about">
          <FaUser />
          <span>About Me</span>
        </a>

        <a href="#contact">
          <FaEnvelope />
          <span>Contact</span>
        </a>

      </div>


      <div className="footer-social">

        <a href="#" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>

      </div>


      <div className="footer-bottom">
        <p>© 2026 Pooja Sahu. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;



