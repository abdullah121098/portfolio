import React from 'react';
import './intro.css';
function Introduction() {
  return (
     <div className="introduction-container">
       <div className="introduction-image">
         <img src="path-to-your-image" alt="your-name" />
       </div>
       <div className="introduction-text">
         <h1>Welcome to my portfolio!</h1>
         <p>My name is Abdullah M, </p>
         <p> I am a passionate web developer specializing in React JS. 
           My career goal is to become a full-stack developer, with a focus on the front-end. 
           Please take a look around, and feel free to reach out if you have any questions or would like to connect!
           Currently, I'm working as a freelance developer and developing projects for clients all over the world.</p>
       </div>
     </div>
  );
 }

export default Introduction;