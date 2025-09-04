import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import ModelViewer from "../components/ModelViewer";
import ssnLogo from "../assets/ssn-logo.svg";
import ggLogo from "../assets/image.png";
import "../styles/About.css";

export default function About() {
  const [showComputer, setShowComputer] = useState(false);

  return (
    <div className="about-container">

    
      <section className="about-section">
        <div className="about-text">
          <h1>
            <ReactTyped
              strings={["just a curious mind building cool things with"]}
              typeSpeed={50}
              showCursor={true}
              cursorChar="█"
              startDelay={300}
              loop={false}
              onComplete={() => {
                const caret = document.querySelector(".typed-cursor");
                if (caret) caret.style.display = "none";
                setShowComputer(true)
              }} 
            />
            <br />
            {showComputer && (
              <span className="highlight-computer">COMPUTERS</span>
            )}
          </h1>
        </div>

        <div className="about-laptop">
          <div className="laptop-canvas">
            <ModelViewer />
          </div>
        </div>
      </section>

      <section className="about-education">
        <h1 className="about-title">Education</h1>

        <div className="timeline">
          <div className="edu-item">
            <div className="edu-icon">
              <img src={ssnLogo} alt="SSN Logo" />
            </div>
            <div className="edu-content">
              <h2>Bachelors of Computer and Communication</h2>
              <p className="edu-school">
                SSN College of Engineering{" "}
                <span className="edu-date">• August 2024 – Present</span>
              </p>
              <p>Pursuing B.E in Computer Science and Engineering (CSE)</p>
            </div>
          </div>

          <div className="edu-item">
            <div id="ggLogo" className="edu-icon">
              <img src={ggLogo} alt="Green Garden Logo" />
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
      </section>

    </div>
  );
}
