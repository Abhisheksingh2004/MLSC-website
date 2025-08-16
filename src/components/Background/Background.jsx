import React, { useState, useEffect } from 'react';
import NeuralGlow from './NeuralGlow';
import './Background.css';

function Background() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="background-container">
      {!isMobile && <NeuralGlow />}
    </div>
  );
}

export default Background;
