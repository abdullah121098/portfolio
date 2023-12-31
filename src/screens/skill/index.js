import React from 'react';
import SkillData from './skillData';
import './skill.css';
const Skill = () => {
    return (
        <div className="skill-page">
            <h2>Skills</h2>
            <div className="skill-container">
                {SkillData.map(skill => (
                    <div key={skill.id} className="skill">
                        <h3>{skill.name}</h3>
                        <p>{skill.proficiency}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;