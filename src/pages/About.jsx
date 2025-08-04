import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Education</h1>

      <div className="timeline">
        <div className="edu-item">
          <div className="edu-icon">
            <img src=".//assets/ssn.png" alt="SSN Logo" />
          </div>
          <div className="edu-content">
            <h2>Bachelors of Computer and Communication</h2>
            <p className="edu-school">
              SSN College of Engineering{" "}
              <span className="edu-date">• August 2024 – Present</span>
            </p>
            <p>
              Pursuing B.E in Computer Science and Engineering (CSE)
            </p>
          </div>
        </div>

        <div className="edu-item">
          <div className="edu-icon">
            <img src="../assets/gg.jpg" alt="GG Logo" />
          </div>
          <div className="edu-content">
            <h2>High School</h2>
            <p className="edu-school">
              Green Garden Matric Higher Secondary School{" "}
              <span className="edu-date">• April 2022 – March 2024</span>
            </p>
            <p>Senior Secondary (Science - PCM with Computer Science)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
