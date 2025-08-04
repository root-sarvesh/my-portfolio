import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';

import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const images = [img1, img2, img3, img4];

const Projects = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();  
      setRotation((prev) => prev + e.deltaY * 0.2);
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // smaller radius for tighter spacing
  const radius = 550;

  return (
    <div className="projects-container">
      <h2 className="title">My Projects</h2>
      <div className="carousel">
        <div
          className="carousel__track"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="carousel__item"
              style={{
                transform: `rotateY(${idx * (360 / images.length)}deg) translateZ(${radius}px)`,
              }}
            >
              <img src={img} alt={`Project ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
