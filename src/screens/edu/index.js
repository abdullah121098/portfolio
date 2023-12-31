import React from 'react';
import educationData from './edudata';
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
            <th>Passing Year</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((education, index) => (
            <tr key={index}>
              <td>{education.degree}</td>
              <td>{education.institution}</td>
              <td>{education.passingYear}</td>
              <td>{education.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Education;