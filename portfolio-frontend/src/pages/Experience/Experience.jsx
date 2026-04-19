import React from 'react'
import "./Experience.css";
const Experience = () => {
  return (
    <div className='Experience'>
        <div className="timeline">
            <div className="item">
                <h3>Full Stack Developer Intern</h3>
                <p>V-ex Tech Solutions</p>
                <p>
                    Worked on building responsive UI using React and improving
                    performance of web applications.
                </p>
            </div>
            <div className="item">
                <h3>Back-office Executive</h3>
                <p>Kuber Motive</p>
                <p>
                    Managed customer data and provided support for various
                    administrative tasks, ensuring smooth operations and efficient
                    workflow.
                </p>
            </div>
            <div className="item">
                <h3>Python Developer</h3>
                <p>Tech Innovations Inc.</p>
                <p>
                    Developed and maintained Python applications, focusing on
                    code quality and performance optimization.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Experience
