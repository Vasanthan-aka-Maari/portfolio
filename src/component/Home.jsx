import React from "react";
import Typed from "react-typed";

function Home() {
  return (
    <div className="home-container">
      <h2 className="welcome-text">WELCOME</h2>
      <h1 className="main-heading">
        <Typed typeSpeed={70} strings={["I'm Vasanthan"]} />
      </h1>
      <h2 className="sub-heading">Front-end Developer</h2>
      <ul className="home-links">
        <li>
          <a
            className="link"
            target="_blank"
            href="https://github.com/Vasanthan-aka-Maari"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            href="https://www.instagram.com/vasanthan_vs/"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/vasanthan-prabhagaran-298123196/"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <p className="email">
        <i class="fas fa-envelope"></i> vasanth2754@gmail.com
      </p>
    </div>
  );
}

export default Home;
