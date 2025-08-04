import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';

import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const projects = [
  {
    img: img1,
    link: 'https://github.com/root-sarvesh/terminal-website'
  },
  {
    img: img2,
    link: 'https://github.com/root-sarvesh/InlineMeaningPDF'
  },
  {
    img: img3,
    link: 'https://github.com/root-sarvesh/Poker_C'
  },
  {
    img: img4,
    link: 'https://github.com/root-sarvesh/Fruit-Catcher'
  },
];

const RADIUS = 400;

export default function Projects() {
  const [rotation, setRotation] = useState(0);

  // Mouse‐wheel handler (prevents page scroll + spins)
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      setRotation((prev) => prev + e.deltaY * 0.2);
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Auto‐rotate interval
  useEffect(() => {
    const id = setInterval(() => {
      setRotation((prev) => prev + 2); // ~3°/sec (0.3° every 100ms)
    }, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="projects-container">
      <h2 className="title">My Projects</h2>
      <div className="carousel">
        <div
          className="carousel__track"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {projects.map((project, idx) => (
  <div
    key={idx}
    className="carousel__item"
    style={{
      transform: `
        translate(-50%, -50%)
        rotateY(${idx * (360 / projects.length)}deg)
        translateZ(${RADIUS}px)
      `,
    }}
  >
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={project.img} alt={`Project ${idx + 1}`} />
    </a>
  </div>
))}

        </div>
      </div>
    </div>
  );
}
