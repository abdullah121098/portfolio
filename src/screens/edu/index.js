import React from 'react';
import { EducationData } from '../../assets/Resume';
import './edu.css';

const Education = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <table>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Place</th>
            <th>Passing Year</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {EducationData.map((education, index) => (
            <tr key={index}>
              <td>{education.title}</td>
              <td>{education.institution}</td>
              <td>{education.location}</td>
              <td>{education.duration}</td>
              <td>{education.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Education;