import React, { useEffect, useRef } from 'react';
import styles from './Sakura.module.css';

function Sakura() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const numberOfPetals = 50;

    const createPetal = () => {
  const petal = document.createElement('img');
  petal.src = '/petal.png';
  petal.alt = 'Sakura Petal';
  petal.classList.add(styles.petal);

  // Randomize initial horizontal position
  petal.style.left = `${Math.random() * 100}vw`;

  // Randomize animation properties
  petal.style.animationDuration = `${Math.random() * 5 + 5}s`; // Between 5s and 10s
  petal.style.animationDelay = `${Math.random() * 5}s`; // Random delay
  petal.style.opacity = Math.random() * 0.5 + 0.5; // Between 0.5 and 1
  petal.style.visibility = 'hidden'; // Initially hidden

  // Apply initial transform for rotation and scale
  const scale = Math.random() * 0.5 + 0.75;
  const rotation = Math.random() * 360;
  petal.style.transform = `rotate(${rotation}deg) scale(${scale})`;

  container.appendChild(petal);

  // Set visibility to visible at the start of the animation
  petal.addEventListener('animationstart', () => {
    petal.style.visibility = 'visible';
  });

  petal.addEventListener('animationend', () => {
    petal.remove();
  });
};


    // Create initial petals
    for (let i = 0; i < numberOfPetals; i++) {
      createPetal();
    }

    return () => {
      // Clean up any remaining petals
      container.innerHTML = '';
    };
  }, []);

  return <div className={styles.sakuraContainer} ref={containerRef}></div>;
}

export default Sakura;
