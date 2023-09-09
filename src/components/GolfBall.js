// src/GolfBall.js
import React from 'react';

const GolfBall = ({ position }) => {
  const ballStyle = {
    position: 'absolute',
    width: '20px',
    height: '20px',
    backgroundColor: '#ff0000',
    left: `${position}px`,
  };

  return <div className="ball" style={ballStyle}></div>;
};

export default GolfBall;
