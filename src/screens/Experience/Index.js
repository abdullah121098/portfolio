import React from 'react';
import './Experience.css';
import { ExpData } from '../../assets/Resume';

const Experience = () => {

    return (
        <div className="experience-container">
            <h1>Experience</h1>
            {ExpData.map((exp, index) => (
                <div className="experience-card" key={index}>
                    <h2>{exp.company}</h2>
                    <h3>{exp.role}</h3>
                    <p>{exp.duration}</p>
                    <p>{exp.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Experience;