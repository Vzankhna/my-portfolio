import React, { useState } from "react";
import "./Project.css";

import img1 from "../../assets/page1.png";
import img2 from "../../assets/page2.png";
import img3 from "../../assets/page3.png";
import img4 from "../../assets/page4.png";
import img5 from "../../assets/page5.png";
import img6 from "../../assets/page6.png";
import img7 from "../../assets/page7.png";
import img8 from "../../assets/page8.png";

function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Home Page with Slider",
      description: "Home page of ShopSphere with image slider.",
      tech_stack: "Home Page",
      image: img1,
    },
    {
      id: 2,
      title: "E-commerce Product Page",
      description: "Product listing page with filters and sorting.",
      tech_stack: "Product Page",
      image: img2,
    },
    {
      id: 3,
      title: "Green Basket",
      description: "Home page of Green Basket",
      tech_stack: "Home Page",
      image: img3,
    },
    {
      id: 4,
      title: "Login Page",
      description: "Login page for Green Basket",
      tech_stack: "Login Page",
      image: img4,
    },
    {
      id: 5,
      title: "Register Page",
      description: "Register page for Green Basket",
      tech_stack: "Register Page",
      image: img5,
    },
    {
      id: 6,
      title: "Category Page",
      description: "Category page for Green Basket",
      tech_stack: "Category Page",
      image: img6,
    },
    {
      id: 7,
      title: "Product Page",
      description: "Product listing page of Caategory",
      tech_stack: "Product Page",
      image: img7,
    },
    {
      id: 8,
      title: "Single Product Page",
      description: "Single product view page for Green Basket",
      tech_stack: "Product Page",
      image: img8,
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((p) => (
          <div className="card" key={p.id}>
            <img
              src={p.image}
              alt={p.title}
              onClick={() => setSelectedImg(p.image)}
              style={{ cursor: "zoom-in" }}
            />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <span>{p.tech_stack}</span>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImg(null)}
        >
          <span className="close-btn">&times;</span>
          <img src={selectedImg} alt="Full view" className="modal-content" />
        </div>
      )}
    </div>
  );
}

export default Projects;