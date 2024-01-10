import React from 'react';
import './intro.css';
import { IntroData } from '../../assets/Resume';
function Introduction() {
  return (
    <div className="introduction-container">
      {IntroData.map((data, index) => {
        return (
          <>
            <div className="introduction-image" key={index}>
              <img src={data.img} alt="your-name" style={{ width: '12rem' }} />
            </div>
            <div className="introduction-text">
              <h1>Welcome to my portfolio!</h1>
              <h4>My name is {data.name}</h4>
              <span>{data.title}</span>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Introduction;