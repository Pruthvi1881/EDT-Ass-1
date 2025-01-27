import React from 'react';
import '../styles/Projects.css';  // Import Projects styles

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <h3>Project 1</h3>
                    <p>SimpleSphere</p>
                </div>
                <div className="project-card">
                    <h3>Project 2</h3>
                    <p>EasyConnect</p>
                </div>
                <div className="project-card">
                    <h3>Project 3</h3>
                    <p>QuickWeb</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
