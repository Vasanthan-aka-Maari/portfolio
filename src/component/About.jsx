import React from "react";
import "./index.css";

function About() {
  return (
    <div className="about-container">
      <div className="header">
        <h1 className="title">About Me</h1>
        <p className="about-text">
          Hi, I'm Vasanthan a Front-end developer based in India. I love to
          build web applications, more passionate about tech and travels.
          Prefers to work remotely and travel to places and meet new people.
        </p>
      </div>
      <div className="skills-container">
        <ul>
          <li className="skill html">HTML</li>
          <li className="skill css">CSS</li>
          <li className="skill firebase">Firebase</li>
          <li className="skill react">REACT</li>
          <li className="skill js">JAVASCRIPT</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
