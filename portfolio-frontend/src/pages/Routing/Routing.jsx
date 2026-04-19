import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Projects from '../Project/Project';
const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
