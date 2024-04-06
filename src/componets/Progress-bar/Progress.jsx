import React, { useState, useEffect } from 'react';
import './Progress.scss';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY;
      const viewportHeight = window.innerHeight;

      const newProgress = Math.min(
        (currentScroll / (totalHeight - viewportHeight)) * 100,
        100
      );

      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
      </div>
    </div>
  );
};

export default ProgressBar;
