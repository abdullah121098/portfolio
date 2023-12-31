import React from 'react';
import ProjectData from './data';
import './project.css';

const Project = () => {
    return (
        <div className="container">
            <h1>Project</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {ProjectData.map((project) => (
                        <tr key={project.id}>
                            <td>{project.title}</td>
                            <td>{project.description}</td>
                            <td>
                                <ul>
                                    {project.skills.map((skill) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Project;