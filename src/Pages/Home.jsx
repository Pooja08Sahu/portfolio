import React, { useState, useEffect } from "react";
import Header from "../Component/Header";
import "./CSS/Home.css";
import { NavLink } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";


const Home = () => {

const words = ["Frontend Developer"];
const [wordIndex, setWordIndex] = useState(0);
const [text, setText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {

  const currentWord = words[wordIndex];

  const speed = isDeleting ? 100 : 180;

  const timer = setTimeout(() => {

    if (!isDeleting) {

      setText(currentWord.substring(0, text.length + 1));

      if (text === currentWord) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }

    } else {

      setText(currentWord.substring(0, text.length - 1));

      if (text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }

    }

  }, speed);

  return () => clearTimeout(timer);

}, [text, isDeleting, wordIndex]);



  return (
    <>
      <Header />

      <section className="home">
        <div className="home-content">
          <p className="hello">Hello, I'm</p>
          <h1>Pooja Sahu</h1>{" "}
          <h2>
            {" "}
            {text} <span className="cursor">|</span>
          </h2>{" "}
          <p className="description">
            {" "}
            I create responsive and user-friendly websites using modern web
            technologies.{" "}
          </p>
          <div className="home-buttons">
            <a href="#projects" className="home-btn">
              {" "}
              Hire me{" "}
            </a>
            <a href="#contact" className="home-btn outline-btn">
              {" "}
              Download CV <MdOutlineFileDownload />{" "}
            </a>
          </div>
        </div>



        {/* Right Side Image */}
        <div className="home-image">
          <div className="image-glow"> </div>
          <div className="image-circle">
            <img src="/pooja.jpeg" alt="Pooja Sahu" />
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Home;








