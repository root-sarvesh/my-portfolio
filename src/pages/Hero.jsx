import { Link } from "react-router-dom";
import '../styles/Home.css';

function Hero() {
  return (
    <div className="hero__background">
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__heading">
            Hi, I'm <span className="hero__name">Sarvesh</span>
          </h1>
          <p className="hero__subheading">
            I am a <span className="hero__developer"> Web Developer</span>
          </p>
          <div className="hero__description">
            <p>
              A tech enthusiast who loves turning
              ideas into interactive, meaningful digital experiences. Currently
              building cool things with JavaScript, React, and AI.
            </p>
          </div>
          <div className="hero__buttons">
             <Link to="/projects" className="hero__cta hero__cta--primary">
              View My Work
            </Link>
            <a href="mailto:sarveshkp23@gmail.com" className="hero__cta hero__cta--secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero__image-container">
          <img
            src="src/assets/face.webp"
            alt="Sarvesh - Full Stack Developer"
            className="hero__image"
          />
          
        </div>
      </section>
    </div>
  );
}

export default Hero;
