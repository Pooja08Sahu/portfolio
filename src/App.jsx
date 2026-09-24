import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <Router>
    

      <Routes>
        {/* 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} /> */}
      </Routes>





<Home/>

<About/>

<Skills/>

<Projects/>

<Experience/>

<Education/>

<Contact/>

<Footer/>


    </Router>
  );
};

export default App;
