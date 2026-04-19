import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Project.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null); // State for the modal

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/projects/")
      .then(res => setProjects(res.data))
      .catch(err => console.error("Axios Error:", err));
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map(p => {
          const imageUrl = p.image.startsWith('http') ? p.image : `http://127.0.0.1:8000${p.image}`;
          
          return (
            <div className="card" key={p.id}>
              <img 
                src={imageUrl} 
                alt={p.title} 
                onClick={() => setSelectedImg(imageUrl)} // Open Modal on click
                style={{ cursor: 'zoom-in' }} 
              />
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span>{p.tech_stack}</span>
            </div>
          );
        })}
      </div>

      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImg} alt="Full view" className="modal-content" />
        </div>
      )}
    </div>
  );
}

export default Projects;