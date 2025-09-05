import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed"; 
import ExperienceCard from "../components/ExperinceCard";
import EducationCard from "../components/EducationCard";
import ModelViewer from "../components/ModelViewer";
import ssnLogo from "../assets/ssn-logo.svg";
import ggLogo from "../assets/image.png";
import gssocLogo from "../assets/gssocimg.jpg";
import SocialBar from "../components/SocialBar";
import "../styles/About.css";


export default function About() {
  const [showComputer, setShowComputer] = useState(false);
  const [pos,setPos] = useState({x:0,y:0});
  const [target,setTarget] = useState({x:0,y:0})
  

  //For scroll animation
  useEffect(() => {
    const scrollElements = document.querySelectorAll(
      ".about-education .about-title, .about-education .edu-item"
    );


    const elementInView = (el, fraction = 1.25) => {
      const top = el.getBoundingClientRect().top;
      return top <= (window.innerHeight || document.documentElement.clientHeight) / fraction;
    };

    const handleScroll = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el)) {
          el.classList.add("visible");
        }
      });
    };

    handleScroll(); // trigger on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //for mouse following
  useEffect(() => {
  const handleMouseMove = (e) => {
    setTarget({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

  //for interpolation effect
   useEffect(() => {
    let animationFrame;

    const animate = () => {
      setPos((prev) => {
        const ease = 0.08; // smaller = slower, smokier lag
        const x = prev.x + (target.x - prev.x) * ease;
        const y = prev.y + (target.y - prev.y) * ease;
        return { x, y };
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [target]);


  return (
    <div className="about-container" style={{ position: "relative", overflow: "hidden" }}>

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
                setShowComputer(true);
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

        {/* Smoky Gradient Follower */}
          <div
            className="smoky-gradient"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
            }}
          />

        <h1 className="about-title">Education</h1>

        <div className="timeline">
          <div className="edu-item">
            <div className="edu-icon">
              <img src={ssnLogo} alt="SSN Logo" />
            </div>
            <div className="edu-content">
              <h2>Bachelors of Computer Science and Engineering</h2>
              <p className="edu-school">
                SSN College of Engineering{" "}
                <span className="edu-date">• August 2024 – Present</span>
              </p>
              <p>Pursuing B.E in Computer Science and Engineering (CSE)</p>
            </div>
          </div>

          <div className="edu-item">
            <div className="edu-icon">
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

    
    <section className="about-contact">
        <h1 className="contact-title">Contact Me</h1>
        <div className="text-highilight">
          <p className="contact-text">
            "I am always open for tech chats, projects and even for coffee dates 😉!"
          </p>
        </div>
      <SocialBar/>
      
    </section>


        

    
      
     
    </div>
  );
}
