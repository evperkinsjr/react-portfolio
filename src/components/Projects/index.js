import React from "react";
import projectsList from "../../utils/projects.json";

function Projects() {
    return (
        <div>
            {projectsList.map((project) => {
            return (
                <div className="card">
                    <img src={project.image} className="card-img-top" alt={project.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <p className="card-text">{project.technologies}</p>
                        <a href={project.link} className="card-link">Live Application</a>
                        <a href={project.repo} className="card-link">Repository</a>
                    </div>
                </div>
            );
        })}
        </div>
    );
}

export default Projects;