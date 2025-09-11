import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';

import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const projects = [
  { img: img3, link: 'https://root-sarvesh.github.io/terminal-website/' },
  { img: img4, link: 'https://github.com/root-sarvesh/' },
  { img: img2, link: 'https://github.com/root-sarvesh/Poker_C' },
  { img: img1, link: 'https://github.com/root-sarvesh/Fruit-Catcher' },
];

const RADIUS_DESKTOP = 400;
const RADIUS_MOBILE = 150;

export default function Projects() {
  const [rotation, setRotation] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [radius, setRadius] = useState(RADIUS_DESKTOP);

 
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        setRotation((prev) => prev + e.deltaX * 0.5);
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);


  useEffect(() => {
    const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);

    const handleTouchMove = (e) => {
      if (touchStartX !== null) {
        const deltaX = touchStartX - e.touches[0].clientX;
        setRotation((prev) => prev + deltaX * 0.5);
        setTouchStartX(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => setTouchStartX(null);

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStartX]);


  useEffect(() => {
    const id = setInterval(() => setRotation((prev) => prev + 2), 100);
    return () => clearInterval(id);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth <= 768 ? RADIUS_MOBILE : RADIUS_DESKTOP);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="projects-container">
      <h2 className="title">My Projects</h2>
      <div className="carousel">
        <div
          className="carousel__track"
          style={{ transform: `rotateY(${-rotation}deg)` }}
        >
          {projects.map((project, idx) => {
            const angle = idx * (360 / projects.length) - rotation;
            const normalized = ((angle + 180) % 360) - 180;
            const isFront = Math.abs(normalized) < 90; // front half
            return (
              <div
                key={idx}
                className="carousel__item"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${idx * (360 / projects.length)}deg) translateZ(${radius}px)`,
                  zIndex: isFront ? 10 : 1, // front item clickable
                }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.img} alt={`Project ${idx + 1}`} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
