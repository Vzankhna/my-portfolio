import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
     <nav className="navbar">
      <img src={logo} alt="Logo" />
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skill">Skill</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
