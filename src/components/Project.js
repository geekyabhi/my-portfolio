import React from 'react'

const Project = ({project}) => {
    return (
        <div className="project-item padd-15">
            <div className="project-item-inner shadow-dark">
                <div className="project-img">
                    <img src={project.image.url} alt={project.title}></img>
                </div>
                <div className="project-info">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}.</p>
                    
                    {
                        project.deployed?
                        (<div className="buttons">
                            <a href={project.link} className="btn">View Project</a>
                        </div>):(<></>)
                    }
                    {
                        project.open?
                        (<div className="buttons">
                            <a href={project.codeLink} className="btn">Source Code</a>
                        </div>):(<></>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Project
